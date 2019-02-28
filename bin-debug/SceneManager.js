var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.goodsScene = new GoodsScene();
        this.aboutScene = new AboutScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    SceneManager.prototype.removeOtherScenes = function (scene) {
        var _this = this;
        var sceneArr = [this.playScene, this.heroScene, this.goodsScene, this.aboutScene];
        sceneArr.forEach(function (item) {
            if (item == scene) {
                return;
            }
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = SceneManager.instance.mainScene;
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        SceneManager.instance.removeOtherScenes(mainScene);
    };
    SceneManager.toPlayerScene = function () {
        SceneManager.instance.removeOtherScenes(this.instance.playScene);
        SceneManager.instance.mainScene.addChild(this.instance.playScene);
    };
    SceneManager.toHeroScene = function () {
        SceneManager.instance.removeOtherScenes(this.instance.heroScene);
        SceneManager.instance.mainScene.addChild(this.instance.heroScene);
    };
    SceneManager.toGoodsScene = function () {
        SceneManager.instance.removeOtherScenes(this.instance.goodsScene);
        SceneManager.instance.mainScene.addChild(this.instance.goodsScene);
    };
    SceneManager.toAboutScene = function () {
        SceneManager.instance.removeOtherScenes(this.instance.aboutScene);
        SceneManager.instance.mainScene.addChild(this.instance.aboutScene);
    };
    SceneManager.showInfo = function (arr) {
        var text = "您选择了：";
        if (arr.length == 0) {
            text = "啥也没选";
        }
        else {
            text += arr.toString();
        }
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        var timer = new egret.Timer(3000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map