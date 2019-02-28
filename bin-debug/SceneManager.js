var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playScene = new PlayerScene();
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
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = SceneManager.instance.mainScene;
        mainScene.toggleBtn(0);
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        if (SceneManager.instance.playScene.parent) {
            mainScene.removeChild(SceneManager.instance.playScene);
        }
    };
    SceneManager.toPlayerScene = function () {
        var stage = this.instance._stage;
        this.instance.mainScene.addChild(this.instance.playScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map