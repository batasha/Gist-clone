G.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function(sidebar, content, gists) {
    console.log("creating router");
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.gists = gists;
    this.favoriteGists = new G.Collections.Favorites();
    this.favoriteGists.fetch();
  },

  routes: {
    "": "index",
    "gists/:id": "detail"
  },

  index: function() {
    var that = this;

    var gistsIndexView = new G.Views.GistsIndexView({
      collection: that.gists
    });

    that.$sidebar.html(gistsIndexView.render().$el);
  },

  detail: function(id) {
    var that = this;

    var gistDetailView = new G.Views.GistDetailView({
      model: that.gists.get(id)
    });
    console.log(gistDetailView.model);
    console.log(id);

    that.$content.html(gistDetailView.render().$el);
  }
});