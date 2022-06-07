window.addEventListener('load',function(){
	//1获取元素
	//左右按钮
	var arrow_l=document.querySelector(".arrow-l");
	var arrow_r=document.querySelector(".arrow-r");
	var focus=document.querySelector('.box');
	
	var focusWidth=focus.offsetWidth;
	
	//2鼠标经过显示按钮
	focus.addEventListener('mouseenter',function(){
		arrow_l.style.display="block";
		arrow_r.style.display="block";
		//鼠标经过图片停止轮播
		clearInterval(timer);
		timer=null;//清除定时器变量
	})
	//鼠标离开隐藏按钮
	focus.addEventListener('mouseleave',function(){
		arrow_l.style.display="none";
		arrow_r.style.display="none";
		//鼠标离开再次开始定时器
		timer=setInterval(function(){
			//手动调用点击事件
			arrow_r.click()
		},2000);
		
	});
	//3.动态生成小圆圈，有几张图，就生成及格小圆圈
	var ul=focus.querySelector('ul');
	var ol=focus.querySelector('.circle');
	//检查：console.log(ul.children.length);
	for (var i = 0; i < ul.children.length; i++) {
		//创建一个li 
		 var li =document.createElement("li");
		 //记录当前小圆圈的索引号  自定义
		 var index=li.setAttribute('index',i);
		//把li插入到ol里面
		ol.appendChild(li);
		//4.小圆圈排他思想，可以在生成小圆点的同时直接绑定点击事件
		li.addEventListener('click',function(){
			//干掉所有人，把所有li清除current类名
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].className="";
			}
			//留下我自己  当前li设置current类名
			this.className="current";
			//5.点击小圆圈，移动图片  移动的是ul
			//滚动图片的核心算法：点击某个小圆圈，就让图片滚动  小圆圈的索引号×图片的宽度作为ul移动的距离\
			//注意是赋值
			//当我们点击了某个li  就拿到了当前li的索引号
			var index=this.getAttribute('index');
			//当我们点击了某个li  就是li 的索引号给num
			num=index;
			//当我们点击了某个li  就是li 的索引号给circle
			circle=index;
			/* console.log(focusWidth);
			console.log(index); */
			animate(ul,-index *focusWidth);
			
		})
	}
	//把ol里面的第一个li设置类名为 current
	ol.children[0].className='current';
	//6.克隆第一张图片（li）放到ul最后面  true:深克隆
	var first=ul.children[0].cloneNode(true);
	ul.appendChild(first);
	//7.点击右侧按钮  图片滚动一张
	var num=0;
	//控制小圆圈的播放
	var circle=0;
	arrow_r.addEventListener('click',function(){
		//如果走到最后复制的图片时，ul快速还原 left=0
		if(num==ul.children.length-1){
			ul.style.left=0;
			num=0;
		}
		num++;
		animate(ul,-num*focusWidth);
		//图片的无缝滚动就是第一个里复制一份到ul最后
		//当图片滚动到克隆的最后一张图片是。让ul快速，不做动画的跳到最左侧：left为0
		//num=0 重新开始
		
		//8、点击右侧按钮，小圆圈跟随一起变化，可以在生命一个变量控制小圆圈的播放
		circle++;
		//如果circle==4说明走到了克隆的图片了
		if(circle==ol.children.length){
			circle=0;
		}
		//调用函数
		circleChange();
	})
	//左侧按钮
	arrow_l.addEventListener('click',function(){
		//如果走到最后复制的图片时，ul快速还原 left=0
		if(num==0){
			num=ul.children.length-1;
			ul.style.left=-num*focusWidth+"px";
			
		}
		num--;
		animate(ul,-num*focusWidth);
		//图片的无缝滚动就是第一个里复制一份到ul最后
		//当图片滚动到克隆的最后一张图片是。让ul快速，不做动画的跳到最左侧：left为0
		//num=0 重新开始
		
		//8、点击右侧按钮，小圆圈跟随一起变化，可以在生命一个变量控制小圆圈的播放
		circle--;
		//如果circle<0说明走到了第一张图片了
	/* 	if(circle<0){
			circle=ol.children.length-1;
		} */
		circle=circle<0?ol.children.length-1:circle;
		//9.调用函数
		circleChange();
	});
	function circleChange(){
		//清除其余小圆圈的current类名
		for(var i=0;i<ol.children.length;i++){
			ol.children[i].className="";
		}
		//留下当前小圆圈的current类名
		ol.children[circle].className="current";
	}
	//10.自动播放
	var timer=setInterval(function(){
		//手动调用点击事件
		arrow_r.click()
	},2000);
	
	/* 回到顶部和导航栏 */
	var navTwo=document.querySelector('.nav-two');
	var return1=document.querySelector('.return');
	document.addEventListener('scroll',function(){
		var top=parseInt(document.documentElement.scrollTop);
		/* console.log(top); */
		if(top>200){
			navTwo.style.display="block";
		}else{
			navTwo.style.display="none";
		}
		if(top>500){
			return1.style.display="block";
		}else{
			return1.style.display="none";
		}
		
	}) 
	
	//顶部轮播
	//获取元素左右按钮
	var news_l=document.querySelector(".news-l");
	var news_r=document.querySelector(".news-r");
	var Topfocus=document.querySelector('.news');
	var ultop=document.getElementById("top");
	var topTimer = null;
	topTimer =setInterval(function(){
		news_r.click();
	},2000);
	var TopfocusWidth=Topfocus.offsetWidth;
	Topfocus.addEventListener('mouseenter',function(){
		clearInterval(topTimer);
	})
	Topfocus.addEventListener('mouseleave',function(){
	topTimer =setInterval(function(){
		news_r.click();
	},2000);
	})
	var first=ultop.children[0].cloneNode(true);
	ultop.appendChild(first);
	 var num2=0;
	news_r.addEventListener('click',function(){
		if(num2==ultop.children.length-1){
			ultop.style.left=0;
			num2=0;
		}
		num2++;
		animate(ultop,-num2*TopfocusWidth)
	})
	news_l.addEventListener('click',function(){
		if(num2==0){
			num2=ultop.children.length-1
			ultop.style.left=-num2*TopfocusWidth+"px";
		}
		num2--;
		animate(ultop,-num2*TopfocusWidth)
		
	})
	
	
	// 鼠标经过以及以及导航栏  二级出来
	//获取元素
	//获取彩妆
	var cosmetics=document.getElementById("cosmetics")
	var cosmetics2=document.getElementById("cosmetics2")
	//获取香水
	var perfume=document.getElementById("perfume")
	var perfume2=document.getElementById("perfume2")
	//获取护肤
	var skincare=document.getElementById("skincare")
	var skincare2=document.getElementById("skincare2")
	 
	 //彩妆
	cosmetics.addEventListener('mouseenter', function(){
		cosmetics2.style.display="block";
	})
	cosmetics.addEventListener('mouseleave', function(){
		cosmetics2.style.display="none";
	})
	//香水
	perfume.addEventListener('mouseenter', function(){
		perfume2.style.display="block";
	})
	perfume.addEventListener('mouseleave', function(){
		perfume2.style.display="none";
	})
	//护肤
	skincare.addEventListener('mouseenter', function(){
		skincare2.style.display="block";
	})
	skincare.addEventListener('mouseleave', function(){
		skincare2.style.display="none";
	})
	
	//浮动导航栏的下拉
	//获取彩妆
	var cosmetics3=document.getElementById("cosmetics3")
	var cosmetics4=document.getElementById("cosmetics4")
	//获取香水
	var perfume3=document.getElementById("perfume3")
	var perfume4=document.getElementById("perfume4")
	//获取护肤
	var skincare3=document.getElementById("skincare3")
	var skincare4=document.getElementById("skincare4")
	
	cosmetics3.addEventListener('mouseenter', function(){
		cosmetics4.style.display="block";
	})
	cosmetics3.addEventListener('mouseleave', function(){
		cosmetics4.style.display="none";
	})
	
	perfume3.addEventListener('mouseenter', function(){
		perfume4.style.display="block";
	})
	perfume3.addEventListener('mouseleave', function(){
		perfume4.style.display="none";
	})
	
	skincare3.addEventListener('mouseenter', function(){
		skincare4.style.display="block";
	})
	skincare3.addEventListener('mouseleave', function(){
		skincare4.style.display="none";
	})
	
	//选项卡
	/* 彩妆 */
	/* var artCosmetics=document.getElementById("art-cosmetics")
	var artCosmetics2=document.getElementById("art-cosmetics2") */
	var pitchOn=document.getElementsByClassName("pitchOn");
	/* artCosmetics.addEventListener('click',function(){
		artCosmetics2.style.display="block";
		pitchOn.style.display="block";
	})
	 */
