window.onload=function(){
	//手机号:请填写13、14、15、17、18开头的11位手机号
	var Tel=document.getElementById("tel");
	var a=false;
	Tel.onblur=function(){
		var tel=document.getElementById("tel").value;
		//创建正则
		var reg= /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
		if(reg.test(tel)){
			var teltrue=document.getElementById("Teltrue");
			teltrue.innerHTML="成功";
			teltrue.style.color="green";
			Tel.style.cssText="border:1px solid green";
			a=true;
		}else{
			var teltrue=document.getElementById("Teltrue");
			teltrue.innerHTML="请输入有效的手机号码";
			teltrue.style.color="red";
			Tel.style.cssText="border:1px solid red";
			a=false;
		}
	}
	//创建随机验证码
	var imgbox=document.querySelector(".img-box");
	
	function yanShow(){
		var chars=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
		
		var str="";
		for(var j=0;j<4;j++){
			var i;
			i=Math.floor(Math.random()*62);
			str+=chars[i];
		}
		imgbox.innerText=str;
	}
	yanShow();
	imgbox.onclick=function(){yanShow();}
	
	
	//随机验证码
	var Yanzhengma=document.getElementById("yanzhengma");
	// var yanzhengma=document.getElementById("yanzhengma").innerHTML;
	// var imgbox_value=imgbox.innerHTML;
	// console.log(imgbox_value);
	var b=false;
	Yanzhengma.onblur=function(){
		if(Yanzhengma.value == imgbox.innerHTML){
			var yanzhengmatrue=document.getElementById("yanzhengmatrue");
				yanzhengmatrue.innerHTML="成功";
				yanzhengmatrue.style.color="green";
				Yanzhengma.style.cssText="border:1px solid green";
				b=true;
		}else{
				var yanzhengmatrue=document.getElementById("yanzhengmatrue");
				yanzhengmatrue.innerHTML="请输入有效的验证码";
				yanzhengmatrue.style.color="red";
				Yanzhengma.style.cssText="border:1px solid red";
				b=false;
			}
	}
	//发送验证码
	var Yanzhengma1=document.getElementById("yanzhengma1");
	var fasongtrue=document.getElementById("fasongtrue");
	var c=false;
	Yanzhengma1.onblur=function(){
		if(Yanzhengma1.value===Yanzhengma.value &&Yanzhengma1.value !=""){
				fasongtrue.innerHTML="成功";
				fasongtrue.style.color="green";
				Yanzhengma1.style.cssText="border:1px solid green";
				c= true;
		}else{
				fasongtrue.innerHTML="请输入有效的验证码";
				fasongtrue.style.color="red";
				Yanzhengma1.style.cssText="border:1px solid red";
				c=false;
		}
		
	}

	
	
	var denglu=document.querySelector(".denglu1");
	var denglu1true=document.getElementById("denglu1true")
	denglu.onclick=function(){
		
		if(a && b && c){
			window.location.href="../html/index.html";
		}else{
			denglu1true.innerHTML="手机号或验证码输入错误";
			denglu1true.style.color="red";
		}
	}
	
	
	var denglu2=document.querySelector(".denglu2");
	var denglu2true=document.getElementById("denglu2true")
	var password=document.getElementById("password")
	
	denglu2.onclick=function(){
		if(d && password.value !=""){
			window.location.href="../html/index.html"
		}else{
			denglu2true.innerHTML="手机号或密码输入错误";
			denglu2true.style.color="red";
		}
		
	}
	
	var denglubox=document.querySelector(".denglu-box");
	var zhucebox=document.querySelector(".zhuce-box");
	var list1=document.getElementById("list1")
	var list2=document.getElementById("list2")
	list1.onclick=function(){
		zhucebox.style.display="block";
		denglubox.style.display="none";
		list1.style.cssText="border-bottom: 2px solid #000;"
		list2.style.cssText="border-bottom: 0px solid #000;"
	}
	list2.onclick=function(){
		zhucebox.style.display="none";
		denglubox.style.display="block";
		list2.style.cssText="border-bottom: 2px solid #000;"
		list1.style.cssText="border-bottom: 0px solid #000;"
	}
	
	var see=document.querySelector(".see")
	var password=document.getElementById("password")
	var  is_true=true;
	see.onclick=function(){
		
		if(is_true){
			password.type="text";
		    see.innerHTML="<span class='iconfont'>&#xebcc;</span>"
		    is_true=false;
		}else{
			password.type="password";
			see.innerHTML="<span class='iconfont'>&#xebcd;</span>"
			is_true=true;
		}
	}
	
	
	
	//手机号:请填写13、14、15、17、18开头的11位手机号
	var dlphone=document.getElementById("dlphone");
	var dlphonetrue=document.getElementById("dlphonetrue");
	
	var d=false;
	dlphone.onblur=function(){
		var dlphone=document.getElementById("dlphone").value;
		//创建正则
		var reg= /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
		if(reg.test(dlphone)){
			var dlphonetrue=document.getElementById("dlphonetrue");
			dlphonetrue.innerHTML="成功";
			dlphonetrue.style.color="green";
			/* dlphone.style.cssText="border:1px solid green"; */
			d=true;
		}else{
			var dlphonetrue=document.getElementById("dlphonetrue");
			dlphonetrue.innerHTML="请输入有效的手机号码";
			dlphonetrue.style.color="red";
			/* dlphone.style.cssText="border:1px solid red"; */
			d=false;
		}
	}
	
	
	
	
}