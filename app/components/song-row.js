import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    isPlaying: false,
    actions:{
        play: function (){
            console.log(this.get('song.track'));
            console.log(this.get('song.url'));
            this.set('isPlaying', true);
        },
        pause: function () {
            this.set('isPlaying', false);
        }
    }
});
