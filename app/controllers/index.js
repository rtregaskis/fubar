import Ember from 'ember';

export default Ember.Controller.extend({
    albums : function(){
        var a = this.get('model');
        return a;
    }.property()
});
