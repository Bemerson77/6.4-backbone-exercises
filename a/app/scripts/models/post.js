/* model */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');


// local

var Post = Backbone.Model.extend({

});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandon'
});


module.exports = {
  Post: Post,
  PostCollection: PostCollection
}
