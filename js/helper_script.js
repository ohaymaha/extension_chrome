/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */ 

function gotoota(url){ 
	var tab=window.open(url,'_blank'); 
	tab.focus();  
	return false;
}
function jsonCallback(arrkey) { 
        var selector = arrkey.selector;  
        console.log(arrkey);
        add_key_with_arr('body',arrkey.keyword,selector,ohm_color);
        add_url_with_arr('body',arrkey.url,ohm_color);  
} 

///////////////////////////////////////////////// BEGIN URL
function add_url_with_arr(key,arr,color){
	 add_url_with_arr_tag(key,arr,color,tokenKey);
}
function add_url_with_arr_tag(key,arr,color){
	var ptag = document.getElementsByTagName(key);  
	
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].innerHTML;
		ptag[i].innerHTML = replaceUrls(tmp,arr,color); 
	} 
}
function replaceUrls(text,arr,color) {

	var aop = []; 
	aop[0] = [];
	aop[1] = [];
	for (var key in arr) {
	  if (arr.hasOwnProperty(key)) { 
	  	var tmp = key;
	  	key = key.replace('http://www','');
	  	key = key.replace('http://','');
	  	key = key.replace('https://','');
	  	key = key.replace('https://www','');
	  	key = key.replace(domain,'');
	  	//console.log(tmp);
	  	//console.log(key);
	    aop = replaceUrl(text,aop,tmp,arr[tmp],color);
	    aop = replaceUrl(text,aop,key,arr[tmp],color);
	  }
	} 
	for (var key in aop[0]) {
		var str_o = aop[0][key];
		var str_n = aop[1][key];
		text = text.replace(str_o,str_n);  
	} 
	console.log(aop);
	return text;
}
function replaceUrl(text,aop,key,urls,color){ 
	var pattern = '<a([^<^>]*)href=([\"\'])('+key+')([\"\'])([^<^>]*)>(.*)</a>'; 

	var exp = new RegExp(pattern, "ig");   
	var repl = get_repl_url(urls,color); 

	var arr = text.match(exp); 

	for (var key in arr) {
		var str_o = arr[key];
		var str_n = str_o.replace(exp,repl); 
		aop[0].push(str_o);
		aop[1].push(str_n);
		// console.log(str_o);
		// console.log(str_n); 
	} 
	 
	return aop;
}
function get_repl_url(urls,color){ 
	var repl ="<a $1 href='$3' $5 ><span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>[OTA]</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span>$6</a>";
	return repl;
}
///////////////////////////////////////////////// END URL
function add_key_with_arr(key,arr,selector,color){
	if( selector =='.fl.wid470'){
		var classname = 'wid470';
		add_key_with_arr_class(classname,arr,color);
	}
	else
	{
		add_key_with_arr_tag(key,arr,color);
	}
}
function add_key_with_arr_class(classname,arr,color){
	var ptag = document.getElementsByClassName(classname);  
	
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].innerHTML;
		ptag[i].innerHTML = replaceKeys(tmp,arr,color); 
	} 
}
function add_key_with_arr_tag(key,arr,color){
	var ptag = document.getElementsByTagName(key);  
	
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].innerHTML;
		ptag[i].innerHTML = replaceKeys(tmp,arr,color); 
	} 
}
function replaceKeys(text,arr,color) {

	var aop = []; 
	aop[0] = [];
	aop[1] = [];
	for (var key in arr) {
	  if (arr.hasOwnProperty(key)) { 
	    aop = replaceKey(text,aop,key,arr[key],color);
	  }
	} 
	for (var key in aop[0]) {
		var str_o = aop[0][key];
		var str_n = aop[1][key];
		text = text.replace(str_o,str_n);  
	} 
	//console.log(aop);
	return text;
}
function replaceKey(text,aop,key,urls,color){ 
	var pattern = '>([^<^>]*)\\s('+key+')\\s([^<^>]*)<';
	var pattern1 = '>('+key+')\\s([^<^>]*)<';
	var pattern2 = '>([^<^>]*)\\s('+key+')<';
	var pattern3 = '>('+key+')<';

	var exp = new RegExp(pattern, "ig"); 
	var exp1 = new RegExp(pattern1, "ig"); 
	var exp2 = new RegExp(pattern2, "ig"); 
	var exp3 = new RegExp(pattern3, "ig"); 

	var repl = get_repl(urls,color);
	var repl1 = get_repl1(urls,color);
	var repl2 = get_repl2(urls,color);
	var repl3 = get_repl3(urls,color);

	var arr = text.match(exp);
	var arr1 = text.match(exp1);
	var arr2 = text.match(exp2);
	var arr3 = text.match(exp3); 

	for (var key in arr) {
		var str_o = arr[key];
		var str_n = str_o.replace(exp,repl); 
		aop[0].push(str_o);
		aop[1].push(str_n);
		//console.log(str_o);
		//console.log(str_n);
		//text = text.replace(str_o,str_n); 
	} 
	for (var key in arr1) {
		var str_o = arr1[key];
		var str_n = str_o.replace(exp,repl); 
		//text = text.replace(str_o,str_n);
		aop[0].push(str_o);
		aop[1].push(str_n);
	} 
	for (var key in arr2) {
		var str_o = arr2[key];
		var str_n = str_o.replace(exp,repl); 
		//text = text.replace(str_o,str_n); 
		aop[0].push(str_o);
		aop[1].push(str_n);
	} 
	for (var key in arr3) {
		var str_o = arr3[key];
		var str_n = str_o.replace(exp,repl); 
		//text = text.replace(str_o,str_n); 
		aop[0].push(str_o);
		aop[1].push(str_n);
	} 
	// text = text.replace(exp,repl); 
	// text = text.replace(exp1,repl1); 
	// text = text.replace(exp2,repl2); 
	// text = text.replace(exp3,repl3); 
	return aop;
}
function get_repl(urls,color){
	var repl =">$1 <span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$2</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span> $3<";
	return repl;
}
function get_repl1(urls,color){
	var repl ="><span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$1</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span> $2<";
	return repl;
}
function get_repl2(urls,color){
	var repl =">$1 <span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$2</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span><";
	return repl;
}
function get_repl3(urls,color){
	var repl ="><span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$1</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span><";
	return repl;
}