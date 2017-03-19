cc.Class({
extends: cc.Component,

properties: {

},


onLoad: function () {

},
enter: function(tick,b3,treeNode){

},
open: function(tick,b3,treeNode){

},
tick: function(tick,b3,treeNode){
    this.node.emit('bt-action','self-boom');
    return b3.SUCCESS;
},
close: function(tick,b3,treeNode){

},
exit: function(tick,b3,treeNode){

},

});
