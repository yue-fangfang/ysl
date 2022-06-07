window.onload=function(){
	
	/* 购物车js */
	var count=document.getElementById("count");
	var jian=document.getElementById("jian");
	var jia=document.getElementById("jia");
	var scoreResult=document.getElementById("score-result");
	var price=document.getElementById("price").innerHTML;
	
	jia.onclick=function(){
		if(count.value==5){
			count.value=5;
		}else{
			count.value = parseInt(count.value) + 1;
			
		}
		scoreResult.innerText="获得"+(count.value)*price+"积分";
	}
	jian.onclick = function() {
		if(count.value==1){
			count.value=1;
		}else{
			count.value = parseInt(count.value) - 1;
			
		}
		scoreResult.innerText="获得"+((count.value)*price)+"积分";
	}
	jia.onmouseenter=function(){
		jia.style.backgroundColor="#999999";
	}
	jian.onmouseenter=function(){
		jian.style.backgroundColor="#999999";
	}
	jia.onmouseleave=function(){
		jia.style.backgroundColor="#fff";
	}
	jian.onmouseleave=function(){
		jian.style.backgroundColor="#fff";
	}
	
	/*选色号 */
	var color_btn=document.getElementById("color-btn");
	var chosecolor=document.querySelector(".chosecolor");
	var btn_true=true;
	color_btn.onclick=function(){
		color_btn.style.cursor="pointer";
		if(btn_true){
			chosecolor.style.display="block";
			color_btn.innerHTML='<span class="iconfont">&#xf02aa;</span>';
			btn_true=false;
		}else{
			chosecolor.style.display="none";
			color_btn.innerHTML='<span class="iconfont">&#xf02a9;</span>';
			btn_true=true;
		}
	}
	
	
	
	/* 遮罩放大镜 */
	var perviem_img=document.getElementById("preview_img");
	var mask=document.querySelector('.mask');
	var big=document.querySelector('.big');
	var swiptwrap=document.querySelector(".swipt-wrap");
	/* var shopload=document.getElementsByClassName('shop-load'); */
	var shopload=document.querySelector(".shop-load")
	var prev=document.querySelector(".swiper-prev");
	var down=document.querySelector(".swiper-next");
	var swiperwrapper=document.getElementsByClassName('swiper-wrapper')
	var swiperlist=document.getElementsByClassName("swiperlist")
	var bigimg=document.querySelector(".bigImg")
	/* var bigimg=document.getElementsByClassName("bigImg"); */
	
	var thumbnails_box =document.querySelector('.thumbnails-box');
	
	
	var index=1;
	function clear(){
		for(var i =0;i<swiperlist.length;i++){
			swiperlist[i].className="swiperlist"
		}
		swiperlist[index-1].className="swiperlist border";
	}
	function next(){
		index==10?index=1:index++;
		/* img.src="./IMG2/L"+index+'.webp'; */
		
		clear();
	}
	for (var i = 0; i < swiperlist.length; i++) {
		swiperlist[i].a=i;
		swiperlist[i].onclick=function(){
			index=this.a+1;
			shopload.src="../shop-img/L"+index+".webp";
			bigimg.src="../shop-img/L"+index+".webp";
			clear();
		}
	}
	down.onclick=function(){
		index==10?index=1:index++;
		shopload.src="../shop-img/L"+index+".webp";
		bigimg.src="../shop-img/L"+index+".webp";
		clear();
	}
	prev.onclick=function(){
		index==1?index=10:index--;
		shopload.src="../shop-img/L"+index+".webp";
		bigimg.src="../shop-img/L"+index+".webp";
		clear();
	}
	
	//当鼠标经过显示和隐藏
	perviem_img.addEventListener('mouseover',function(){
		mask.style.display="block";
		big.style.display="block";
	});
	perviem_img.addEventListener('mouseout',function(){
		mask.style.display="none";
		big.style.display="none";
	});
	perviem_img.addEventListener("mousemove",function(e){
		
		var x =e.pageX-this.offsetLeft-perviem_img.offsetLeft-thumbnails_box.offsetLeft-200;
		var y =e.pageY-this.offsetTop-perviem_img.offsetTop-thumbnails_box.offsetTop-240;
		var maskX=x-mask.offsetWidth/2;
		var maskY=y-mask.offsetHeight/2;
		//遮挡层的最大移动距mask.offsetHeights离
		var maskMax=perviem_img.offsetWidth-mask.offsetWidth
		if(maskX<=0){
			maskX=0;
		}else if(maskX>=maskMax){
			maskX=maskMax;
	
		}
		if(maskY<=0){
			maskY=0;
		}else if(maskY>=maskMax){
			maskY=maskMax;
		
		}
		mask.style.left=maskX+"px";
		mask.style.top=maskY+"px";
		//大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大移动距离
		var bigIMg=document.querySelector(".bigImg");
		var bigMax=bigIMg.offsetWidth-big.offsetWidth;
		var bigX=maskX*bigMax/maskMax;
		var bigY=maskY*bigMax/maskMax;
		bigIMg.style.left=-bigX+"px";
		bigIMg.style.top=-bigY+"px";
	})
	
	/* 手机端js */
	var minimgbox=document.getElementById("minimg-box").getElementsByTagName("li");
	var mincircle=document.getElementById("min-circle").getElementsByTagName("li");
	for (var i = 0; i < mincircle.length; i++) {
		mincircle[i].xb=i;
		mincircle[i].onclick=function(){
			for (var j = 0; j < minimgbox.length; j++) {
				minimgbox[j].style.display="none";
			}
			minimgbox[this.xb].style.display="block";
		}
		
	}
	
	/* 色号选择卡 */
	var colorli=document.getElementsByClassName("colorli");

	
	
	for (let i = 0; i < colorli.length; i++) {
		colorli[i].onclick=function(){
			var newcolor=document.getElementById("newcolor");
			var getvalue=document.getElementById("getvalue");
			colorli[i].style.cssText="border:1px solid #000";
			for (let j = 0; j < colorli.length; j++) {
				if(j==i){
					continue;
				}else{
					colorli[j].style.cssText="border:0px solid #000";
				}
			}
			switch(i){
				case 0:
				newcolor.style.backgroundColor='#e5bda9';
				getvalue.innerHTML="B20  米白色";
				break;
				case 1:
				newcolor.style.backgroundColor='#e2c3ac';
				getvalue.innerHTML="B10  象牙白";
				break;
				case 2:
				newcolor.style.backgroundColor='#dbb598';
				getvalue.innerHTML="B30  自然色";
				break;
				case 3:
				newcolor.style.backgroundColor='#d8beac';
				getvalue.innerHTML="BR10  粉白色";
				break;
				case 4:
				newcolor.style.backgroundColor='#d1b1a1';
				getvalue.innerHTML="BR20  桃粉色";
				break;
				
			}
			
		}
	}
	
	
}
function animate1(obj,target,callback){
			//console.log(callback);  callback=function(){}  调用的时候callback()
			
			//给不同的元素指定了不同的定时器  性能优化 obj.timer
			//bug 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多定时器
			//解决方案：让元素只有一个定时器执行
			//先清除以前的定时器，只保留当前的一个定时器执行
			clearInterval(obj.timer1);
			obj.timer1=setInterval(function(){
				//补偿值写到定时器里面
				//把步长值改为整数，不要出现小数的问题   Math.ceil()  向上取整
				//var step=Math.ceil((target-obj.offsetLeft)/10);
				var step=(target-obj.offsetTop)/10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				if(obj.offsetTop==target){
					//停止动画
					clearInterval(obj.timer);
					//回调函数写到定时器结束里面 callback（）
				if(callback){
						//调用函数
						callback();
					}
				} 
				//缓动动画  把每次加1这个补偿值改为一个慢慢变小的值  步长公式：（目标值-现在的位置）/10
				obj.style.left=obj.offsetLeft+1+"px";
				/* obj.style.top=obj.offsetTop+step+"px"; */
				},2000);
				}