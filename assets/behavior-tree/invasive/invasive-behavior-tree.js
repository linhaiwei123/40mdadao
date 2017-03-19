//Don't modify this if you want to re-modify the behaviortree in the future
//#########################################{"class":"go.TreeModel","nodeDataArray":[{"catagory":"Composite","color":"lightgreen","key":-1,"loc":"18.49999999999997 156.65000000000003","name":"Root","parameter":"{}","src":"icon/root.svg","textEditable":false,"type":"Root"},{"catagory":"Composite","color":"lightblue","key":-7,"loc":"112.49999999999994 149.64999999999986","name":"Priority","parameter":"{}","parent":-1,"src":"icon/priority.svg","textEditable":true,"type":"Priority"},{"catagory":"Composite","color":"lightblue","key":-6,"loc":"257.50000000000006 90.64999999999995","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Composite","color":"lightblue","key":-4,"loc":"262.5 184.64999999999986","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Composite","color":"lightblue","key":-5,"loc":"258.50000000000017 300.65","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Condition","color":"palegoldenrod","key":-3,"loc":"386.50000000000006 27.64999999999995","name":"HpCheck","parameter":"{\"maxRange\":1,\"minRange\":0.8}","parent":-6,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-2,"loc":"389.5 92.64999999999998","name":"Attack","parameter":"{}","parent":-6,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Condition","color":"palegoldenrod","key":-8,"loc":"387.49999999999994 162.64999999999986","name":"HpCheck","parameter":"{\"maxRange\":0.8,\"minRange\":0.5}","parent":-4,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-9,"loc":"510.4999999999999 223.64999999999975","name":"CrazyAttack","parameter":"{}","parent":-12,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Condition","color":"palegoldenrod","key":-10,"loc":"395.5 281.64999999999986","name":"HpCheck","parameter":"{\"maxRange\":0.5,\"minRange\":0}","parent":-5,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-11,"loc":"504.4999999999999 370.65","name":"SelfBoom","parameter":"{}","parent":-13,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Decorator","color":"pink","key":-12,"loc":"393.5 220.64999999999998","name":"GlobalLimiter","parameter":"{\"maxLoop\":1}","parent":-4,"src":"icon/customdecorator.svg","textEditable":true,"type":"Decorator"},{"catagory":"Decorator","color":"pink","key":-13,"loc":"391.5 350.65","name":"GlobalLimiter","parameter":"{\"maxLoop\":1}","parent":-5,"src":"icon/customdecorator.svg","textEditable":true,"type":"Decorator"}]}#############################################


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
let  CrazyAttack = b3.Class(b3.Action);
CrazyAttack.prototype.name = 'CrazyAttack';
CrazyAttack.prototype.__Action_initialize = CrazyAttack.prototype.initialize;
CrazyAttack.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
CrazyAttack.prototype.enter = function(tick){
           return self.getComponent('CrazyAttack').enter(tick,b3,this);
}
CrazyAttack.prototype.open = function(tick) {
           return self.getComponent('CrazyAttack').open(tick,b3,this);
}
CrazyAttack.prototype.tick = function(tick) {
           return self.getComponent('CrazyAttack').tick(tick,b3,this);
}
CrazyAttack.prototype.close = function(tick) {
           return self.getComponent('CrazyAttack').close(tick,b3,this);
}
CrazyAttack.prototype.exit = function(tick) {
           return self.getComponent('CrazyAttack').exit(tick,b3,this);
}
let  SelfBoom = b3.Class(b3.Action);
SelfBoom.prototype.name = 'SelfBoom';
SelfBoom.prototype.__Action_initialize = SelfBoom.prototype.initialize;
SelfBoom.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
SelfBoom.prototype.enter = function(tick){
           return self.getComponent('SelfBoom').enter(tick,b3,this);
}
SelfBoom.prototype.open = function(tick) {
           return self.getComponent('SelfBoom').open(tick,b3,this);
}
SelfBoom.prototype.tick = function(tick) {
           return self.getComponent('SelfBoom').tick(tick,b3,this);
}
SelfBoom.prototype.close = function(tick) {
           return self.getComponent('SelfBoom').close(tick,b3,this);
}
SelfBoom.prototype.exit = function(tick) {
           return self.getComponent('SelfBoom').exit(tick,b3,this);
}
let  GlobalLimiter = b3.Class(b3.Decorator);
GlobalLimiter.prototype.name = 'GlobalLimiter';
GlobalLimiter.prototype.__Decorator_initialize = GlobalLimiter.prototype.initialize;
GlobalLimiter.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Decorator_initialize();
         this.parameter = settings.parameter;
this.child = settings.child;
}
GlobalLimiter.prototype.enter = function(tick){
           return self.getComponent('GlobalLimiter').enter(tick,b3,this);
}
GlobalLimiter.prototype.open = function(tick) {
           return self.getComponent('GlobalLimiter').open(tick,b3,this);
}
GlobalLimiter.prototype.tick = function(tick) {
           return self.getComponent('GlobalLimiter').tick(tick,b3,this);
}
GlobalLimiter.prototype.close = function(tick) {
           return self.getComponent('GlobalLimiter').close(tick,b3,this);
}
GlobalLimiter.prototype.exit = function(tick) {
           return self.getComponent('GlobalLimiter').exit(tick,b3,this);
}
let tree = new b3.BehaviorTree();
tree.root = new b3.Sequence({parameter:{},children:[new b3.Priority({parameter:{},children:[new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':1,'minRange':0.8}}),new Attack({parameter:{}})]}),new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':0.8,'minRange':0.5}}),new GlobalLimiter({parameter:{'maxLoop':1},child:new CrazyAttack({parameter:{}})})]}),new b3.Sequence({parameter:{},children:[new HpCheck({parameter:{'maxRange':0.5,'minRange':0}}),new GlobalLimiter({parameter:{'maxLoop':1},child:new SelfBoom({parameter:{}})})]})]})]});
this.tree = tree;
this.blackboard = new b3.Blackboard();
this.b3 = b3;
},
tick: function(target){
let t = {};
if(target != undefined){t = target;}
this.tree.tick(t,this.blackboard)
}});
