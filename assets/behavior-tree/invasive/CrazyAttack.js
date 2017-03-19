cc.Class({
extends: cc.Component,

properties: {
    _entityData: {
        get: function(){
            return this.getComponent('entity-data');
        }
    },

    attackAddUp: 0,
    speedAddUp: 0,
},


onLoad: function () {

},
enter: function(tick,b3,treeNode){

},
open: function(tick,b3,treeNode){

},
tick: function(tick,b3,treeNode){
    //console.log(tick);
    this._entityData.attackValue += this.attackAddUp;
    this._entityData.speed += this.speedAddUp;
    this.node.emit('bt-action','crazy-attack');
    return b3.SUCCESS;
},
close: function(tick,b3,treeNode){

},
exit: function(tick,b3,treeNode){

},

});
