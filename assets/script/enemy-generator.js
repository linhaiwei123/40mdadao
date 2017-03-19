cc.Class({
    extends: cc.Component,

    properties: {
        enemyPrefabArray: [cc.Prefab],
        deltaNum: 0,
        totalTime: 0,
        deltaDuration: 0,
        _currentTime: 0,
        _canvas: null,
        _sceneLoading: false,
    },

    // use this for initialization
    onLoad: function (){
        this._canvas = cc.find('Canvas');
        this.generate();
        this.schedule(this.generate.bind(this),this.deltaDuration);
    },

    generate: function(){
        if(this._canvas.childrenCount == 1 && this._canvas.children[0].name == 'player'){
            if(this._currentTime == this.totalTime){
                if(!this._sceneLoading){
                    this._sceneLoading = true;
                    cc.director.loadScene('win-scene');
                    return;
                }
            }

            let enemyNum = this.deltaNum * this._currentTime;
            for(let i = 0; i < enemyNum; i++){
                let randomIdx = Math.floor(Math.random() * this.enemyPrefabArray.length);
                let enemy = cc.instantiate(this.enemyPrefabArray[randomIdx]);
                
                let originPosition = null;
                if(Math.random() >= 0.5){
                    originPosition = cc.v2(cc.randomMinus1To1() * 480, Math.sign(cc.randomMinus1To1()) * 320);
                }else{
                    originPosition = cc.v2(Math.sign(cc.randomMinus1To1()) * 480, cc.randomMinus1To1() * 320);
                }

                this._canvas.addChild(enemy);
                enemy.position = originPosition;
            }
            this._currentTime ++;
            
        }

    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
