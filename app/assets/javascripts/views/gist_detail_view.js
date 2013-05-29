G.Views.GistDetailView = Backbone.View.extend({
  render: function() {
    var that = this;

    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },
});