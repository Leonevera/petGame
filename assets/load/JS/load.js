// 加载数据
var globalData = require("globalData");
// 加载框水波对象
var wave = {
    canvasHeight: 200,  // 画面高度
    canvasWidth: 300, // 画面宽度
    waveHeight: 10, // 水波高度
    waveWidth: 0.02,// 水波宽度
    xOffset: 0, // 波浪的横坐标偏移
    speed: 0.1, // 波浪速度
    levelHeight: 10 // 水平线
}

cc.Class({
    extends: cc.Component,

    properties: {
        loadingBar: cc.Graphics,
        startBtn: cc.Button
    },

    init: function(){
        console.log("init", globalData);
        globalData.init();
        // console.log(globalData.species);
    },

    drawWave: function() {
        var ctx = this.loadingBar;
        const startX = 0;
        ctx.clear();

        this.time += 1;
        wave.xOffset += wave.speed;
        wave.levelHeight += 0.2;
        ctx.moveTo(0, 0);
        for (let x = startX; x < startX + wave.canvasWidth; x += 20 / wave.canvasWidth) {
            const y = wave.waveHeight * Math.sin((startX + x) * wave.waveWidth + wave.xOffset) + wave.levelHeight;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(wave.canvasWidth, 0);
        ctx.lineTo(startX, 0);
        ctx.fill();
    },

    onStartBtnClicked: function() {
        console.log('turn to adopt page');
        cc.director.loadScene("portrayPage");
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
        this.time = 0;
        this.startBtn.node.active = false;
    },

    start () {
        cc.director.preloadScene("portrayPage", function () {
            cc.log("Next scene preloaded");
        });
    },

    update () {
        if (wave.levelHeight < 150) {
            this.drawWave();
        }
        else {
            this.startBtn.node.active = true;
        }
    },
});
