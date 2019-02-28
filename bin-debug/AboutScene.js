var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AboutScene = (function (_super) {
    __extends(AboutScene, _super);
    function AboutScene() {
        return _super.call(this) || this;
    }
    AboutScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AboutScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.label_about.text = "哈哈哈哈哈，good";
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    AboutScene.prototype.onClose = function () {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
    };
    return AboutScene;
}(eui.Component));
__reflect(AboutScene.prototype, "AboutScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=AboutScene.js.map