class SceneManager {
    private _stage: egret.DisplayObjectContainer
    public mainScene: MainScene
    public playScene: PlayerScene
    public heroScene: HeroScene
    public goodsScene: GoodsScene
    public aboutScene: AboutScene


    constructor() {
        this.mainScene = new MainScene()
        this.playScene = new PlayerScene()
        this.heroScene = new HeroScene()
        this.goodsScene = new GoodsScene()
        this.aboutScene = new AboutScene()
    }

    static sceneManager: SceneManager
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManager();
        }
        return this.sceneManager
    }

    public setStage(s: egret.DisplayObjectContainer) {
        this._stage = s
    }

    private removeOtherScenes(scene){
        let sceneArr = [this.playScene,this.heroScene,this.goodsScene,this.aboutScene];
        sceneArr.forEach((item)=>{
            if(item==scene){
                return
            }
            if(item.parent){
                this.mainScene.removeChild(item)
            }
        })
    }

    static toMainScene() {
        let stage: egret.DisplayObjectContainer = this.instance._stage
        let mainScene = SceneManager.instance.mainScene

        if (!mainScene.parent) {
            stage.addChild(mainScene)
        }

        SceneManager.instance.removeOtherScenes(mainScene)
    }

    static toPlayerScene() {
        SceneManager.instance.removeOtherScenes(this.instance.playScene)
        SceneManager.instance.mainScene.addChild(this.instance.playScene)
    }
    static toHeroScene() {
        SceneManager.instance.removeOtherScenes(this.instance.heroScene)
        SceneManager.instance.mainScene.addChild(this.instance.heroScene)
    }
    static toGoodsScene() {
        SceneManager.instance.removeOtherScenes(this.instance.goodsScene)
        SceneManager.instance.mainScene.addChild(this.instance.goodsScene)
    }
    static toAboutScene() {
        SceneManager.instance.removeOtherScenes(this.instance.aboutScene)
        SceneManager.instance.mainScene.addChild(this.instance.aboutScene)
    }
    static showInfo(arr:string[]){
        let text:string = "您选择了："
        if(arr.length==0){
            text="啥也没选"
        }else{
            text+=arr.toString()
        }

        let img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width/2 - img.width/2;
        img.y = 500
        img.height = 40

        let label:egret.TextField = new egret.TextField();
        label.text = text
        label.size = 20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width/2 - label.width/2;
        label.y = 510
        label.height = 40

        let timer:egret.Timer = new egret.Timer(3000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,(e)=>{
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        },this)
    }

}