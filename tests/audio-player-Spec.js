describe('Audio Player Tag', function () {

  beforeEach(function () {
    // create mounting points
    const ap = document.createElement('audio-player');
    document.body.appendChild(ap);
  });

  it('should mount the tag', function () {
    // setup bus for event trigger / listening
    const bus = {};
    riot.observable(bus);
    // mount the tag
    const tag = riot.mount('audio-player', {
        defaultSource: 'noise/waves',
        bus: bus})[0];
    expect(document.querySelector('audio')).not.toBe(null);
    tag.unmount();
  });

  it('should have a source list set', function() {
    // setup bus for event trigger / listening
    const bus = {};
    riot.observable(bus);
    // mount the tag
    const tag = riot.mount('audio-player', {
        defaultSource: 'noise/waves',
        bus: bus})[0];
    expect(document.querySelectorAll('audio source').length).toBe(2);
    tag.unmount();
  });

  it('should update source on a `source-change` event', function(done) {
    // setup bus for event trigger / listening
    const bus = {};
    riot.observable(bus);
    // mount the tag
    const tag = riot.mount('audio-player', {
        defaultSource: 'noise/waves',
        bus: bus})[0];
    // confirm initial setup, should be two source tags
    expect(document.querySelectorAll('audio source').length).toBe(2);
    // look at outerHTML because PhantomJS doesn't support audio / video tags
    //   no methods defined and properties are not present (as of 4/2016).
    //   https://github.com/ariya/phantomjs/issues/10839
    expect(document.querySelectorAll('audio source')[0].outerHTML).toContain('src="noise/waves.ogg"');
    expect(document.querySelectorAll('audio source')[1].outerHTML).toContain('src="noise/waves.mp3"');
    // send `source-change` event
    bus.trigger('source-change', 'noise/rain');
    // wait for event and test change has been made
    window.setTimeout(function() {
        expect(document.querySelectorAll('audio source')[0].outerHTML).toContain('src="noise/rain.ogg"');
        expect(document.querySelectorAll('audio source')[1].outerHTML).toContain('src="noise/rain.mp3"');
        // clean up
        tag.unmount();
        done();
    });
  });

});
