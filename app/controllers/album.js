import Ember from 'ember';

export default Ember.Controller.extend({
    album : function(){
        var a = this.get('model');
        console.log(a);
        return a;
    }.property()
});
