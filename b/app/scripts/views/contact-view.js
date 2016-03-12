/** CONTACT VIEW **/

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');

// local
var formTemplate = require('../../templates/contact-form.hbs');

// utility

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var ContactView = Backbone.View.extend({
  template: formTemplate,
  tagName: 'form',
  className: 'contact-form',
  events: {
    'submit': 'addContact'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  addContact: function(e){
    e.preventDefault();
    var contactData = this.$el.serializeObject();
    this.collection.create(contactData);

  }

});

module.exports = {
  ContactView: ContactView
};
