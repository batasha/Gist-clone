G.Collections.Favorites = Backbone.Collection.extend({
  model: G.Models.Favorite,
  url: "/favorites"

  favorited: function(current_gist_id) {
    this.
  }
})



// [
//   {course: 'science', data: [...]},
//   {course: 'maths', data: [...]},
//   {course: 'aviation', data: [...]}
// ]
// This will give you a collection with 3 models, and each of those models will have 2 attributes: one attribute course and one data. Now, to loop through them:
//
// this.collection.each(function(m) {
//   console.log(m.get('course')); // will be science, maths or aviation
//   console.log(m.get('data')); // will be the corresponding array
// });