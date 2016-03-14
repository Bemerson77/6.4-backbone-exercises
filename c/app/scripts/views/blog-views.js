/* VIEWS */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');


// local
var listTemplate = require('../../templates/blog-list.hbs');
var bodyTemplate = require('../../templates/blog-body.hbs');

// var BlogItemView = Backbone.View.extend({
//   tagName: "ul",
//   className: "blog-list",
//
//   initialize: function(){
//     this.listenTo(this.collection, "add", this.renderChild);
//   },
//
//   renderChild: function(contact){
//     var view = new BlogItemList({model: Blog});
//     this.$el.append(view.render().el);
//   },
//   render: function(){
//     return this;
//   }
//
// });


var BlogItemList = Backbone.View.extend({
  template: listTemplate,
  // tagName: "",
  className: "blog-list-item",
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(model){
    this.$el.append(this.template(model.toJSON()));
    return this;
  }

});
// console.log(BlogItemList);




module.exports = {
  // BlogItemView: BlogItemView,
  BlogItemList: BlogItemList
};
