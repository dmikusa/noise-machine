<nav-bar>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#/">Noise Machine</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li each={ this.navItems } class={ active: this.active === id }><a href={ href }>{ name }</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
    </nav>

    <script>
        this.navItems = [
            {id: "home", name: "Home", href: "#/"},
            {id: "about", name: "About", href: "#/about"}];
        this.active = opts.defaultActive;

        this.bus.on('route', (page) => {
            this.active = page;
            this.update();
        });
    </script>
</nav-bar>
