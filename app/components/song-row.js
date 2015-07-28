import Ember from 'ember';
var inject = Ember.inject;
export default Ember.Component.extend({
    player: inject.service(),
    setup:function () {
        this.get('player');
    }.on('init'),

    tagName: 'tr',
    isPlaying: false,
    actions:{
        play: function (){
            console.log(this.get('song.track'));
            console.log(this.get('song.url'));
            this.get('player').play(this.get('song'));
            this.set('isPlaying', true);
        },
        pause: function () {
            this.get('player').pause();
            this.set('isPlaying', false);
        }
    }
});
