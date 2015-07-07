var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var User = db.Model.extend({
  tableName: "users",
  initialize: function(){

    // this.on('creating', function (model, attrs, options) {
    //   this.hashIt(model.get('password')+'oregano', function(theHash){
    //     console.log(theHash);
    //     model.set('password', theHash);
    //     console.log(model.get('password'));
    //   });
    // });
  },
  hashIt: function(thingToHash, endCallback){
    bcrypt.hash(thingToHash,null,null,function(err,hash){
      if(err) console.log(err);
      endCallback(hash);
    })
  }

});

module.exports = User;
