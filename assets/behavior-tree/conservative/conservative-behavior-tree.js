//Don't modify this if you want to re-modify the behaviortree in the future
//#########################################{"class":"go.TreeModel","nodeDataArray":[{"catagory":"Composite","color":"lightgreen","key":-1,"loc":"128 261","name":"Root","parameter":"{}","src":"icon/root.svg","textEditable":false,"type":"Root"},{"catagory":"Condition","color":"palegoldenrod","key":-3,"loc":"450 158","name":"HpCheck","parameter":"{\"maxRange\":1,\"minRange\":0.8}","parent":-6,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Composite","color":"lightblue","key":-7,"loc":"221 254","name":"Priority","parameter":"{}","parent":-1,"src":"icon/priority.svg","textEditable":true,"type":"Priority"},{"catagory":"Composite","color":"lightblue","key":-6,"loc":"313 204","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Action","color":"lightcoral","key":-2,"loc":"447 219","name":"Attack","parameter":"{}","parent":-6,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Composite","color":"lightblue","key":-8,"loc":"324 291","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Condition","color":"palegoldenrod","key":-9,"loc":"451 269","name":"HpCheck","parameter":"{\"maxRange\":0.8,\"minRange\":0.5}","parent":-8,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-10,"loc":"449 317","name":"Defence","parameter":"{}","parent":-8,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Composite","color":"lightblue","key":-11,"loc":"320 393","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Condition","color":"palegoldenrod","key":-12,"loc":"447 377","name":"HpCheck","parameter":"{\"maxRange\":0.5,\"minRange\":0}","parent":-11,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-13,"loc":"449 429","name":"Escape","parameter":"{}","parent":-11,"src":"icon/customaction.svg","textEditable":true,"type":"Action"}]}#############################################


cc.Class({
extends: cc.Component,
editor: {
inspector: 'packages://behaviortree-editor/bt-inspector.js'
},
properties: {
},
onLoad: function () {
let b3 = require('b3core.0.1.0module');
let self = this;
let  HpCheck = b3.Class(b3.Condition);
HpCheck.prototype.name = 'HpCheck';
HpCheck.prototype.__Condition_initialize = HpCheck.prototype.initialize;
HpCheck.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Condition_initialize();
         this.parameter = settings.parameter;
}
HpCheck.prototype.enter = function(tick){
           return self.getComponent('HpCheck').enter(tick,b3,this);
}
HpCheck.prototype.open = function(tick) {
           return self.getComponent('HpCheck').open(tick,b3,this);
}
HpCheck.prototype.tick = function(tick) {
           return self.getComponent('HpCheck').tick(tick,b3,this);
}
HpCheck.prototype.close = function(tick) {
           return self.getComponent('HpCheck').close(tick,b3,this);
}
HpCheck.prototype.exit = function(tick) {
           return self.getComponent('HpCheck').exit(tick,b3,this);
}
let  Attack = b3.Class(b3.Action);
Attack.prototype.name = 'Attack';
Attack.prototype.__Action_initialize = Attack.prototype.initialize;
Attack.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Attack.prototype.enter = function(tick){
           return self.getComponent('Attack').enter(tick,b3,this);
}
Attack.prototype.open = function(tick) {
           return self.getComponent('Attack').open(tick,b3,this);
}
Attack.prototype.tick = function(tick) {
           return self.getComponent('Attack').tick(tick,b3,this);
}
Attack.prototype.close = function(tick) {
           return self.getComponent('Attack').close(tick,b3,this);
}
Attack.prototype.exit = function(tick) {
           return self.getComponent('Attack').exit(tick,b3,this);
}
let  Defence = b3.Class(b3.Action);
Defence.prototype.name = 'Defence';
Defence.prototype.__Action_initialize = Defence.prototype.initialize;
Defence.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Defence.prototype.enter = function(tick){
           return self.getComponent('Defence').enter(tick,b3,this);
}
Defence.prototype.open = function(tick) {
           return self.getComponent('Defence').open(tick,b3,this);
}
Defence.prototype.tick = function(tick) {
           return self.getComponent('Defence').tick(tick,b3,this);
}
Defence.prototype.close = function(tick) {
           return self.getComponent('Defence').close(tick,b3,this);
}
Defence.prototype.exit = function(tick) {
           return self.getComponent('Defence').exit(tick,b3,this);
}
let  Escape = b3.Class(b3.Action);
Escape.prototype.name = 'Escape';
Escape.prototype.__Action_initialize = Escape.prototype.initialize;
Escape.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Escape.prototype.enter = function(tick){
           return self.getComponent('Escape').enter(tick,b3,this);
}
Escape.prototype.open = function(tick) {
           return self.getComponent('Escape').open(tick,b3,this);
}
Escape.prototype.tick = function(tick) {
           return self.getComponent('Escape').tick(tick,b3,this);
}
Escape.prototype.close = function(tick) {
           return self.getComponent('Escape').close(tick,b3,this);
}
Escape.prototype.exit = function(tick) {
           return self.getComponent('Escape').exit(tick,b3,this);
}
let tree = new b3.BehaviorTree();
tree.root = new b3.Sequence({parameter:{},children:[new b3.Priority({parameter:{},children:[new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':1,'minRange':0.8}}),new Attack({parameter:{}})]}),new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':0.8,'minRange':0.5}}),new Defence({parameter:{}})]}),new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':0.5,'minRange':0}}),new Escape({parameter:{}})]})]})]});
this.tree = tree;
this.blackboard = new b3.Blackboard();
this.b3 = b3;
},
tick: function(target){
let t = {};
if(target != undefined){t = target;}
this.tree.tick(t,this.blackboard)
}});
