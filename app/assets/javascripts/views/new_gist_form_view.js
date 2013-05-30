G.Views.NewGistFormView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    that.gist = new G.Models.Gist();
    that.gistForm = new Backbone.Form({
      model: that.gist
    });
  },

  render: function() {
    var that = this;
    //that.gistForm.render();
    that.$el.html(that.gistForm.render().el);
    return that;
  }
});