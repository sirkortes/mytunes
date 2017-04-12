// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

  	this.on('add', function(e){

  		if ( this.length === 1 ){
        // console.log("PLAYING FROM ADD!")
  			this.playFirst();
  		}


  	});

  	this.on('ended', function(e){
      // console.log("ENDED")
  		// this.remove(this.at(0));
  		// if ( this.length > 0){ this.playFirst(); }
      this.at(0).dequeue();
  	});

  	this.on('dequeue', function(e){

      // console.log("DEQUEUE!")
      // debugger;
      this.remove(this.at(0));

      if ( this.length > 0 ){ 
        // console.log("calling playFirst in deque handler")
        this.playFirst(); 
      }

  	});

    // UNEXPECTED NOT NEEDED?
    // this.on('enqueue', function(song){
    //   console.log("enqueue this:",this, e);
    //   this.add(song);
    // });

  	// this.on('update', function(e){
  	// 	this.playFirst();
  	// })

  },



  playFirst: function(){
    // console.log("PLAYING FIRST");
  	this.at(0).play();
  }







});