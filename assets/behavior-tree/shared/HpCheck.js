cc.Class({
extends: cc.Component,

properties: {
    _entityData: {
        get: function(){
            return this.getComponent('entity-data');
        }
    }
},


onLoad: function () {

},
enter: function(tick,b3,treeNode){

},
open: function(tick,b3,treeNode){

},
tick: function(tick,b3,treeNode){
    let maxRange = treeNode.parameter.maxRange;
    let minRange = treeNode.parameter.minRange;

    let maxHp = this._entityData.maxHp;
    let hp = this._entityData.hp;
    let hpRange = hp / maxHp;
    if(hpRange <= maxRange && hpRange >= minRange){
        return b3.SUCCESS;
    }else{
        return b3.FAILURE;
    }
},
close: function(tick,b3,treeNode){

},
exit: function(tick,b3,treeNode){

},

});
