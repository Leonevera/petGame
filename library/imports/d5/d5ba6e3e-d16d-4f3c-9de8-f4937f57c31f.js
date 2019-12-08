"use strict";
cc._RF.push(module, 'd5ba64+0W1PPJ3o9JN/V8Mf', 'globalData');
// Global/globalData.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 游戏全局数据，分为全局控制数据、全局属性数据
// 全局控制数据，例如背景音乐开关、音效开关等等
// 全局属性数据，例如宠物性别、种类等
/*
  author: qll
  time: 2019/12/4
*/
var GlobalData = function GlobalData() {
  _classCallCheck(this, GlobalData);

  //用户的微信账户信息
  this.userName = ''; //用户昵称
  this.userGender = ''; //用户性别
  //全局属性数据
  this.serverAddr = 'https://www.llquruc.top/petGame/'; //服务器地址
  this.userID = ''; //用户ID，游戏中的唯一标识
  this.flagNewUser = ''; //标志位_是否是新用户
  this.coin = 0; //金币值
  this.title = ''; //主人称呼
  this.lastLoginTime = ''; //上一次登录时间
  this.contLoginDays = 0; //连续登录天数
  this.species = 0; // 宠物种类
  this.name = ''; // 宠物名字
  this.gender = 0; //  宠物性别
  this.color = 0; // 宠物毛色
  this.hunger = 0; // 宠物饥饿值
  this.hungerCeiling = 0; // 宠物饥饿值上限
  this.cleaness = 0; // 宠物清洁值
  this.cleanessCeiling = 0; // 宠物清洁值上限
  this.thirst = 0; // 宠物口渴值
  this.thirstCeiling = 0; // 宠物口渴值上限
  this.mood = 0; // 宠物心情值
  this.moodCeiling = 0; // 宠物心情值上限
  this.energy = 0; // 宠物能量值
  this.energyCeiling = 0; // 宠物能量值上限
  this.growth = 0; // 宠物成长值
  this.growthLevel = 0; // 宠物成长等级
  this.flagAgeGroup = 0; // 标志位：幼年or成年
  this.flagSkipping = 0; //标志位_是否解锁“跳绳”操作
  this.flagStory = 0; //标志位_是否解锁“讲故事”操作
  this.flagSleep = 0; //标志位-是否正在睡觉
  this.sleepRemainTime = 0; //睡觉剩余时长
  this.flagWork = 0; //标志位-是否正在打工
  this.workRemainTime = 0; //打工剩余时长
  this.flagTrip = 0; //标志位-是否正在旅游
  this.tripRemainTime = 0; //旅游剩余时长
  this.flagRandomReward = false; //随机奖励是否已生成
  this.flagUpgradeReward = false; //升级奖励是否已生成
  //登录奖励信息
  this.loginRewardCoin = 0; //奖励金币值
  this.loginRewardGrowth = 0; //奖励成长值
  //连续登录奖励信息
  this.contLoginRewardCoin = 0; //奖励金币值
  this.contLoginRewardGrowth = 0; //奖励成长值
  //升级奖励信息
  this.upgradeRewardCoin = 0; //奖励金币值
  this.upgradeRewardItemID = 0; //奖励物品编号
  this.upgradeRewardItemCateID = 0; //奖励物品类别编号
  //随机奖励信息
  this.randomRewardItemID = 0; //奖励物品编号
  this.randomRewardItemCateID = 0; //奖励物品类别编号
  this.bag = { //背包内容（除小屋装饰）
    itemIDArrayStr: '',
    itemNameArrayStr: '',
    categoryIDArrayStr: '',
    categoryNameArrayStr: '',
    numberArrayStr: ''
  };
  this.decorationBag = { //小屋装饰
    itemIDStrArrayStr: '',
    itemNameArrayStr: '',
    categoryIDArrayStr: '',
    categoryNameArrayStr: '',
    flagEnableArrayStr: ''
  };
  //全局控制数据
  this.flagBgMusic = 0; //标志位_是否开启背景音乐
  this.bgMusicVolume = 0; //背景音乐音量
  this.bgMusicNum = 0; //背景音乐曲目编号
  this.bgPicNum = 0; //背景图片编号
  this.flagSound = 0; //标志位_是否开启音效
  this.soundVolume = 0; //音效音量
  this.flagNotice = 0; //标志位_是否开启推送通知
  this.flagLocation = 0; //标志位_是否开启摄像头权限
  this.flagVibration = 0; //标志位_是否开启震动
};

exports.default = GlobalData;
module.exports = exports['default'];

cc._RF.pop();