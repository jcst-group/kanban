

var roll = {
	Roll(dom1,dom2,dom3,height){
		this.box = document.getElementById(dom1);
		this.list1 = document.getElementById(dom2);
		this.list2 = document.getElementById(dom3);
		this.box.scrollTop = 0;
		this.num = 0
		clearInterval(this.timer)
		this.timer = setInterval(()=>{
			this.judge();
		}, 50);
    	this.judge = function(){
	    	// if(this.box.scrollTop >= this.list1.scrollHeight){
			// 	this.box.scrollTop = 0;
			// }else{
			// 	console.dir(this.box)
			// 	this.box.scrollTop
			// }
			var num = parseInt(this.list1.style.top)
			if (num >= height) {
				this.list1.style.top = (num-= 1) + 'px'
				this.list2.style.top = (num-= 1) + 'px'
			} else {
				this.list1.style.top = '0px'
				this.list2.style.top = '0px'
			}
		}
    	this.mouseenter = function(){
			var that = this;
			that.box.onmouseenter = function(){
				clearInterval(that.timer)
			}
		}
    	this.mouseleave = function(){
			var that = this;
			that.box.onmouseleave = function(){
				clearInterval(that.timer)
				that.timer = setInterval(()=>{
					that.judge();
				},50);
			}
		}
		this.mouseenter();
		this.mouseleave();
   }
}

export default roll;
