import riot from 'riot'
import CarKey from './tags/CarKey.tag'
import CarHeadlights from './tags/CarHeadlights.tag'

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.started = false;
        riot.observable(this);
        this.on('start', () => {
            console.log('Started!');
            this.started = true;
        });
        this.on('stop', () => {
            console.log('Stopped!');
            this.started = false;
        });
    }
}

var car = new Car("Ford", "Focus");

riot.mount("*", { car: car });
