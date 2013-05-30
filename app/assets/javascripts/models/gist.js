G.Models.Gist = Backbone.Model.extend({
  schema: {
    title: 'Text'
  },

  relations: [{
    type: "HasMany",
    key: 'gistFiles',
    relatedModel: "G.Models.GistFile",
    collectionType: "G.Collections.GistFiles",
    includeInJSON: false,
    reverseCollection: {
      key: "gist",
      keySource: "gist_id",
      includeInJSON: "id"
    }
  }]
});
