/* view */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');

// utility
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

// local
var template = require('../../templates/index.hbs');

var BlogForm = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-form',
  template: template,
  events: {
    'submit': 'addPost'
  },

  // initialize: function(){
  //
  //
  // },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  addPost: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.create(formData);


  }

});


module.exports = BlogForm
