/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */  
 var domain = window.location.host;
 console.log(domain);
 var pubid = 5126463837700096;
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
 	if( domain == 'www.facebook.com' || domain == 'facebook.com' || domain == 'oad.ohm.vn' || domain == 'account.ohm.vn' || domain =='adv.ohm.vn' || domain =='ads.ohm.vn'){
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
	var body = document.getElementsByTagName("head");
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

	var url = 'https://ohay-maha.appspot.com/keyword?url='+document.URL+'&p='+pubid; 
	 
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);  
	//console.log(tokenKey);
	// var xmlhttp = new XMLHttpRequest(); 
	// var url = 'https://ohay-maha.appspot.com/keyword?url='+document.URL+'&a='+tokenKey; 
	// //var url = 'http://ads.ohm.vn/keyword?url='+document.URL;
	// console.log(url); 
	// xmlhttp.onreadystatechange = function() {
	//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	//         var arrkey = JSON.parse(xmlhttp.responseText); 
	//         var selector = arrkey.selector;  
	//         console.log(arrkey);
	//         add_key_with_arr(key,arrkey.keyword,selector,color,tokenKey);
	//         add_url_with_arr(key,arrkey.url,color,tokenKey);
	//     }
	// }
	// xmlhttp.open("GET", url, true);  
	// xmlhttp.send(); 

} 