/* 	var artperfume=document.getElementById("art-perfume");
	var artperfume2=document.getElementById("art-perfume2");
	
	
	artperfume.addEventListener('click',function(){
		alert(1)
		artperfume2.style.display="block";
		/* artCosmetics2.style.display="none"; */
/* 		pitchOn.style.display="block";
	}) */
	
	/*选项卡  */
	var t_list=document.getElementById("tab").getElementsByTagName("li");
	var c_list=document.getElementsByClassName("favorites-aside-content");
	for (let i = 0; i < t_list.length; i++) {
		
		t_list[i].xb=i;
		t_list[i].onclick=function(){
			pitchOn[i].setAttribute("style","display:block");
			(function(index){
				for(let i = 0; i < pitchOn.length; i++) {
					if(i === index) {
						continue;
					} else {
						pitchOn[i].style.display = "none";
					}
				}
			}(i))
			
			for (let j = 0; j < c_list.length; j++) {
				c_list[j].style.display="none";
				
			}
			c_list[this.xb].style.display="flex";
		
			
			
		}
	}
	
	
	var more_mlbox=document.getElementsByClassName("more-mlbox");
	var down=document.getElementsByClassName("down");
		
		for (let i = 0; i < down.length; i++) {
			let btn_true=true;
			down[i].xb=i;
			down[i].onclick=function(){
				for (let j = 0; j < more_mlbox.length; j++) {
						more_mlbox[j].style.display="none";
						down[i].innerHTML='<span class="iconfont">&#xf02a9;</span>';
						
					}
					more_mlbox[this.xb].style.display="block";
					down[this.xb].innerHTML='<span class="iconfont">&#xf02aa;</span>';
					if(btn_true){
						more_mlbox[this.xb].style.display="block";
						down[this.xb].innerHTML='<span class="iconfont">&#xf02aa;</span>';
						btn_true=false;
					}else{
						more_mlbox[this.xb].style.display="none";
						down[this.xb].innerHTML='<span class="iconfont">&#xf02a9;</span>';
						btn_true=true;
					}
				}
											
					
						
				
			}
		

})