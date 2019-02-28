class SceneManager {
    private _stage: egret.DisplayObjectContainer
    public mainScene:MainScene
    public playScene:PlayerScene


    constructor(){
        this.mainScene = new MainScene()
        this.playScene = new PlayerScene()
    }

    static sceneManager:SceneManager
    static get instance(){
        if(!this.sceneManager){
            this.sceneManager = new SceneManager();
        }
        return this.sceneManager
    }

    public setStage(s:egret.DisplayObjectContainer){
        this._stage = s
    }

    static toMainScene(){
        let stage:egret.DisplayObjectContainer = this.instance._stage
        let mainScene = SceneManager.instance.mainScene

        mainScene.toggleBtn(0)

        if(!mainScene.parent){
            stage.addChild(mainScene)
        }
        
        if(SceneManager.instance.playScene.parent){
            mainScene.removeChild(SceneManager.instance.playScene)
        }
    }

    static toPlayerScene(){
        let stage:egret.DisplayObjectContainer = this.instance._stage
        this.instance.mainScene.addChild(this.instance.playScene)
    }

}