var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: "users",
  initialize: function(){

    this.on('creating', function (model, attrs, options) {

      bcrypt.hash(model.get('password')+'oregano',null, null, function(err, hash) {
        if(err) console.log(err);
        model.set('password', hash);
      });
    });
  },

});

module.exports = User;
