// NAME: autoVolume
// AUTHOR: shadythgod
// DESCRIPTION: Auto-adjusts volume during long listening sessions so your ears don't start to hurt

(function autoVolume() {
    // Checks if Spicetify's local storage is available; closes and restarts the function if not.
    if (!Spicetify.LocalStorage) {
        setTimeout(autoVolume, 1000);
        return;
    }

    // Time interval in minutes (default: 5)
    const interval = 5;

    // Minimum volume percentage. (default: 50)
    const minimumVolume = 50;

    console.info("%cThe autoVolume extension by shadythgod has been loaded.\n" +
        `When enabled, the volume will automatically be reduced every ${interval} minutes.\n` +
        "Check out my github: https://github.com/shadythgod", "font-weight: bold; font-style: italic;");

    // Boolean value describing if extension is enabled
    let isEnabled = Spicetify.LocalStorage.get("autoVolume") === "1";

    // Registers new Menu Item in the Spotify Profile menu.
    new Spicetify.Menu.Item("Auto Volume", isEnabled, (self) => {
        // Toggles value
        isEnabled = !isEnabled;
        // Sets toggled value
        Spicetify.LocalStorage.set("autoVolume", isEnabled ? "1" : "0");
        // Sets the state of menu item using toggle value
        self.setState(isEnabled);
        // Runs the main function to handle volume
        volume(isEnabled);
    }).register();

    // Gets the current volume (Multiplied by 100 because original value is a decimal between 0 and 1)
    function getVol() {
        return (Spicetify.Player.getVolume()) * 100;
    }

    // Decreases volume by 6.25%
    // Unfortunately, there seems to be no way in spicetify currently to change the percentage by which to decrease the volume
    function decVol() {
        Spicetify.Player.decreaseVolume();
    }

    // Volume Change Interval
    function volumeInterval() {
        return window.setInterval(function () {
            let currentVolume = getVol();
            if (currentVolume > minimumVolume) {
                decVol();
            }
        }, (interval * 60) * 1000);
    }

    // Handle ID of the set interval
    let volumeIntervalID = volumeInterval();

    // Toggle the interval
    function volume(isEnabled) {
        if (isEnabled) {
            volumeIntervalID = volumeInterval();
        } else {
            if (volumeIntervalID !== undefined && volumeIntervalID !== null) window.clearInterval(volumeIntervalID);
        }
    }
})()
