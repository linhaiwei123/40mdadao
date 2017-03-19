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
                return this.getComponent('conservative-behavior-tree');
            }
        }
    },

    onLoad: function () {
        
        this._fsm = require('conservative-fsm').create();
        // this._fsm.onattacking = this.onAttacking.bind(this);
        // this._fsm.ondefencing = this.onDefencing.bind(this);
        // this._fsm.onescaping = this.onEscaping.bind(this);
        this._player = cc.find('Canvas/player');
        this.node.on('bt-action',this.onBTAction,this);
        this._fsm.startup();
    },

    onBTAction: function(e){
        if(this._fsm.can(e.detail)){
            this._fsm[e.detail]();
        }
    },

    // onAttacking: function(){
        
    // },
    
    // onDefencing: function(){
        
    // },

    // onEscaping: function(){

    // },

    update: function(){
        //循环调用行为树判定
        this._behaviorTree.tick();
        //console.log(this._fsm.current);
    },

    lateUpdate: function(){


        let targetPosition = this._player.position;
        if(this._fsm.current == 'attacking'){
            //追玩家
            let targetVector = cc.pSub(targetPosition,this.node.position);
            let targetStep = cc.pMult(cc.pNormalize(targetVector),this._entityData.speed);
            if(targetVector.mag() <= this._entityData.speed){return;}
            this.node.position = cc.pAdd(targetStep,this.node.position);
            
        }else if(this._fsm.current == 'defencing'){
            //原地不动
        }else if(this._fsm.current == 'escaping'){
            //远离玩家
            //如果出了屏幕 销毁
             let targetVector = cc.pSub(targetPosition,this.node.position);
            let targetStep = cc.pMult(cc.pNormalize(targetVector),this._entityData.speed);
            //if(targetVector.mag() <= this._entityData.speed){return;}
            this.node.position = cc.pAdd(cc.pNeg(targetStep),this.node.position);
            if(Math.abs(this.node.x) >= 480 ||Math.abs(this.node.y) >= 320){
                //销毁
                if(this.node.parent){
                    this.node.removeFromParent();
                }
            }
        }
    },  

});
