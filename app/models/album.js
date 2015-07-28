import DS from 'ember-data';

export default DS.Model.extend({
    artist: DS.attr(),
    artwork: DS.attr(),
    name: DS.attr(),
    isExplicit: DS.attr(),
    songs: DS.hasMany('song')
});
