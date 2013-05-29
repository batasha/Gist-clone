window.G = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(sidebar, content, gistsData) {
    console.log("initializing");
    console.log(gistsData);
    var gists = new G.Collections.Gists(gistsData);
    console.log(gists);
    new G.Routers.GistsRouter(sidebar, content, gists);

    Backbone.history.start();
  }
};



