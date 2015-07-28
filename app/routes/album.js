import Ember from 'ember';

export default Ember.Route.extend({
    model:function (params){
        var a = this.store.findRecord('album', params.album_id);
        return a;
    }
});
