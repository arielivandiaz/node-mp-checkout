var express = require('express');
var router = express.Router();
const mercadopago = require("mercadopago");

const payer = require('../config/mp.user.test.json');
const default_preference = require('../config/mp.conf.json');
const token = require('../config/mp.token.json');

mercadopago.configure({
  access_token: token.access_token,
  integrator_id: token.integrator_id
});


/* POST A FORM WITH USER DETAILS LIKE : ../config/mp.user.test.json */
router.post('/checkout', function (req, res) {

  let preference = default_preference;

  preference.payer = payer;
  preference.items = [req.body];
  
  // forEach item do : 
  preference.items[0].quantity =  parseInt(req.body.quantity);
  preference.items[0].unit_price =  parseFloat(req.body.unit_price)

  mercadopago.preferences.create(preference)
    .then( (response) => {
      var url = "https://www.mercadopago.com/mla/checkout/start?pref_id=" + response.body.id;      
      res.redirect(url);
    }).catch(function (error) {
      console.log(error);
    });

});


/* IPN Handler */
router.get('/ipn', function (req, res) {
  console.log("IPN GET");
  console.log(req.query);
  console.log("/*IPN GET");
});

router.post('/ipn', function (req, res) {

  console.log("IPN POST");
  console.log(req.body);
  console.log("/*IPN POST");
});




module.exports = router;
