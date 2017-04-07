// import jquery and bootstrap
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
jQuery.noConflict(true);

// import everything else
import riot from 'riot'
import route from 'riot-route'
import Display from './tags/display.tag'
import Home from './tags/home.tag'
import About from './tags/about.tag'
import NavBar from './tags/nav-bar.tag'
import AudioPlayer from './tags/audio-player.tag'
import NoiseButton from './tags/noise-button.tag'

const bus = {};
riot.observable(bus);


// mount all tags
riot.mount("nav-bar, display");

// setup routing
route('/', () => {
    bus.trigger('route', 'home');
});

route('/about', () => {
    bus.trigger('route', 'about');
});

route.start(true);
