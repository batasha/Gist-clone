G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button#favoriteButton": "toggleFavorite"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  toggleFavorite: function(event) {
    $currentState = $("#favoriteForm").attr("method")

    if($currentState === "post"){
      $("#favoriteForm").attr("method", "delete");
      $("#favoriteButton").html("Unfavorite");

    }
    else {
      $("#favoriteForm").attr("method", "post");
      $("#favoriteButton").html("Favorite");
    }
  }


});