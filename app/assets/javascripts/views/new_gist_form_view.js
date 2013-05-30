G.Views.NewGistFormView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    that.gist = new G.Models.Gist();
    that.gistForm = new Backbone.Form({
      model: that.gist
    });
  },

  render: function() {
    console.log("I'm in the render function!");
    var that = this;
    console.log(that.gistForm);
    //debugger;
    //that.gistForm.render();
    console.log(that.gistForm.el);

    that.$el.html(that.gistForm.el);
    $("#content").append(that.gistForm.render().el);
    return that;
  }
});