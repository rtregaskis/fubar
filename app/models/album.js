import DS from 'ember-data';

export default DS.Model.extend({
    artist: DS.attr(),
    artwork: DS.attr(),
    name: DS.attr(),
    isExplicit: DS.attr(),
    songs: DS.hasMany('song'),
    totalDuration : function (){
        return this.get('songs').reduce(function (total, song) {
            return total + song.get('duration');
        }, 0);
    }.property('songs.@each.duration'),
    songCount: function (){
        return this.get('songs.length');
    }.property('songs.length')
});
