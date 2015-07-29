import Ember from 'ember';
var run = Ember.run;
export default Ember.Service.extend({
    isPlaying:false,
    audioElement:null,
    song:null,
    currentTime:0,
    setupPlayer:function (){
        var el = document.createElement('audio');
        el.addEventListener('play', run.bind(this, 'didStartPlaying'));
        el.addEventListener('pause', run.bind(this, 'didPausePlaying'));
        el.addEventListener('timeupdate', run.bind(this, 'didUpdateTime'));
        this.set('audioElement', el);
    }.on('init'),
    pause:function (){
        this.get('audioElement').pause();
    },
    play:function (song){
        this.set('audioElement.src', song.get('url'));
        this.get('audioElement').play();
        this.set('song', song);
    },
    resume:function (){
        this.get('audioElement').play();
    },
    didStartPlaying:function (){
        console.log('did play');
        this.set('isPlaying', true);
    },
    didPausePlaying:function (){
        console.log('did pause');
        this.set('isPlaying', false);
    },
    didUpdateTime:function (){
        var ct = Math.floor(this.get('audioElement.currentTime'));
        this.set('currentTime', ct);
    },
    willDestroy:function (){
        this.get('audioElement').pause();
        this.set('audioElement.src', '');
    }
});
