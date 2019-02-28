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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.Group_mbtn.touchEnabled = true;
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var theBtn = e.target;
            if (theBtn.selected && theBtn.selected != undefined) {
                _this.toggleBtn(theBtn);
            }
            else {
                theBtn.selected = true;
            }
            //this.toggleBtn(theBtn);
        }, this);
    };
    MainScene.prototype.toggleBtn = function (btn) {
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var theBtn = this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            return;
        }
        btn = btn;
        btn.selected = true;
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                SceneManager.toPlayerScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 1:
                SceneManager.toHeroScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map