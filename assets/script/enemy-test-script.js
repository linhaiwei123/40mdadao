cc.Class({
    extends: cc.Component,

    editor: {
        requireComponent: 'entity-data',
    },

    properties: {
        _entityData: {
            get: function(){
                return this.getComponent('entity-data');
            }
        },

        //_destroying: false,
        _hurting: false,
        _hurtTimeStamp: null,
        _hurtValue: null,
        _firstTimeHurt: false,
        hurtDeltaTime: 0.3,
    },

    onLoad: function () {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter: function(other,self){
        if(other.node.group == 'equip'){
           this._hurtTimeStamp = Date.now();
           this._hurtValue = other.getComponent('entity-data').attackValue;
           this._hurting = true;
           this._firstTimeHurt = true;
        }
    },

    onCollisionExit: function(other,self){
        if(other.node.group == 'equip'){
            this._hurting = false;
        }
    },

    update: function(dt){
        
        if(this._hurting){
            if(this._hurtTimeStamp + this.hurtDeltaTime * 1000 <= Date.now() || this._firstTimeHurt){
                this._firstTimeHurt = false;
                this._hurtTimeStamp = Date.now();
                this._entityData.hp -= this._hurtValue;
                this.node.emit('update-hp');
                //console.log(this._entityData.hp);
                if(this._entityData.hp <= 0){
                    if(this.node.parent){
                        this.node.removeFromParent();
                    }
                }
            }
        }
    }

});
