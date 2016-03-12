/** MODEL **/

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');

// local


var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandonb'
});


module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
};
