cc.Class({
extends: cc.Component,

properties: {
    //_i: 0,
},


onLoad: function () {

},
enter: function(tick,b3,treeNode){

},
open: function(tick,b3,treeNode){
    let i = tick.blackboard.get('i',tick.tree.id, treeNode.id);
    if(!i){
        tick.blackboard.set('i', 0, tick.tree.id, treeNode.id);
    }
},
tick: function(tick,b3,treeNode){
    if (!treeNode.child) {
            return b3.ERROR;
        }

        let i = tick.blackboard.get('i', tick.tree.id, treeNode.id);
        //console.log(i);
        if (i < treeNode.parameter.maxLoop) {
            let status = treeNode.child._execute(tick);

            if (status == b3.SUCCESS || status == b3.FAILURE)
                tick.blackboard.set('i', i+1, tick.tree.id, treeNode.id);
                //this._i++;
            
            //return b3.RUNNING;
            return status;
        }

        return b3.FAILURE;   
},
close: function(tick,b3,treeNode){

},
exit: function(tick,b3,treeNode){

},

});
