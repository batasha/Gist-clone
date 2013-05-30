G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button#favorite" : "favorite",
    "click button#unfavorite" : "unfavorite"
  },

  render: function() {
    var that = this;

    var ids = that.collection.pluck("id") || [];

    if (_.contains(ids, that.model.get("id"))) {
      that.model.isFavorite = true;
    } else {
      that.model.isFavorite = false;
    }

    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  favorite: function() {
    var that = this;

    $.ajax({
     type: 'POST',
     url: 'gists/'+that.model.get('id')+'/favorite.json',
     success: function(){
       that.collection.fetch({async: false});
       that.render();
     }
    });
  },

  unfavorite: function() {
    var that = this;

    $.ajax({
     type: 'DELETE',
     url: 'gists/'+that.model.get('id')+'/favorite.json',
     success: function(){
       that.collection.fetch({async: false});
       that.render();
     }
    });
  }
});