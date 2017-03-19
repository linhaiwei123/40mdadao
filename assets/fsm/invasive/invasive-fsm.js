let StateMachine = require('state-machine');
let fsmData = {
initial: 'nope',
//please select the enter-state here ↓
events: [
{"name":"startup","from":"nope","to":"attacking"},
{"name":"crazy-attack","from":"attacking","to":"crazy-attacking"},
{"name":"self-boom","from":"crazy-attacking","to":"self-booming"},
{"name":"attack","from":"crazy-attacking","to":"attacking"}
]
};
let create = function(){
let fsm = StateMachine.create(fsmData);
fsm.ASYNC = StateMachine.ASYNC;
return fsm;
}
module.exports = {create}