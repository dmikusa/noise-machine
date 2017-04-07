<audio-player>
    <div class="col-xs-12 col-md-12">
        <audio controls="true" loop="true">
            <source each={ suffix in ['.ogg', '.mp3'] } src={ this.source + suffix } />
            Your browser does not support the audio element.
        </audio>
    </div>

    <script>
        this.source = opts.defaultSource;

        opts.bus.on('source-change', (source) => {
            this.source = source;
            this.update();
            var audio = document.querySelector('audio');
        });
    </script>
</audio-player>
