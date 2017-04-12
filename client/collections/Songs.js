// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(){

  	// sync("read", this, function(e){
  	// 	console.log("sync")
  	// })
  	var context = this;

  	Backbone.ajax({
  		url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  		method: 'GET',
  		contentType: 'application/json',
  		success: function(data){
  			data.results.forEach(function(song){
  				// console.log("adding a song")
	  			context.push(song);
  			});

  			// context.data.results
  		},
  		error: function(error){
  			console.log("ERROR: ",error);
  			return error;
  		}

  	})
  }

});
