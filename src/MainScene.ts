class MainScene extends eui.Component implements eui.UIComponent {

	public Group_mbtn: eui.Group;
	public mbtnPlayer: eui.ToggleButton;
	public mbtnHero: eui.ToggleButton;
	public mbtnGoods: eui.ToggleButton;
	public mbtnAbout: eui.ToggleButton;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.Group_mbtn.touchEnabled = true;

		this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
			let theBtn = <eui.ToggleButton>e.target;

			// if (theBtn.selected && theBtn.selected != undefined) {
			// 	this.toggleBtn(theBtn);
			// } else {
			// 	theBtn.selected = true;
			// }
			this.toggleBtn(theBtn);
		}, this);
	}

	public toggleBtn(btn: eui.ToggleButton | number) {
		for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
			let theBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i);
			theBtn.selected = false;
		}
		if (btn === 0) {//传入参数0，就把所有按钮状态的selected重置为false
			return
		}
		btn = <eui.ToggleButton>btn
		btn.selected = true

		let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn)
		switch (index) {
			case 0:
				SceneManager.toPlayerScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 1:
				SceneManager.toHeroScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 2:
				SceneManager.toGoodsScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 3:
				SceneManager.toAboutScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			default:
				break
		}
	}

}