<noise-button>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <button type="button"
                class="btn btn-default btn-block"
                onclick={ this.changeTrack }><yield /></button>
    </div>

    <script>
        this.changeTrack = () => {
            this.bus.trigger('source-change', opts.source);
        }
    </script>
</noise-button>
