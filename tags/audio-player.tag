<audio-player>
    <div class="col-xs-12 col-md-12">
        <audio controls="true" loop="true">
            <source each={ suffix in ['.ogg', '.mp3'] } src={ this.source + suffix } />
            Your browser does not support the audio element.
        </audio>
    </div>

    <script>
        this.source = opts.defaultSource;

        this.bus.on('source-change', (source) => {
            this.source = source;
            this.update();
            var audio = document.querySelector('audio');
            // only load if we're in a good state, if we try to load in other
            //  states then we'll get an exception.
            //  http://stackoverflow.com/a/41862995/1585136
            if (audio.readyState === 4) {
                audio.load();
            }
            audio.play();
        });
    </script>
</audio-player>
