import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    track: DS.attr(),
    name: DS.attr(),
    duration: DS.attr(),
    url: DS.attr(),
    album: DS.belongsTo('album'),
    artist: Ember.computed.alias('album.artist'),
    artwork: Ember.computed.alias('album.artwork')
});
