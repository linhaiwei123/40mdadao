cc.Class({
    extends: cc.Component,

    properties: {
        _fsm: null,
        _player: null,
        _entityData: {
            get: function(){
                return this.getComponent('entity-data');
            }
        },
         _behaviorTree: {
            get: function(){
                return this.getComponent('invasive-behavior-tree');
            }
        },
        _booming: false,
        boomDuration: 0,
    },

    onLoad: function () {
        this._fsm = require('invasive-fsm').create();
        this._player = cc.find('Canvas/player');
        this.node.on('bt-action',this.onBTAction,this)
        this._fsm.startup();
    },

    onBTAction: function(e){
        if(this._fsm.can(e.detail)){
            this._fsm[e.detail]();
        }
    },

    update: function(){
        this._behaviorTree.tick();
    },

    lateUpdate: function(){
        let targetPosition = this._player.position;
        if(this._fsm.current == 'attacking' || this._fsm.current == 'crazy-attacking'){
              //追玩家
            let targetVector = cc.pSub(targetPosition,this.node.position);
            let targetStep = cc.pMult(cc.pNormalize(targetVector),this._entityData.speed);
            if(targetVector.mag() <= this._entityData.speed){return;}
            this.node.position = cc.pAdd(targetStep,this.node.position);
            //console.log(this._entityData.speed);
        }else if(this._fsm.current == 'self-booming'){
            if(!this._booming){
                this._booming = true;
                this.node.getChildByName('self-boom-mask').active = true;
                this.scheduleOnce(function(){
                    if(this.node.parent){
                        this.node.removeFromParent();
                    }
                }.bind(this),this.boomDuration)
            }
        }
    }



});
