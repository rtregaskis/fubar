import Ember from 'ember';
var run = Ember.run;
export default Ember.Service.extend({
    isPlaying:false,
    audoElement:null,
    pause:function (song){
        this.get('audioElement').pause();
    },
    play:function (song){
        this.set('audioElement.src', song.get('url'));
        this.get('audioElement').play();
    },
    setupPlayer:function (){
        var el = document.createElement('audio');
        el.addEventListener('play', run.bind(this, 'didStartPlaying'));
        el.addEventListener('pause', run.bind(this, 'didPausePlaying'));
        this.set('audioElement', el);
        console.log('player init');
    }.on('init'),
    didStartPlaying:function (){
        this.set('isPlaying', true);
    },
    didPausePlaying:function (){
        this.set('isPlaying', false);
    },
    willDestroy:function (){
        this.get('audioElement').pause();
        this.set('audioElement.src', '');
    }
});
