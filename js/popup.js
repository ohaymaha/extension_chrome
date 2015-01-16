/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */ 
$( document ).ready(function() { 
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;  
  

 	chrome.storage.sync.get({
	    OHMdisable: 'no',
    	OHMfavoriteColor: '#F20D0D',
	    OHMtokenKey: '',
	    OHMrefreshKey: '',
	    OHMexpiryTime: '',
	    OHMusername: '',
	    OHMname: ''
	 }, function(items) {   
	 	console.log(items.OHMexpiryTime); //gio
	 	console.log(items.OHMrefreshKey);
	 		if( items.OHMtokenKey == ''){ 
	 			document.getElementsByTagName("body")[0].style.width = "300px"; 
	 			document.getElementsByTagName("body")[0].style.height = "150px"; 
				$('.OHMlogin').show(); 
				$('.OHMuserpanel').hide();  
	 		}
	 		else
	 		{
	 			//
	 			$('.OHMlogin').hide(); 
	 			$('.OHMuserpanel').show();  

	 			var url_sso = 'http://account.ohm.vn/cck?a='+items.OHMtokenKey; 
	 			console.log(url_sso);

	 			var script=document.createElement('img');
				//script.setAttribute('style','display:none');
				script.setAttribute('width','1px');
				script.setAttribute('height','1px');
				script.src=url_sso; 
				$("body").append(script); 

	 			$.ajax({
		            url: url_sso,  
		             beforeSend: function (request)
		            {
		                request.setRequestHeader("E8668OHM", items.OHMtokenKey);
		            }, 
		            type: 'GET',
		            dataType: 'JSON',
		            data: "",
		            success: function(data){ 
		                console.log(data);
		            }
		        }); 

	 			$.ajax({
		            url: 'http://user.api.ohm.vn/me', 
		            beforeSend: function (request)
		            {
		                request.setRequestHeader("E8668OHM", items.OHMtokenKey);
		            }, 
		            type: 'POST',
		            dataType: 'JSON',
		            data: "",
		            success: function(data){ 
		                var obj = JSON.parse(data); 
		                console.log(obj);     
		                $('#info_avatar').html('<img src="'+obj[1].avatar+'"/>');
		                $('#info_name').html(obj[1].fullName);

		            }
		        }); 
		        $.ajax({
		            url: 'http://user.api.ohm.vn/ota/notainbag', 
		            beforeSend: function (request)
		            {
		                request.setRequestHeader("E8668OHM", items.OHMtokenKey);
		            }, 
		            type: 'POST',
		            dataType: 'JSON',
		            data: "",
		            success: function(data){   
		                $('#countota1').html(data.tsOTAprize+' OTA');
		                $('#countota2').html(data.tsOTAstore+' OTA');
		                $('#countota3').html(data.tsOTAdeal+' OTA');

		            }
		        });


	 		}

		    if( items.OHMdisable !='yes' ){ 
				$('#vohieu').show();  
				$('#trangthai').text('đang sử dụng');  
				$('#trangthai').css('color','#1FD002');    
			}
			else
			{
				$('#kichhoat').show();  
				$('#trangthai').text('đang vô hiệu');  
				$('#trangthai').css('color','#ccc');  
			} 




			$('#btnlogin').click(function(){
				 var username = $('#username').val();
				 var password = $('#password').val();
				 if(username ==''){
				 	$('#noti').html('Hãy nhập tên đăng nhập!');
				 	$('#username').focus();
				 	return false;
				 }
				 if(password ==''){
				 	$('#noti').html('Hãy nhập mật khẩu!');
				 	$('#password').focus();
				 	return false;
				 }

				var objdata = {};
		        objdata.userName = username;
		        objdata.password = password;
		        objdata.expiryDate = true;  
		        objdata.savepassword = true;  
				 $.ajax({
		            url: 'http://user.api.ohm.vn/login', 
		            beforeSend: function (request)
		            {
		                request.setRequestHeader("Content-Type", undefined);
		            }, 
		            type: 'POST',
		            dataType: 'JSON',
		            data: JSON.stringify(objdata),
		            success: function(data){ 
		                var obj = JSON.parse(data); 

		                console.log(obj); 

		                if (obj[0].State == 2) {
		                	$('#noti').html('Mật khẩu không đúng!');
		                    return false;
		                } else if (obj[0].State == 1) {
		                	chrome.storage.sync.set({
		                		'OHMtokenKey': obj[1].tokenKey,
		                		'OHMrefreshKey': obj[1].refreshKey,
		                		'OHMexpiryTime': obj[1].expiryTime,
		                		'OHMusername': username
		               		 }, function() {
		               		 	if(items.OHMdisable != 'yes'){
		               		 		chrome.browserAction.setBadgeText({text: "on"});
									chrome.browserAction.setBadgeBackgroundColor({ color: '#1FD002' });
								}
						        $('#noti').html('Đăng nhập thành công!');
						    });
						    setTimeout(function(){location.reload();},500); 
		                       
		                } else {
		                    $('#noti').html('Mật khẩu hoặc tài khoản không đúng!');
		                    return false;
		                }  
		            }
		        });
			});
			$('#btnlogout').click(function(){ 
				  
				$.ajax({
		            url: 'http://user.api.ohm.vn/logout', 
		            beforeSend: function (request)
		            {
		                request.setRequestHeader("E8668OHM",  items.OHMtokenKey);
		            }, 
		            type: 'POST',
		            dataType: 'JSON',
		            data: "",
		            success: function(data){  

		                console.log(data);   
		                 
		                	chrome.storage.sync.set({
		                		'OHMtokenKey': '',
		                		'OHMrefreshKey': '',
		                		'OHMexpiryTime': '',
		                		'OHMusername': '',
		               		 }, function() {
		               		 	chrome.browserAction.setBadgeText({text: "off"});
								chrome.browserAction.setBadgeBackgroundColor({ color: '#cccccc' });
						        location.reload();  
						    });
		                       
		            }
		        }); 

			});



	});

	$('#vohieu').click(function(){
		vohieu(); 
		reload_c_tab();
	});
	$('#kichhoat').click(function(){
		kichhoat(); 
		reload_c_tab();
	});
	/////////////////
	function save_options() {
	  var color = $('#color').val(); 
	  chrome.storage.sync.set({
	    OHMfavoriteColor: color
	  }, function() {   
	  });
	} 
	function restore_options() { 
	  chrome.storage.sync.get({
	    OHMfavoriteColor: '#F20D0D'
	  }, function(items) {
	  	$('#color').val('');  
	    document.getElementById('color').style.background = items.OHMfavoriteColor; 
	  });
	}
	restore_options(); 
	$('#input_for_begin').focus();  
	$('#color').simpleColorPicker();  
	/////////////////
});
	
}); 



