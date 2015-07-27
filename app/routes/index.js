import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        var albums =  this.store.findAll('album');
        return albums;
    }
});
