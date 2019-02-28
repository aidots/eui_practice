class AboutScene extends eui.Component implements  eui.UIComponent {

	public btn_close: eui.Button;
	public label_about: eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.label_about.text = "哈哈哈哈哈，good";

		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose,this);
	}
	private onClose(){
		SceneManager.toMainScene();
		SceneManager.instance.mainScene.toggleBtn(0);
	}
}