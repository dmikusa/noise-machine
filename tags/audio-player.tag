<audio-player>
    <div class="col-xs-12 col-md-12">
        <audio ref="audio" controls="true" loop="true">
            <source each={ suffix in ['.ogg', '.mp3'] } src={ this.source + suffix } />
            Your browser does not support the audio element.
        </audio>
    </div>

    <script>
        this.source = opts.defaultSource;

        opts.bus.on('source-change', (source) => {
            this.source = source;
            this.update();
            this.refs.audio.load();
            this.refs.audio.play();
        });
    </script>
</audio-player>
