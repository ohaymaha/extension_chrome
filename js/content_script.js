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
 var protocol = window.location.protocol;
 if(protocol =='https:'){
 	var ssl = true;
 }
 else
 {
 	var ssl = false;
 } 

 if( flag && !ssl ){
 	console.log('OHM Extension'); 
 	chrome.storage.sync.get({
	  	OHMdisable: 'no'
	}, function(items) { 
	    if( items.OHMdisable !='yes'  ){ 
			extension_main();  
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
function extension_main(){  
	fix_overflow();   
	add_key();      
}  
function fix_overflow(){    
	fix_overflow_class("title_box_category");  
	fix_overflow_class("nav");  
	fix_overflow_class("box27");  
	fix_overflow_class("box3");  
	fix_overflow_class("wrapper");  
	fix_overflow_class("ulBlockMenu");  
	fix_overflow_class("lineFmenu");  
	fix_overflow_class("footerMenu");   
	fix_overflow_tagname('h3');
	fix_overflow_tagname('li');
	fix_overflow_tagname('span'); 
} 
function fix_overflow_tagname(tag){  
	var ptag = document.getElementsByTagName(tag); 
	for (var i=0, max=ptag.length; i < max; i++) {  
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
	var ptag = document.getElementsByClassName(classname); 
	for (var i=0, max=ptag.length; i < max; i++) {  
		var tmp = ptag[i].getAttribute('class');
		ptag[i].setAttribute('class',tmp + ' fix_overflow');
	} 
}   
function add_key(){  
	var script_var = document.createElement("script");
    var script_var_t = document.createTextNode("var pubId = "+pubid+";");  
	script_var.appendChild(script_var_t); 
    document.head.appendChild(script_var);  

    var url = chrome.extension.getURL('js/publisher.js');
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);  



  
    var link  = document.createElement('link'); 
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL('css/tip-yellow.css');//'http://ads.ohm.vn/tip-yellow.css';
    link.media = 'all';
    document.body.appendChild(link);  
} 
