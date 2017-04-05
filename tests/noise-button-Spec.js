describe('Noise Button Tag', function () {

  beforeEach(function () {
    // create mounting points
    const ap = document.createElement('noise-button');
    ap.innerHTML = 'Waves';
    document.body.appendChild(ap);
  });

  it('should mount the tag', function () {
    const tag = riot.mount('noise-button')[0];
    expect(document.querySelector('noise-button button')).not.toBeNull();
    tag.unmount();
  });

  it('should have source name set', function() {
    const tag = riot.mount('noise-button')[0];
    expect(document.querySelector('noise-button button').textContent).toBe('Waves');
    tag.unmount();
  });

  it('should emit source changed event when clicked', function(done) {
    // setup bus for event trigger / listening
    const bus = {};
    riot.observable(bus);
    var source = null;
    bus.on('source-change', function(s) {
        source = s;
    });
    // mount the tag
    const tag = riot.mount('noise-button', {
        source: 'noise/waves',
        bus: bus})[0];
    // simulate click
    document.querySelector('noise-button button').click();
    // wait for event
    window.setTimeout(function() {
        expect(source).not.toBeNull();
        tag.unmount();
        done();
    });
  });

});
