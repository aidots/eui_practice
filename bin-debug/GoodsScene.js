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
var GoodsScene = (function (_super) {
    __extends(GoodsScene, _super);
    function GoodsScene() {
        return _super.call(this) || this;
    }
    GoodsScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GoodsScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var data = [
            { image: "resource/art/heros_goods/goods01.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods02.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods03.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods04.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods05.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods06.png", name: "商品1", value: "好用得很" },
            { image: "resource/art/heros_goods/goods07.png", name: "商品1", value: "好用得很" },
        ];
        var EUIArr = new eui.ArrayCollection(data);
        this.list_goods.dataProvider = EUIArr;
        this.btn_goods_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
    };
    GoodsScene.prototype.returnMain = function () {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
    };
    return GoodsScene;
}(eui.Component));
__reflect(GoodsScene.prototype, "GoodsScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GoodsScene.js.map