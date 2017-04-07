<display>
    <virtual data-is="{ this.page }" bus={ opts.bus }></virtual>

    <script>
        this.page = opts.defaultPage;

        this.bus.on('route', (page) => {
            this.page = page;
            this.update();
        });
    </script>
</display>
