/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   OHAYMAHA
 */  
var domain = window.location.host;
var pubid = 5714142736416768;
var flag = safety_zone(domain);
var protocol = window.location.protocol;

if(protocol =='https:'){
	var ssl = true;
}
else{
	var ssl = false;
} 

if( flag && !ssl ){ 
 	chrome.storage.sync.get({
	  	OHMdisable: 'no'
	}, function(items) { 
	    if( items.OHMdisable !='yes'  ){ 
			extension_main();  
		}
		else{
			//do notthing
		} 
	});  
 }  
/**
 * functions
 */ 
function safety_zone(domain){
    var start = domain.length - 6;
    var ohmsites = domain.substring(start,domain.length); 
    if( ohmsites == 'ohm.vn'){
        return false;
    }  
    // var header = document.getElementsByTagName('head')[0].innerHTML;  
    // var body = document.getElementsByTagName('body')[0].innerHTML; 
    // var patt = new RegExp("http://ads.ohm.vn/publisher.js","ig");
    
    // if( patt.test(header) ){
    //     return false;
    // } 

    // if( patt.test(body) ){
    //     return false;
    // } 

    return true;
}
function extension_main(){  
	var script_var = document.createElement("script");
    var script_var_t = document.createTextNode("var pubId = "+pubid+";");  
	script_var.appendChild(script_var_t); 
  
    document.head.insertBefore(script_var, document.head.firstChild); 
    var script = document.createElement("script"); 
    script.src = 'http://ads.ohm.vn/publisher.js';    
    document.head.insertBefore(script, document.head.firstChild);  

    console.log('Bạn đang sử dụng Công cụ khai thác OTA của OHAYMAHA trên trình duyệt Chrome');
}  