//function
function setKeyHaveOta(url){
	var xmlhttp = new XMLHttpRequest(); 
	var urlall = 'http://ohm-vdc.aerospike.build-again.appspot.com/keyword?url='+url; 
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var arrkey = JSON.parse(xmlhttp.responseText);  
	        var text ='';
	        for (var key in arrkey) {
			  if (arrkey.hasOwnProperty(key)) { 
			    text = text + key + ', ';
			  }
			}
			if(text !=''){
				$('#keyhaveota').html(text); 
			}
			else
			{
				$('#keyhaveota').hide(); 
				$('#keyhaveotah4').hide();  
			}
			
	    }
	}
	xmlhttp.open("GET", urlall, true);
	xmlhttp.send(); 
}
function vohieu() { 
	chrome.storage.sync.set({'OHMdisable': 'yes'}, function() {
          // Notify that we saved. 
    });
	$('#vohieu').hide();
	$('#kichhoat').show();
	$('#trangthai').text('đang vô hiệu');
	$('#trangthai').css('color','#ccc');  
	chrome.browserAction.setBadgeText({text: "off"});
	chrome.browserAction.setBadgeBackgroundColor({ color: '#cccccc' });
}
function kichhoat() {
	chrome.storage.sync.set({'OHMdisable': 'no'}, function() {
          // Notify that we saved. 
    });
	$('#kichhoat').hide();
	$('#vohieu').show();
	$('#trangthai').text('đang sử dụng'); 
	$('#trangthai').css('color','#1FD002'); 
	chrome.browserAction.setBadgeText({text: "on"});
	chrome.browserAction.setBadgeBackgroundColor({ color: '#1FD002' });
}
function reload_c_tab(){
	chrome.tabs.reload();
	window.close();
}