window.G = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(sidebar, content, gistsData) {
    var gists = new G.Collections.Gists(gistsData);

    new G.Routers.GistsRouter(sidebar, content, gists);

    Backbone.history.start();
  }
};



