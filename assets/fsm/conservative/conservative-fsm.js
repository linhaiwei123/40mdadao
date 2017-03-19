let StateMachine = require('state-machine');
let fsmData = {
initial: 'nope',
//please select the enter-state here ↓
events: [
{"name":"startup","from":"nope","to":"attacking"},
{"name":"defence","from":"attacking","to":"defencing"},
{"name":"escape","from":"defencing","to":"escaping"},
{"name":"attack","from":"defencing","to":"attacking"},
{"name":"defence","from":"escaping","to":"defencing"},
{"name":"escape","from":"attacking","to":"escaping"},
{"name":"attack","from":"escaping","to":"attacking"}
]
};
let create = function(){
let fsm = StateMachine.create(fsmData);
fsm.ASYNC = StateMachine.ASYNC;
return fsm;
}
module.exports = {create}