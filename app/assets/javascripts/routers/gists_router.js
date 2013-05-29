G.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function(sidebar, content, gists) {
    console.log("creating router");
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.gists = gists;
  },

  routes: {
    "": "index"
  },

  index: function() {
    var that = this;

    var gistsIndexView = new G.Views.GistsIndexView({
      collection: that.gists
    });

    that.$sidebar.html(gistsIndexView.render().$el);
  }
})