import DS from 'ember-data';

export default DS.Model.extend({
    artist: DS.attr(),
    artwork: DS.attr(),
    name: DS.attr(),
    isExplicit: DS.attr(),
    songs: DS.hasMany('song'),

    songDurations: Ember.computed.mapBy('songs', 'duration'),
    totalDuration: Ember.computed.sum('songDurations'),
    songCount:Ember.computed.alias('songs.length')
    /*
    totalDuration : function (){
        return this.get('songs').reduce(function (total, song) {
            return total + song.get('duration');
        }, 0);
    }.property('songs.@each.duration'),
    songCount: function (){
        return this.get('songs.length');
    }.property('songs.length')
    */
});
