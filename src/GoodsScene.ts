class GoodsScene extends eui.Component implements  eui.UIComponent {

    public btn_goods_return: eui.Button;
	public scr_goods: eui.Scroller;
	public list_goods: eui.List;

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

		let data = [
			{image:"resource/art/heros_goods/goods01.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods02.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods03.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods04.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods05.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods06.png", name:"商品1", value:"好用得很"},
			{image:"resource/art/heros_goods/goods07.png", name:"商品1", value:"好用得很"},
		];

		let EUIArr: eui.ArrayCollection = new eui.ArrayCollection(data);
	    this.list_goods.dataProvider = EUIArr;

		this.btn_goods_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain,this)

	}

	private returnMain(){
		SceneManager.toMainScene();
		SceneManager.instance.mainScene.toggleBtn(0);
	}
	
}