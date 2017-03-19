cc.Class({
    extends: cc.Component,

    properties: {
        _equip: {
            get: function(){
                return this.node.getChildByName("equip");
            }
        },
        _canvas: null,
    },

    onLoad: function () {
        //design

        //点击的时候  40米大刀挥到回应的角度
        this._canvas = cc.find('Canvas');
        this._canvas.on('touchstart',this.onTouchStart,this)

    },
    
    onTouchStart: function(e){
        let targetVector = this.node.convertToNodeSpaceAR(e.getLocation());
        let rotateVector = cc.v2(targetVector.y,-targetVector.x);
        let targetRotation = -1 * cc.pToAngle(rotateVector) * 180 / Math.PI;
        //console.log(targetRotation);
        this._equip.runAction(cc.rotateTo(0.2,targetRotation).easing(cc.easeBackInOut(3)));
    },
});
