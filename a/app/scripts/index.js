/* main js */

// 3rd party
var $ = require('jquery');

// local
var BlogForm = require('./views/blog-post');
var model = require('./models/post')

var theCollection = new model.PostCollection();


var blogForm = new BlogForm({collection: theCollection});

$('.blog').html(blogForm.render().el);
