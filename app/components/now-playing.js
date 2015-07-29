import Ember from 'ember';

export default Ember.Component.extend({
    player: Ember.inject.service(),
    tagName:'footer',
    classNames:['now-playing'],
    song: Ember.computed.readOnly('player.song'),

    actions:{
        resume:function (){
            this.get('player').resume();
        },
        pause: function () {
            console.log('np pause');
            this.get('player').pause();
        }
    }
});
