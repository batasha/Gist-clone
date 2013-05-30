G.Views.GistDetailView = Backbone.View.extend({
  events: {

  },

  render: function() {
    var that = this;

    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    var ids = that.collection.pluck("id");

    if (_.contains(ids, that.model.get("id"))) {
      that.model.isFavorite = true;
    } else {
      that.model.isFavorite = false;
    }

    that.$el.html(renderedContent);
    return that;
  },



});