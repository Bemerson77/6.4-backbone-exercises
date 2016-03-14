/* MODELS */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');

// local

var Blog = Backbone.Model.extend({

});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandon'
});

module.exports = {
  Blog: Blog,
  BlogCollection: BlogCollection
};
