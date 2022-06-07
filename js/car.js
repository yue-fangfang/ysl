//1.选择框，全选|反选 功能
//2.选择以后，小计相加放入到（合计中）
window.onload = function() {

	var check = getClass("check");
	var priceTotal = document.getElementById("priceTotal");
	/* 加上邮费 优惠 */
	var priceTotal_2 = document.getElementById("priceTotal_2");
	
	var tbody = document.getElementById("tbody");
	var tr = tbody.getElementsByTagName('tr');
	for (var i = 0; i < check.length; i++) {
		check[i].onclick = function() {
			if (this.className == "check-all check") {
				for (var j = 0; j < check.length; j++) {
					check[j].checked = this.checked
				}
			}
			getTotal();
		}
		
	}
	//事件委托
	for (var i = 0; i < tr.length; i++) {
		tr[i].onclick = function(e) {
			var e = window.event || e;
			var target = e.target || e.srcElement; //兼容
			var input1 = this.getElementsByTagName('input')[1];
			var del = this.getElementsByClassName("delete");
			switch (target.className) {
				case 'add':
					input1.value = parseInt(input1.value) + 1;
					break;
				case 'reduce':
					if (input1.value <= 1) {
						input1.value = 1;
					} else {
						input1.value -= 1;
					}

					break;
				case 'delete':
					// tbody.removeChild(target.parentNode.parentNode); //span-td-tr
					for( let a = 0 ; a < del.length ; a ++){
						del[a].parentNode.parentNode.parentNode.parentNode.parentNode.remove();
					}
					
					break;
			}
			getTotal();
		}
	}
	
	/* 回到顶部 */
	/* 回到顶部和导航栏 */
	var return1=document.querySelector('.return');
	document.addEventListener('scroll',function(){
		var top=parseInt(document.documentElement.scrollTop);
		if(top>500){
			return1.style.display="block";
		}else{
			return1.style.display="none";
		}
		
	}) 
	
	var more_type=document.getElementsByClassName("more-type");
	var next=document.getElementsByClassName("next");
	console.log(more_type)
		
		for (let i = 0; i < next.length; i++) {
			let btn_true=true;
			next[i].xb=i;
			next[i].onclick=function(){
				for (let j = 0; j < more_type.length; j++) {
						more_type[j].style.display="none";
						next[i].innerHTML='<span class="iconfont">&#xf02a9;</span>';
						
					}
					more_type[this.xb].style.display="block";
					next[this.xb].innerHTML='<span class="iconfont">&#xf02aa;</span>';
					if(btn_true){
						more_type[this.xb].style.display="block";
						next[this.xb].innerHTML='<span class="iconfont">&#xf02aa;</span>';
						btn_true=false;
					}else{
						more_type[this.xb].style.display="none";
						next[this.xb].innerHTML='<span class="iconfont">&#xf02a9;</span>';
						btn_true=true;
					}
				}
											
					
						
				
			}
		
	
	}
	
	
	


//合计、已选商品件数
function getTotal() {
	var tbody = document.getElementById('tbody');
	var tr = tbody.getElementsByTagName('tr');
	var price = 0;
	var allprice=0;
	var sum=0;
	var goto_price=document.getElementById("price-all");
	for (var i = 0; i < tr.length; i++) {
		var input = tr[i].getElementsByTagName('input');
		
		if (input[0].checked) { //判断是否是选中
			var td3 = tr[i].getElementsByTagName('td')[3].innerText;
			var td5 = tr[i].getElementsByTagName('td')[5];
			var numCount = parseInt(input[1].value);
			/* 获取优惠 */
			var preferentialprice =document.getElementById("preferential_price");
			
			/* 获取运费 */
			var freight=document.getElementById("freight");
			
			td5.innerText = numCount * td3;
			
			price += parseInt(tr[i].getElementsByTagName('td')[5].innerText);
			allprice=price-parseInt(preferentialprice.innerText)+parseInt(freight.innerText);
			sum=parseInt( allprice);
		}
	}
	priceTotal.innerText =price;
	priceTotal_2.innerText=allprice;
	goto_price.innerText=allprice;
	
	
}

//获取class名称的
function getClass(cName) {
	var doms = document.getElementsByTagName("*");
	var domArr = [];
	for (var i = 0; i < doms.length; i++) {
		if (doms[i].className == cName || doms[i].className.indexOf('' + cName) != -1 || doms[i].className.indexOf(cName +
				" ") != -1) {
			domArr.push(doms[i]);
		}
	}
	return domArr;

}