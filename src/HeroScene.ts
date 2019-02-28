class HeroScene extends eui.Component implements  eui.UIComponent {

	public btn_return: eui.Button;
	public btn_select: eui.Button;
	public scr_hero: eui.Scroller;
	public list_hero: eui.List;
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

		let dataArr:any[] = [
			{image: 'resource/art/heros_goods/heros01.png', name:'亚特伍德',value:'评价：很特么厉害，为所欲为',isSelected:false},
			{image: 'resource/art/heros_goods/heros02.png', name:'特朗普',value:'评价：很特么厉害，为所欲为',isSelected:false},
			{image: 'resource/art/heros_goods/heros03.png', name:'梵高',value:'评价：很特么厉害，为所欲为',isSelected:true},
			{image: 'resource/art/heros_goods/heros04.png', name:'东方',value:'评价：很特么厉害，为所欲为',isSelected:false},
			{image: 'resource/art/heros_goods/heros05.png', name:'张小',value:'评价：很特么厉害，为所欲为',isSelected:false},
			{image: 'resource/art/heros_goods/heros06.png', name:'东本物',value:'评价：很特么厉害，为所欲为',isSelected:false},
			{image: 'resource/art/heros_goods/heros07.png', name:'凡尔赛',value:'评价：很特么厉害，为所欲为',isSelected:false},
		]
		let EUIArr: eui.ArrayCollection = new eui.ArrayCollection(dataArr)

		this.list_hero.dataProvider = EUIArr
		this.list_hero.itemRenderer = HeroList_item

		this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this)
	}

	private onSelect(e){
		SceneManager.toMainScene();
		SceneManager.instance.mainScene.toggleBtn(0);

		let dataProvider = this.list_hero.dataProvider;
		let arr:string[] = [];

		for(let i = 0;i<dataProvider.length;i++){
			let item = dataProvider.getItemAt(i);
			if(item.isSelected){
				arr.push(item.name);
			}
		}
		SceneManager.showInfo(arr);
		//console.log(arr)
	}
	
}