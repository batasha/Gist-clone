G.Views.GistsIndexView = Backbone.View.extend({
  render: function() {
    var that = this;

    var renderedContent = JST["gists/index"]({
      gists: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
})