import DS from 'ember-data';

export default DS.Model.extend({
    track: DS.attr(),
    name: DS.attr(),
    duration: DS.attr(),
    url: DS.attr(),
    album: DS.attr()
});
