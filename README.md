# spicetify-autoVolume
Extension for spicetify-cli which automatically decreases volume at specific intervals of time.

### Why?
I've made this extension for people who listen to music for long periods of time and care about their ears. This extension, when enabled using the toggle in the menu, automatically decreases the volume by 6.25% at specific intervals of time until the volume reaches a specified minimum percentage. This way, you can listen to music for long time and making sure you're not hurting your ears much.

If you're someone who listens to music for long periods of time, I really recommend this. Your hearing matters!

### While you're at it, make sure to check out the **[Make Listening Safe](http://www.who.int/pbd/deafness/activities/MLS_Brochure_English_lowres_for_web.pdf?ua=1)** campaign by the World Health Organization. It has much more information about the effects of noise and what can you do to ensure you are listening safely.
### Also check out the [Reading Material](https://github.com/ShadyThGod/spicetify-autoVolume/wiki/Reading-Material) section of the wiki for more links related to the subject.

## Requirements
- Make sure you have installed spicetify-cli ([instructions here](https://github.com/khanhas/spicetify-cli/wiki/Installation)) and generated config ([instructions here](https://github.com/khanhas/spicetify-cli/wiki/Basic-Usage))

## Installation
- Download [autoVolume.js](https://github.com/ShadyThGod/spicetify-autoVolume/raw/master/autoVolume.js)
- Copy/move the file to any of the following:
  - `Extensions` folder in Home directory:
    - Windows: `%userprofile%\.spicetify\Extensions\`
    - Linux: `$XDG_CONFIG_HOME/.config/spicetify/Extensions/ or ~/.config/spicetify/Extensions`
    - MacOS: `~/spicetify_data/Extensions`
  - `Extensions` folder in Spicetify executable directory.
- Apply using either of the commands:
  - `spicetify backup apply`
  - `spicetify apply`
