// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  enqueue: function(song) {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', song);//, this);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
