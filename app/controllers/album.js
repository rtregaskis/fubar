import Ember from 'ember';

export default Ember.Controller.extend({
    album : function(){
        return this.get('model');
    }.property()
});
