import riot from 'riot'
import AudioPlayer from './tags/audio-player.tag'
import NoiseButton from './tags/noise-button.tag'

const bus = {};
riot.observable(bus);

riot.mount("*", {bus: bus});
