/* MAIN.js */

// 3rd party
var $ = require('jquery');
// var handlebars = require('handlebars');

// local
var models = require('./models/blog-models');
var Views = require('./views/blog-views');




var blogItemsCollection = new models.BlogCollection();
var blogItemView = new Views.BlogItemList({collection: blogItemsCollection});


blogItemsCollection.fetch();


$('.blog-list').append(blogItemView.el);

// blogItemsCollection.fetch().done(function(){
//   blogItemsCollection.each(function(items){
//   console.log(items.get('title'));
//   });
// });
