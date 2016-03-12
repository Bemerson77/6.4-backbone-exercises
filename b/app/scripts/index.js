/** main js **/

// 3rd party
var $ = require('jquery');


// local
var View = require('./views/contact-view');
var model = require('./models/contact-model');


var contactCollection = new model.ContactCollection();
var contactForm = new View.ContactView({collection: contactCollection});



$('.contacts').html(contactForm.render().el);
