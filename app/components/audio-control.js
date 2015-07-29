import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames:['play'],

    /** actions */
    actions:{
        play: function (){
            this.sendAction('play');
        },
        pause: function () {
            console.log('ac pause');
            this.sendAction('pause');
        }
    }
});
