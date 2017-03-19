cc.Class({
    extends: cc.Component,

    properties: {
        _entityData: {
            get: function(){
                return this.node.parent.getComponent('entity-data');
            }
        },
        _hpLabel: {
            get: function(){
                return this.getComponent(cc.Label)
            }
        }
    },

    onLoad: function () {
        this.onUpdateHp();
        this.node.parent.on('update-hp',this.onUpdateHp,this)
    },

    onUpdateHp: function(){
        this._hpLabel.string = this._entityData.hp;
    }

});
