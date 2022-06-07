window.addEventListener('load',function(){
	/* 回到顶部和导航栏 */
	var navTwo=document.querySelector('.nav-two');
	var return1=document.querySelector('.return');
	var phoneNav=document.querySelector('.phone-nav');
	
	document.addEventListener('scroll',function(){
		var top=parseInt(document.documentElement.scrollTop);

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
	
	/* 手机端css */
	var navleft=document.getElementById("nav-left");
	var navwrap=document.getElementById("nav2-wrap")
	var close=document.getElementById("close");
	
	navleft.onclick=function(){
		navwrap.style.left=0+"px";
	}
	close.onclick=function(){
		navwrap.style.left=-1000+"px";
	}
})