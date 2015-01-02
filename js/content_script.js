/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */  
 var domain = window.location.host;

 var flag = safety_zone(domain);

 if( flag ){
 	console.log('OHM Extension');
 	chrome.storage.sync.get({
	  	OHMdisable: 'no',
		OHMfavoriteColor: '#F20D0D',
	    OHMtokenKey: '',
	    OHMrefreshKey: '',
	    OHMexpiryTime: '',
	    OHMusername: '',
	    OHMname: ''
	}, function(items) { 
	    if( items.OHMdisable !='yes'  && items.OHMtokenKey != '' ){ 
			extension_main(items.OHMfavoriteColor,items.OHMtokenKey);  
		}
		else
		{

		} 
	});
 } 
  
/**
 * functions
 */ 
 function safety_zone(domain){
 	if( domain == 'account.ohm.vn' || domain =='adv.ohm.vn' || domain =='ads.ohm.vn'){
 		return false;
 	}
 	var body = document.getElementsByTagName("body");
 	var str = body[0].innerHTML;  
	var pattern = 'ads.ohm.vn/publisher.js'; 
	var reg = new RegExp(pattern, "ig"); ; 
	var is_publisher = reg.test(str);
	if(is_publisher){
		return false;
	}
 	return true;
 }
function extension_main(color,tokenKey){ 
	//fix_title(); 	  
	add_script(); 
	fix_overflow();   
	setTimeout(function(){add_key("body",color,tokenKey);},500);      
}  
function fix_overflow(){  
	//fix_overflow_tag("li");  
	//fix_overflow_tag("h3");  
	fix_overflow_class("title_box_category");  
	fix_overflow_class("nav");  
	fix_overflow_class("box27");  
	fix_overflow_class("box3");  
	fix_overflow_class("wrapper");  
	fix_overflow_class("ulBlockMenu");  
	fix_overflow_class("lineFmenu");  
	fix_overflow_class("footerMenu");  

	//fix_overflow_tagname('div');
	fix_overflow_tagname('h3');
	fix_overflow_tagname('li');
	fix_overflow_tagname('span');
	//fix_overflow_tagname('ul');
} 
function fix_overflow_tagname(tag){  
	var ptag = document.getElementsByTagName(tag); 
	for (var i=0, max=ptag.length; i < max; i++) {  
		//var tmp = ptag[i].style.overflow;
		ptag[i].style.overflow = "inherit";
	}
} 
function fix_overflow_tag(tag){  
	var ptag = document.getElementsByTagName(tag); 
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].getAttribute('class');
		ptag[i].setAttribute('class',tmp + ' fix_overflow');
	}
}  
function fix_overflow_class(classname){  
	//document.addEventListener('DOMSubtreeModified', function(e) {
		var ptag = document.getElementsByClassName(classname); 
		for (var i=0, max=ptag.length; i < max; i++) {  
			var tmp = ptag[i].getAttribute('class');
			ptag[i].setAttribute('class',tmp + ' fix_overflow');
		}
	//}); 
} 
function add_script(){
	var s = document.createElement('script'); 
	s.src = chrome.extension.getURL('js/helper_script.js');
	s.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
} 
function fix_title(){
	var ptag = document.getElementsByTagName("a");
	for (var i=0, max=ptag.length; i < max; i++) { 
		 ptag[i].setAttribute('title','');
		 ptag[i].setAttribute('alt','');
		 ptag[i].setAttribute('bi:linkid',''); 
	}
	var ptag = document.getElementsByTagName("img");
	for (var i=0, max=ptag.length; i < max; i++) { 
		 ptag[i].setAttribute('title','');
		 ptag[i].setAttribute('alt','');
		 ptag[i].setAttribute('bi:linkid','');
	}
}  
function add_key(key,color,tokenKey){
	//console.log(tokenKey);
	var xmlhttp = new XMLHttpRequest(); 
	var url = 'http://ads.ohm.vn/keyword?url='+document.URL+'&a='+tokenKey; 
	//var url = 'http://ads.ohm.vn/keyword?url='+document.URL; 
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var arrkey = JSON.parse(xmlhttp.responseText); 
	        var selector = arrkey.selector; 
	        add_key_with_arr(key,arrkey.keyword,selector,color,tokenKey);
	    }
	}
	xmlhttp.open("GET", url, true);  
	xmlhttp.send(); 

} 
function add_key_with_arr(key,arr,selector,color,tokenKey){
	if( selector =='.fl.wid470'){
		var classname = 'wid470';
		add_key_with_arr_class(classname,arr,color,tokenKey);
	}
	else
	{
		add_key_with_arr_tag(key,arr,color,tokenKey);
	}
}
function add_key_with_arr_class(classname,arr,color,tokenKey){
	var ptag = document.getElementsByClassName(classname);  
	
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].innerHTML;
		ptag[i].innerHTML = replaceKeys(tmp,arr,color,tokenKey); 
	} 
}
function add_key_with_arr_tag(key,arr,color,tokenKey){
	var ptag = document.getElementsByTagName(key);  
	
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].innerHTML;
		ptag[i].innerHTML = replaceKeys(tmp,arr,color,tokenKey); 
	} 
}
function replaceKeys(text,arr,color,tokenKey) {
	for (var key in arr) {
	  if (arr.hasOwnProperty(key)) { 
	    text = replaceKey(text,key,arr[key],color,tokenKey);
	  }
	} 
	return text;
}
function replaceKey(text,key,urls,color,tokenKey){ 
	var pattern = '>([^<^>]*)\\s('+key+')\\s([^<^>]*)<';
	var pattern1 = '>('+key+')\\s([^<^>]*)<';
	var pattern2 = '>([^<^>]*)\\s('+key+')<';
	var pattern3 = '>('+key+')<';

	var exp = new RegExp(pattern, "ig"); 
	var exp1 = new RegExp(pattern1, "ig"); 
	var exp2 = new RegExp(pattern2, "ig"); 
	var exp3 = new RegExp(pattern3, "ig"); 

	var repl = get_repl(urls,color,tokenKey);
	var repl1 = get_repl1(urls,color,tokenKey);
	var repl2 = get_repl2(urls,color,tokenKey);
	var repl3 = get_repl3(urls,color,tokenKey);

	text = text.replace(exp,repl); 
	text = text.replace(exp1,repl1); 
	text = text.replace(exp2,repl2); 
	text = text.replace(exp3,repl3); 
	return text;
}
function get_repl(urls,color,tokenKey){
	var repl =">$1 <span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$2</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url + '&p=1805358581125207&a='+tokenKey;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span> $3<";
	return repl;
}
function get_repl1(urls,color,tokenKey){
	var repl ="><span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$1</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url + '&p=1805358581125207&a='+tokenKey;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span> $2<";
	return repl;
}
function get_repl2(urls,color,tokenKey){
	var repl =">$1 <span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$2</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url + '&p=1805358581125207&a='+tokenKey;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span><";
	return repl;
}
function get_repl3(urls,color,tokenKey){
	var repl ="><span class='tooltip-oat-ohm tooltip-oat-ohm-effect-4 link_ota' ><span class='tooltip-oat-ohm-item' style='color: "+color+"'>$1</span><span  onclick='return false;' class='tooltip-oat-ohm-content clearfix'>";
	for (var key in urls) {
	  if (urls.hasOwnProperty(key)) {  
	  	var value = urls[key];
	  	value.url = value.url + '&p=1805358581125207&a='+tokenKey;
	    repl = repl +"<span class='tooltip-oat-ohm-text'><span class='gotourl' onclick='return gotoota(\""+value.url+"\");' >&raquo; "+value.name+" <span class='plusota'>+ "+value.ota+" <img src='http://ohm.chaythu.com/Contents/Media/DongtienOHM_5.png' /></span></span></span>"; 
	  }
	} 
	repl = repl + "</span></span><";
	return repl;
}