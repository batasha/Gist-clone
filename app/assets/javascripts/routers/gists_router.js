G.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function(sidebar, content, gists) {
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.gists = gists;
  },

  routes: {
    "": "index",
    "gists/new": "new",
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
    var favorites = new G.Collections.Favorites();
    favorites.fetch({async: false});

    var gistDetailView = new G.Views.GistDetailView({
      collection: favorites,
      model: that.gists.get(id)
    });

    that.$content.html(gistDetailView.render().$el);
  },

  new: function() {
    var that = this;

    var newGistFormView = new G.Views.NewGistFormView();
    console.log(newGistFormView);

    that.$content.html(newGistFormView.render().$el);
  }
});