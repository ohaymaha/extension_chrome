/*----------------------------------------------------------------------------------------*
 * close channel khi nguoi dung close browser
 *----------------------------------------------------------------------------------------*/ 
$(window).on('beforeunload', function() {
	onClose();
});
/*----------------------------------------------------------------------------------------*
 * get datetime
 *----------------------------------------------------------------------------------------*/ 
function checkOnlineDevice(str){
	var deviceAgent = str.toLowerCase();
	var isTouchDevice = (deviceAgent.match(/(iphone|ipod|ipad)/) ||
	deviceAgent.match(/(android)/)  || 
	deviceAgent.match(/(iemobile)/) || 
	deviceAgent.match(/iphone/i) || 
	deviceAgent.match(/ipad/i) || 
	deviceAgent.match(/ipod/i) || 
	deviceAgent.match(/blackberry/i) || 
	deviceAgent.match(/bada/i));

	if (isTouchDevice == null) {
			return "desktopOnline"
		} else {
			return "phoneOnline";
		}
	}
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
    var hourTime = hour+':'+minute+':'+second;   
    return hourTime;
}
function getDayTime(str){
	//var str = "Feb 6, 2015 3:57:22 PM";
	var t = new Date(str);
	var year    = t.getFullYear();
	var month   = t.getMonth()+1; 
	var day     = t.getDate();
	var hour    = t.getHours();
	var minute  = t.getMinutes();
	var second  = t.getSeconds(); 
	var dateDay = t.getDay();
	if(dateDay=="0"){
		dateDay = "Chủ nhật";
	}
	if(dateDay=="1"){
		dateDay = "Thứ hai";
	}
	if(dateDay=="2"){
		dateDay = "Thứ ba";
	}
	if(dateDay=="3"){
		dateDay = "Thứ tư";
	}
	if(dateDay=="4"){
		dateDay = "Thứ năm";
	}
	if(dateDay=="5"){
		dateDay = "Thứ Sáu";
	}
	if(dateDay=="6"){
		dateDay = "Thứ bảy";
	}
	if(month.toString().length == 1) {
		var month = '0'+month;
	}
	if(day.toString().length == 1) {
		var day = '0'+day;
	}   
	if(hour.toString().length == 1) {
		var hour = '0'+hour;
	}
	if(minute.toString().length == 1) {
		var minute = '0'+minute;
	}
	if(second.toString().length == 1) {
		var second = '0'+second;
	}   
	var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
	var hourTime = dateDay+' ngày '+day+' tháng '+month;   
	return hourTime;
	}
function getHoursTime(str){
	//var str = "Feb 6, 2015 3:57:22 PM";
	var t = new Date(str);
	t.setHours = t.getHours + 7;
	var year    = t.getFullYear();
	var month   = t.getMonth()+1; 
	var day     = t.getDate();
	var hour    = t.getHours();
	var minute  = t.getMinutes();
	var second  = t.getSeconds(); 
	var dateDay = t.getDay();
	if(month.toString().length == 1) {
		var month = '0'+month;
	}
	if(day.toString().length == 1) {
		var day = '0'+day;
	}   
	if(hour.toString().length == 1) {
		var hour = '0'+hour;
	}
	if(minute.toString().length == 1) {
		var minute = '0'+minute;
	}
	if(second.toString().length == 1) {
		var second = '0'+second;
	}  
	var hourTime = hour+':'+minute+':'+second;   
	return hourTime;
	}
	function splitStr(str,length){
		if(str.length < length){
			ketqua = str;
		}else{
			var ketqua = str.substr(0,length) + "..."
		}
	return ketqua;
	}
/*----------------------------------------------------------------------------------------*
 * SET TIMEOUNT DE CLOSE CHANNEL
 *----------------------------------------------------------------------------------------*/ 
var timeout;
function timeout_trigger() {
	onClose();
}

function timeout_clear() {
    clearTimeout(timeout);
}

function timeout_init() {
    timeout = setTimeout('timeout_trigger()', 7000000);
}
/*----------------------------------------------------------------------------------------*
 * get token. if token=null -> call refreshToken 
 *----------------------------------------------------------------------------------------*/ 
function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ')
	            c = c.substring(1);
	        if (c.indexOf(name) != -1) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

function cookieErorr(){
	refreshtokenkey();
}
function setCookie(cname, cvalue, exdays) {
	var expires = "";
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function CreateCookie(tokenKey, refreshKey, expiryTime) {
	var datetime = new Date();
	datetime = datetime.setTime(datetime.getTime()
			+ (expiryTime * 60 * 60 * 1000));
	setCookie("__ohmr__", refreshKey, 7);
	setCookie("__ohmt__", tokenKey, expiryTime);
	setCookie("expiryTime", datetime, expiryTime);
}
function refreshtokenkey() {
    var refreshToken = getCookie("__ohmr__");
    if (refreshToken == "" || refreshToken == "undefined") {
    	window.location.replace("http://account.ohm.vn/login");
    	return;
    }
    var obj = {};
    obj.refreshToken = refreshToken;
    $.ajax({
        url: 'http://user.api.ohm.vn/getAccessToken',
        data: JSON.stringify(obj),
        dataType: 'json',
        type: 'POST',
        async: false,
        success: function (data) {
            var obj = JSON.parse(data);
            if (obj[0].State == 1) {
            	document.cookie ="__ohmr__=" + obj[1].refreshKey + "; domain=.ohm.vn;path=/";
				document.cookie ="__ohmt__=" + obj[1].tokenKey + "; domain=.ohm.vn;path=/";
				window.location.replace("http://chat.ohm.vn");
            } else {
            	window.location.replace("http://account.ohm.vn/login");
            }
        }
    });
}

/*----------------------------------------------------------------------------------------*
 * tabs li danh sach ban be 
 *----------------------------------------------------------------------------------------*/ 
function tabsFriendUser(value){
	var tab_id = $("#"+value.id).attr("data-tabs");
	var id = value.id;
	$("#membersContent ul li.tabs-link").removeClass('current');
	$("#membersContent ul li.tabs-content").removeClass('current');
	
	$("#"+id).addClass('current');
	$("#"+tab_id).addClass('current');
}

/*-----------------------------------------------------------*
 * close channel
 *-----------------------------------------------------------*/ 
function closeChannel(){
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.deviceOnline = navigator.userAgent;
		$.ajax({
			url : "/chatAPI/closeChannel",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				socket.close();
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
		});
	}else{
		refreshtokenkey();
	}
}

/*----------------------------------------------------------------------------------------*
 * kiểm tra tokenkey. nếu tokenkey null thì redirect để login. đồng thời sẽ tạo luôn channel 
 * cho user và thông báo đến  friend là user online
 *----------------------------------------------------------------------------------------*/ 
$(function(){
	var token = getCookie("__ohmt__");
	var ref = getCookie("__ohmr__");
	$("body").append(createHtml());
	createChannel();
});
/*----------------------------------------------------------------------------------------*
 * Tạo channel đồng thời lấy luôn ra list friend.
 * data[0] chứa trạng thái state 
 * data[1] chứa list friend đang online
 * data[2] chứa list friend offline
 * data[3] chứa channel được khởi tạo trong servlet
 * data[4] chứa thông tin user vừa đăng nhập 
 *----------------------------------------------------------------------------------------*/ 
function createChannel(){
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.deviceOnline = navigator.userAgent;
		$.ajax({
			url : "/chatAPI/createChannelAPI",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				if(data[0].State==1){
					channel = new goog.appengine.Channel(data[1].channel);
					socket = channel.open();
					socket.onopen = onOpened;
					socket.onmessage = onMessage;
					socket.onerror = onError;
					socket.onclose = onClose;
					$("#idTo").append(data[2].userId);
					$("#avatarUserTo").append(data[2].avatar);
					$(".img-info").append("<img src='"+data[2].avatar+"' class='img-circle' style='height:35px; width:35px;'>");
					$(".name-info").append(data[2].userName);
					getListFriend();
//					getListUser();
					getListUserForIp();
					getListUserSendStatusAddFriend();
					getListUserSendMessage();
					sendNotifyOn();
					timeout_init();
				}else{
					window.location.replace("http://account.ohm.vn/login");
				}
				
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
	});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * lay danh sach user friend dua vao tokenkey
 * data[0] chứa trạng thái state 
 * data[1] chứa list friend đang online
 * data[2] chứa list friend offline 
 *----------------------------------------------------------------------------------------*/ 
function getListFriend(){
	if(getCookie("__ohmt__")!=""){
		$.ajax({
			url : "/chatAPI/getListUserFriend",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			success : function(data) {
				//tao list user friend
				if (data[0].State == 2) {
					refreshtokenkey();
				} else if (data[0].State == 1) {
					$("#members-list li").remove();
					if(!data[1].length >0 && !data[2].length >0){
						$('#members-list').append("<li class='li-list-content-user0'>"
										+"<span class='list-user-search'>"
										+"<img class = 'image-friend img-circle' src='images/hethong/error.jpg'>"
										+"<span class='username'>Bạn chưa có bạn bè</span>"
										+"</span>"
									+"</li>");
					}else{
						$.each(data[1],function(index,value){
							//tao cac li chua user online
							var imageOnline = checkOnlineDevice(value.DeviceOnline);
							$('#members-list').append("<li class='li-list-content-user on' stateonline='"+value.onlineState+"' type='"+value.friendState+"'>"
									+"<span userName='"+value.fullName+"' class='list-user-search' stateonline='"+value.onlineState+"' type='"+value.friendState+"' data='"+value.userId+"'  id='openBoxChat"+value.userId+"'onclick='createBoxChat(this)'>"
									+"<img class = 'image-friend img-circle' src='"+value.avatar+"'>"
									+"<span class='username'>"+splitStr(value.fullName,13)+"</span>"
								+"</span>"
								+"<img class = 'image-Online' src='images/hethong/"+imageOnline+".png'>"
								+"</li>");
						});
						$.each(data[2],function(index,value){
							//tao cac li chua user offline
							$('#members-list').append("<li class='li-list-content-user off' stateonline='"+value.onlineState+"' type='"+value.friendState+"'>"
									+"<span userName='"+value.fullName+"' class='list-user-search' stateonline='"+value.onlineState+"' type='"+value.friendState+"' data='"+value.userId+"'  id='openBoxChat"+value.userId+"'onclick='createBoxChat(this)'>"
									+"<img class = 'image-friend img-circle' src='"+value.avatar+"'>"
									+"<span class='username'>"+splitStr(value.fullName,13)+"</span>"
								+"</span>"
								+"</li>");
						});
					}
				}
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
	});	
	}else{
		refreshtokenkey();
	}
	
}

/*----------------------------------------------------------------------------------------*
 * lay danh sach user friend dua vao tokenkey
 * data[0] chứa trạng thái state 
 * data[1] chứa list friend đang online
 * data[2] chứa list friend đang offline
 *----------------------------------------------------------------------------------------*/ 
function getListUser(){
	if(getCookie("__ohmt__")!=""){
		$.ajax({
			url : "/chatAPI/listUser",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			success : function(data) {
//				$("#members-list-user li").remove();
				//tao list user friend
				if (data[0].State == 2) {
					refreshtokenkey();
				} else if (data[0].State == 1) {
					$.each(data[1],function(index,value){
						//tao cac li chua user online
						$('#members-list-user').append("<a href='#' class='on' userName='"+value.fullName+"' id='openBoxChat"+value.userId+"' data='"+value.userId+"' type='"+value.friendState+"'  onclick='createBoxChat(this)'>"
								+"<img class = 'image-friend' src='"+value.avatar+"'>"
								+"<span class='username'>"+splitStr(value.fullName,15)+"</span>"
								+"</a>");
					});
					$.each(data[2],function(index,value){
						//tao cac li chua user offline
						$('#members-list-user').append("<a href='#' class='off' userName='"+value.fullName+"' id='openBoxChat"+value.userId+"' data='"+value.userId+"' type='"+value.friendState+"' onclick='createBoxChat(this)'>"
								+"<img class = 'image-friend' src='"+value.avatar+"'>"
								+"<span class='username'>"+splitStr(value.fullName,15)+"</span>"
								+"</a>");
					});
				}
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
	});	
	}else{
		refreshtokenkey();
	}
}
/*----------------------------------------------------------------------------------------*
 * lay danh sach user friend dua vao tokenkey gan di chi ip
 * data[0] chứa trạng thái state 
 * data[1] chứa list friend đang online
 *----------------------------------------------------------------------------------------*/ 
function getListUserForIp(){
	if(getCookie("__ohmt__")!=""){
		$.ajax({
			url : "/chatAPI/getListUserForIp",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			success : function(data) {
				$("#members-list-user-for-ip li").remove();
				$("#tabs-link-user-for-ip span").remove();
				//tao list user friend
				if (data[0].State == 2) {
					refreshtokenkey();
				} else if (data[0].State == 1) {
					$("#tabs-link-user-for-ip span").append("<span id='count-tabs-link-user-for-ip'>"+data[1].length+"</span>");
					if(!data[1].length >0){
						$('#members-list-user-for-ip').append("<li class='li-list-content-user0'>"
										+"<span class='list-user-search'>"
										+"<img class = 'image-friend img-circle' src='images/hethong/error.jpg'>"
										+"<span class='username'>Không có bạn ở gần</span>"
										+"</span>"
									+"</li>");
					}else{
						$.each(data[1],function(index,value){
							//tao cac li chua user online
							$('#members-list-user-for-ip').append("<li class='li-list-content-user"+value.userId+"' stateonline=stateonline'"+value.onlineState+"' type='"+value.friendState+"'>"
									+"<span userName='"+value.fullName+"' class='list-user-search' stateonline='"+value.onlineState+"' type='"+value.friendState+"' data='"+value.userId+"'  id='openBoxChat"+value.userId+"'onclick='createBoxChat(this)'>"
									+"<img class = 'image-friend img-circle' src='"+value.avatar+"'>"
									+"<span class='username'>"+splitStr(value.fullName,10)+"</span>"
								+"</span>"
								+"<span id='text-add-friend"+value.userId+"' class='text-add-friend friendstate"+value.friendState+"' onclick='addFriend(this)' data='"+value.userId+"'  title='Kết bạn' >+</span>"
								+"</li>");
						});
					}
				}
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
	});	
	}else{
		refreshtokenkey();
	}
}
/*----------------------------------------------------------------------------------------*
 * lay danh sach user friend dua vao tokenkey
 * data[0] chứa trạng thái state 
 * data[1] chứa list friend đang online
 * data[2] chứa list friend offline 
 *----------------------------------------------------------------------------------------*/ 
function getListUserSendStatusAddFriend(){
	if(getCookie("__ohmt__")!=""){
		$.ajax({
			url : "/chatAPI/getListUserSendStatusAddFriend",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			success : function(data) {
				//tao list user friend
				if (data[0].State == 2) {
					refreshtokenkey();
				} else if (data[0].State == 1) {
					$('#tabs-link-addfriend span').remove();
					$("#members-list-user-send-add-friend").html("");
//					$("#members-list-user-send-add-friend span#members-list-user-send-add-friend"+id).remove();
					if(data[1].length >0){
						$('#tabs-link-addfriend').append("<span id='count-tabs-link-addfriend'>"+data[1].length+"</span>");
					}
					$.each(data[1],function(index,value){
						//tao cac li chua user online
						$('#members-list-user-send-add-friend').append("<li class='li-list-content-user"+value.userId+"' stateonline='stateonline"+value.onlineState+"' type='"+value.friendState+"'>"
														+"<span userName='"+value.fullName+"' class='list-user-search' stateonline='"+value.onlineState+"' type='"+value.friendState+"' data='"+value.userId+"'  id='openBoxChat"+value.userId+"'onclick='createBoxChat(this)'>"
															+"<img class = 'image-friend img-circle' src='"+value.avatar+"'>"
															+"<span class='username'>"+splitStr(value.fullName,10)+"</span>"
														+"</span>"
														+"<img class='img-float-right' id = 'image-confirm-add"+value.userId+"' src='images/hethong/confirnOk-32.png' userId='"+value.userId+"' onclick='addFriendOk(this)'>"
														+"<img class='img-float-right' id = 'image-confirm-delete"+value.userId+"' src='images/hethong/confirnCancel-32.png' userId='"+value.userId+"' onclick='addFriendCancel(this)'>"
													+"</li>");
					});
				}
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
	});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * gửi notify online đến list friend
 *----------------------------------------------------------------------------------------*/ 
function sendNotifyOn(){
	// gui notifile den ban be
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.status = "notifyOn";
		$.ajax({
			url : "/chatAPI/sendMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * gửi notify cho user add friend
 *----------------------------------------------------------------------------------------*/ 
function sendNotifyAddFriend(userId){
	// gui notifile den ban be
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.status = "notifyAddFriend";
		obj.userId = userId;
		$.ajax({
			url : "/chatAPI/sendMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});	
	}else{
		refreshtokenkey();
	}
}
/*----------------------------------------------------------------------------------------*
 * gửi notify online đến list friend
 *----------------------------------------------------------------------------------------*/ 
function sendNotifyAddFriendOk(userId){
	// gui notifile den ban be
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.status = "notifyAddFriendOk";
		obj.userId = userId;
		$.ajax({
			url : "/chatAPI/sendMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});	
	}else{
		refreshtokenkey();
	}
}
/*----------------------------------------------------------------------------------------*
 * gửi notify offline đến list friend
 *----------------------------------------------------------------------------------------*/
function sendNotifyOff(){
	// gui notifile den ban be
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.status = "notifyOff";
		$.ajax({
			url : "/chatAPI/sendMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * gửi chuoi data string json
 *----------------------------------------------------------------------------------------*/
function sendDataStringJson(str,userTo){
	// gui notifile den ban be
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.status = "sendDataStringJson";
		obj.userId = userTo;
		obj.sendDataStringJson =str;
		$.ajax({
			url : "/chatAPI/sendMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * ket ban
 *----------------------------------------------------------------------------------------*/ 
function addFriend(value){
	// gui yeu cau ket ban
	if(getCookie("__ohmt__")!=""){
		id = value.id;
		userId = $("#"+id).attr("data");
		$('#text-add-friend'+userId).remove();
		var obj = new Object();
		obj.status = 2;
		obj.friendId = userId;
		$.ajax({
			url : "/chatAPI/createAddFriend",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
//				alert("da gui thong bao ket ban");
				$("#boxchat"+userId+" #addFriend"+userId).remove();
				$("#boxchat"+userId+" .tooltip").remove();
				sendNotifyAddFriend(userId);
			},
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * ket ban dong y
 *----------------------------------------------------------------------------------------*/ 
function addFriendOk(value){
	// gui yeu cau ket ban
	if(getCookie("__ohmt__")!=""){
		var id=$("#"+value.id).attr("userId");
		var obj = new Object();
		obj.status = 1;
		obj.friendId = id;
		$.ajax({
			url : "/chatAPI/createAddFriend",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				$('#tabs-link-addfriend span').remove();
				$("#members-list-user-send-add-friend").html("");
				sendNotifyAddFriendOk(id);
				getListFriend();
//				getListUser();
				getListUserForIp();
				getListUserSendStatusAddFriend();
			},
		});	
	}else{
		refreshtokenkey();
	}
}

/*----------------------------------------------------------------------------------------*
 * gui lai status 201 ==> khong dong y ket ban va delete khoi FriendRelationShip
 *----------------------------------------------------------------------------------------*/ 
function addFriendCancel(value){
	if(getCookie("__ohmt__")!=""){
		var id=$("#"+value.id).attr("userId");
		var obj = new Object();
		obj.status = 201;
		obj.friendId = id;
		$.ajax({
			url : "/chatAPI/createAddFriend",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				$('#tabs-link-addfriend span').remove();
				$("#members-list-user-send-add-friend").html("");
				sendNotifyAddFriendOk(id);
				getListFriend();
//				getListUser();
				getListUserForIp();
				getListUserSendStatusAddFriend();
			},
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*----------------------------------------------------------------------------------------*
 * danh sach user gui tin nhan
 *----------------------------------------------------------------------------------------*/ 
function getListUserSendMessage(){
	if(getCookie("__ohmt__")!=""){
		$("#tabs-link-message span").remove();
		$("#content-list-link-message a").remove();
		$.ajax({
			url : "/chatAPI/getListUserHaveMessage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (data[0].State == 2) {
					refreshtokenkey();
				} else if (data[0].State == 1) {
					if(data[1].length >0){
						$("#tabs-link-message").append("<span id = 'count-tabs-link-message'>"+data[1].length+"</span>");
					}
					$.each(data[1],function(index,value){
						//tao cac li chua user online
						$('#content-list-link-message').append("<a href='#' id='openBoxChat"+value.userId+"' userName='"+value.fullName+"' data='"+value.userId+"' stateonline='"+value.onlineState+"'  type='"+value.friendState+"' onclick='createBoxChat(this)'>"
								+"<img class = 'image-friend' src='"+value.avatar+"'>"
								+"<span class='username'>"+value.fullName
									+ "<span id='notify-count-message'> ("+value.message+")</span>"
								+"</span>"
								+"</a>");
					});
				}
			},
			error : function(data, status, er) {
				cookieErorr();
				return;
			}
		});	
	}else{
		refreshtokenkey();
	}
	
}
/*--------------------------------------------------------------------*
 * Bắt sự kiện enter send message. đồng thời append nội dung chat vào 
 * chat box của mình. Và insertContentChat lưu nội dung chat vào csdl
 *--------------------------------------------------------------------*/  
function sendMessage(event,value) {
	if(getCookie("__ohmt__")!=""){
		if (event.keyCode == 13 || event ==13) {
			var state = socket.readyState;
			var avartarUserTo = $("#avatarUserTo").text();
			var id = value.id;
			var stateMessage = $("#"+id).attr("stateonline");
			var obj = new Object();
			if(event==13){
				obj.sendMessage = ReplaceString(value.alt);
				var userId = $("#"+id).attr("data");
				obj.userIdFrom = userId;
				$("#box-emotion-"+userId).hide();
			}else{
				var userId = $('#'+id).attr('name');
				obj.sendMessage =ChatString($('#sendMessage'+userId).val()).trim();
				obj.userIdFrom = userId;
			}
			if(obj.sendMessage!=""){
				if(event==13){
					var str = obj.sendMessage;
					var message = ReplaceString(str);
				}else{
					var str = $('#sendMessage'+userId).val();
					var message = EmoticionString(ChatString(str));
				}
				//sau khi replace thi append
				$("#textBoxMessage"+userId).append("<div class='block-line-chat right'>" 
						+"<div class='avatar-chatbox'>"
							+"<img class='img-circle' src='"+avartarUserTo+"'>"  
						+"</div>"
						+ "<div class = 'linechat left'>"
							+"<div class='linechat-inner'>"+ message+"<p>"+getDateTime()+"</div>" 
						+ "</div>"
				+"</div>");
				$("#boxchat"+userId + " .logMsg").scrollTop(function () { return this.scrollHeight; });
//				insertContentChat(userId, message,stateMessage);
				$('#sendMessage'+userId).val("");
				
				obj.status = "sendMessage";
				if(state==1){
					$.ajax({
						url : "/chatAPI/sendMessage",
						beforeSend : function(request) {
							request.withCredentials = true;
							request.setRequestHeader(
									"E8668OHM",getCookie("__ohmt__"));
						},
						type : "POST",
						dataType : "json",
						data : JSON.stringify(obj),
						success : function(data) {
							insertContentChat(userId, message,stateMessage);
							timeout_clear();
							timeout_init();
						},
					});
				}else{
					refreshtokenkey();
				}
			}
		}
	}else{
		refreshtokenkey();
	}
	
}

/*-----------------------------------------------------------*
 * Tạo chat box khi click vào friend.
 * updateBoxPosition() cập nhật lại vị trí của chatbox
 * getContentChat() lấy nội dung đã chat trong database và insert
 * vào boxchat
 *-----------------------------------------------------------*/ 
function createBoxChat(value){
//	getListUserSendMessage();
	avatar = $("#"+value.id+" img").attr("src");
	userId = $("#"+value.id).attr("data");
	state = $("#"+value.id).attr("stateonline");
	userName = $("#"+value.id).attr("userName");
	type = $("#"+value.id).attr("type");
	textAddFriend = $("#text-add-friend"+userId).length;
//	$("#"+value.id+" span#notify-count-message").html("");
//	$("#tabs-link-message span").remove();
	var a = "";
			if($("#boxchat"+userId).length==0){
				if(type=="1" || type =="2" || textAddFriend == 0){
					var a = "<div class='pusherChatBox' id='boxchat"+userId+"'>"
		            +"<span class='expand' onclick='slideUpOrDown(this)'><span class='close' data-toggle='tooltip' data-placement='top' title='Ẩn cửa sổ'>&#x25BC;</span><span class='open' data-toggle='tooltip' data-placement='top' title='Mở cửa sổ'>&#x25B2;</span></span>"
		            +"<span class='closeBox' id='closeBox"+userId+"' data='"+userId+"' onclick='closeChatBox(this)' data-toggle='tooltip' data-placement='top' title='Đóng cửa sổ'>x</span>"
		            +"<h2><a href='#' title='go to profile'><span class='userName'>"+userName+"</span></a></h2>"
		            +"<div class='slider'>"
		            		+"<div class='logMsg' id='logMsg"+userId+"' name='"+userId+"'>"
		                    	+"<div class='textBoxMessage' id='textBoxMessage"+userId+"' name='textBoxMessage' rows='3' ></div>"
		                    +"</div>"
		                    +"<div class='chat-input-text'>"
		                    +"<div class='button-image'><img id ='"+userId+"' data='"+userId+"' src='/images/hethong/sendimg-icon.png'> <img id ='loadIcon"+userId+"' stateonline='"+state+"'  src = '/images/hethong/emotion-icon.png' data = '"+userId+"' onclick='loadIcon(this)'> </div>"
			                    +"<input placeholder='nhập tin nhắn' type='text' stateonline='"+state+"' name='"+userId+"' id='sendMessage"+userId+"' state ='1'  onkeypress='sendMessage(event,this)' />"
			                    +"<div id='append-box-emotion-"+userId+"' class='append-box-emotion'></div>"
			                +"</div>"
		            +"</div>"   
				}else{
					var a = "<div class='pusherChatBox' id='boxchat"+userId+"'>"
					+"<span class='expand' onclick='slideUpOrDown(this)'><span class='close' data-toggle='tooltip' data-placement='top' title='Ẩn cửa sổ'>&#x25BC;</span><span class='open' data-toggle='tooltip' data-placement='top' title='Mở cửa sổ'>&#x25B2;</span></span>"
		            +"<span class='closeBox' id='closeBox"+userId+"' data='"+userId+"' onclick='closeChatBox(this)' data-toggle='tooltip' data-placement='top' title='Đóng cửa sổ'>x</span>"
		            +"<span class='addFriend' id='addFriend"+userId+"' data='"+userId+"' onclick='addFriend(this)' data-toggle='tooltip' data-placement='top' title='Kết bạn'><img src='images/hethong/icon-addFriend.png'></span>"
		            +"<h2><a href='#' title='go to profile'><span class='userName'>"+userName+"</span></a></h2>"
		            +"<div class='slider'>"
		            		+"<div class='logMsg' id='logMsg"+userId+"' name='"+userId+"'>"
		                    	+"<div class='textBoxMessage' id='textBoxMessage"+userId+"' name='textBoxMessage' rows='3' ></div>"
		                    +"</div>"
		                    +"<div class='chat-input-text'>"
		                    	+"<div class='button-image'><img id ='"+userId+"' src='/images/hethong/sendimg-icon.png'> <img id ='loadIcon"+userId+"' stateonline='"+state+"'  src = '/images/hethong/emotion-icon.png' data = '"+userId+"' onclick='loadIcon(this)'> </div>"
			                    +"<input placeholder='nhập tin nhắn' type='text' stateonline='"+state+"' name='"+userId+"' id='sendMessage"+userId+"' state='2' onkeypress='sendMessage(event,this)' />"
			                    +"<div id='append-box-emotion-"+userId+"' class='append-box-emotion'></div>"
			                +"</div>"
		            +"</div>"   
				}
				         
		    $(".chatBoxslide").append(a);
		    $("#sendMessage"+userId).focus();
			updateBoxPosition();
			getContentChatByPage(userId,1);
			// bat su kien tooltip
			$('[data-toggle="tooltip"]').tooltip();
			}else{
				if($("#boxchat"+userId+":hidden").length>0){
					if($('.chatBoxslide .pusherChatBox:visible').length == 3){
						var id = $('.chatBoxslide .pusherChatBox:visible')[0].id;
						$("#"+id).remove();
						updateBoxPosition();
					}
				}
				$("#boxchat"+userId).show();
				updateBoxPosition();
			}
			//#sendMessage nhan focus
			$("#sendMessage"+userId).focus();
			//su kien scroll
			$("#logMsg"+userId).scroll(function() {
				var id = this.id;
				var plag = false; // danh dau getContentChatByPage() da chay song
				var height = $("#"+id).scrollTop();
				if(chechGetContentChatByPage == true){
					if(height <=1){
						getContentChatByPage(userId,page);
						page++;
					}
				}
			   });
}
var page = 2;
/*-----------------------------------------------------------*
 * Open channel
 *-----------------------------------------------------------*/ 
function onOpened() {
	    //alert("Channel opened !");
}
/*-----------------------------------------------------------*
 * onMessage sảy ra bên friend, khi user gửi message qua channel của friend
 *-----------------------------------------------------------*/ 
function onMessage(msg) {
	var data = JSON.parse(msg.data);
	var status = data[0].status; 
	//nếu chỉ state là gửi tin nhắn bình thường
	if(status=="sendMessage"){
		var userNameTo = data[1].fullName;
		var avatar = data[1].avatar;
		var message = data[2].message;
		var userIdTo = data[1].userId;
		var friendStatus = data[1].friendState;
		var userIdRecent = $("#idTo").text();
		//neu To gui cho From thi append boxchat From voi id la To. Nếu boxchat chưa có thì khởi tạo boxchat và append nội dung chat
		if(userIdTo!=userIdRecent){
			if($("#boxchat"+userIdTo).length==0){
				if(friendStatus=="1"){
					var a = "<div class='pusherChatBox' id='boxchat"+userIdTo+"'>"
					+"<span class='expand' onclick='slideUpOrDown(this)'><span class='close' data-toggle='tooltip' data-placement='top' title='Ẩn cửa sổ'>&#x25BC;</span><span class='open' data-toggle='tooltip' data-placement='top' title='Mở cửa sổ'>&#x25B2;</span></span>"
		            +"<span class='closeBox' id='closeBox"+userIdTo+"' data='"+userIdTo+"' onclick='closeChatBox(this)' data-toggle='tooltip' data-placement='top' title='Đóng cửa sổ'>x</span>"
		            +"<h2><a href='#' title='go to profile'><span class='userName'>"+userNameTo+"</span></a></h2>"
		            +"<div class='slider'>"
		            		+"<div class='logMsg' id='logMsg"+userIdTo+"' name='"+userIdTo+"'>"
		                    	+"<div class='textBoxMessage' id='textBoxMessage"+userIdTo+"' name='textBoxMessage' rows='3' ></div>"
		                    +"</div>"
		                    +"<div class='chat-input-text'>"
		                    	+"<div class='button-image'><img id ='"+userIdTo+"' src='/images/hethong/sendimg-icon.png'> <img id ='loadIcon"+userIdTo+"' data='"+userIdTo+"' state = 'on'  src = '/images/hethong/emotion-icon.png' state='1' onclick='loadIcon(this)'> </div>"
			                    +"<input placeholder='nhập tin nhắn' type='text' stateonline='1' name='"+userIdTo+"' id='sendMessage"+userIdTo+"' class='' onkeypress='sendMessage(event,this)' />"			                    
			                    +"<div id='append-box-emotion-"+userIdTo+"' class='append-box-emotion'></div>"
			                +"</div>"
		            +"</div>"   
				}else{
					var a = "<div class='pusherChatBox' id='boxchat"+userIdTo+"'>"
					+"<span class='expand' onclick='slideUpOrDown(this)'><span class='close' data-toggle='tooltip' data-placement='top' title='Ẩn cửa sổ'>&#x25BC;</span><span class='open' data-toggle='tooltip' data-placement='top' title='Mở cửa sổ'>&#x25B2;</span></span>"
		            +"<span class='closeBox' id='closeBox"+userIdTo+"' data='"+userIdTo+"' onclick='closeChatBox(this)' data-toggle='tooltip' data-placement='top' title='Đóng cửa sổ'>x</span>"
		            +"<span class='addFriend' id='addFriend"+userIdTo+"' data='"+userIdTo+"' onclick='addFriend(this.id)' data-toggle='tooltip' data-placement='top' title='Kết bạn'><img src='images/hethong/icon-addFriend.png' title='Kết bạn'></span>"
		            +"<h2><a href='#' title='go to profile'><span class='userName'>"+userNameTo+"</span></a></h2>"
		            +"<div class='slider'>"
		            		+"<div class='logMsg' id='logMsg"+userIdTo+"' name='"+userIdTo+"'>"
		                    	+"<div class='textBoxMessage' id='textBoxMessage"+userIdTo+"' name='textBoxMessage' rows='3' ></div>"
		                    +"</div>"
		                    +"<div class='chat-input-text'>"
		                    +"<div class='button-image'><img id ='"+userIdTo+"' src='/images/hethong/sendimg-icon.png'> <img id ='loadIcon"+userIdTo+"' data='"+userIdTo+"'  src = '/images/hethong/emotion-icon.png' state='on' onclick='loadIcon(this)'> </div>"
			                    +"<input placeholder='nhập tin nhắn' type='text' stateonline='1' name='"+userIdTo+"' id='sendMessage"+userIdTo+"' class='' onkeypress='sendMessage(event,this)' />"			                    
			                    +"<div id='append-box-emotion-"+userIdTo+"' class='append-box-emotion'></div>"
			                +"</div>"
		            +"</div>"  
				}
				      
				$(".chatBoxslide").append(a);
				updateBoxPosition();
				getContentChatByPage(userIdTo,1);
				// bat su kien tooltip
				$('[data-toggle="tooltip"]').tooltip();
			}else{
				if($("#boxchat"+userIdTo+":hidden").length>0){
					if($('.chatBoxslide .pusherChatBox:visible').length == 3){
						var id = $('.chatBoxslide .pusherChatBox:visible')[0].id;
						$("#"+id).remove();
						updateBoxPosition();
					}
				}
				$("#boxchat"+userIdTo).show();
				updateBoxPosition();
			}
			
		}
		//sau khi replace thi append
		replaceKeyCampaignOTA(message,userIdTo,avatar);
	}
	if(status=="notifyOn"){
		// nếu friend mới đăng nhập thì notify cho list bạn bè biết (mới chỉ alert). đồng thời cập nhật lại bạn bè online, offline.
		var userNameSend = data[1].userName;
		if($("#boxchat"+data[1].userId).length >0){
			$("#boxchat"+data[1].userId+" input#sendMessage"+data[1].userId).removeAttr("stateonline");
			$("#boxchat"+data[1].userId+" input#sendMessage"+data[1].userId).attr("stateonline","201");
		}
		getListFriend();
		getListUserForIp();
	}
	if(status=="notifyOff"){
		// nếu friend mới đăng nhập thì notify cho list bạn bè biết (mới chỉ alert). đồng thời cập nhật lại bạn bè online, offline.
		var userNameSend = data[1].userName;
		if($("#boxchat"+data[1].userId).length >0){
			$("#boxchat"+data[1].userId+" input#sendMessage"+data[1].userId).removeAttr("stateonline");
			$("#boxchat"+data[1].userId+" input#sendMessage"+data[1].userId).attr("stateonline","201");
		}
		getListFriend();
		getListUserForIp();
		getListUserSendStatusAddFriend();
	}if(status=="notifyAddFriend"){
		// thong bao co nguoi addfriend
		var userNameSend = data[1].userName;
		getListUserForIp();
		getListUserSendStatusAddFriend();
	}if(status=="notifyAddFriendOk"){
		// thong bao co nguoi addfriend
		var userNameSend = data[1].userName;
		getListFriend();
		getListUserForIp();
		getListUserSendStatusAddFriend();
	}
	if(status=="sendDataStringJson"){
		alert("sendDataStringJson");
	}
}
/*-----------------------------------------------------------*
 * onErorr xảy ra khi có lỗi kết nối channel
 *-----------------------------------------------------------*/ 
function onError(err) {
}
/*-----------------------------------------------------------*
 * close channel
 *-----------------------------------------------------------*/ 
var aClose =1;
function onClose() {
	if(aClose==1){
		sendNotifyOff();
		closeChannel();
//		alert("ket noi da duoc dong !");
	}
	aClose++;
	return;
}

/*-----------------------------------------------------------*
 * close chatbox
 *-----------------------------------------------------------*/  
function closeChatBox(value){
	id = value.id;
	userId = $("#"+id).attr("data");
	$("#boxchat"+userId).hide();
	updateBoxPosition();
	return false;
};

/*-----------------------------------------------------------*
 * slide up or down
 *-----------------------------------------------------------*/  
function slideUpOrDown(value){
	var obj = $(value);
	obj.parent().find('.scroll,.slider').slideToggle('1', function() {
        if ($(this).is(':visible')){
            obj.find('.close').show();
            obj.find('.open').hide();
        }else {
            obj.find('.close').hide();
            obj.find('.open').show();
        }
    });    
    return false;
};
/*-----------------------------------------------------------*
 * slide up or down
 *-----------------------------------------------------------*/  
function slideUpOrDownFriendBox(value){
	var parent = $(value).parent();
	var id = parent.attr("class");
	if($("li."+id).find(".close:visible").length > 0){
		$("li."+id).nextAll().addClass("displayBoxFriend");
		$("li."+id).find(".close").hide();
		$("li."+id).find(".open").show();
	}else{
		$("li."+id).nextAll().removeClass("displayBoxFriend");
		$("li."+id).find(".close").show();
		$("li."+id).find(".open").hide();
	}
    return false;
};
/*-----------------------------------------------------------*
 * update position chatbox
 *-----------------------------------------------------------*/  
function updateBoxPosition(){
    var right=0;
    $('.chatBoxslide .pusherChatBox:visible').each(function(){
        $(this).css({
            'right':right
        });

        right += $(this).width()+20;

        $('.chatBoxslide').css({
            'width':right
        });

        if ($(this).offset().left- 20<0){
        	var idClass = $('.chatBoxslide .pusherChatBox:visible')[0].id;
        	$("#"+idClass).hide();
        	updateBoxPositionOverFlow();
        }
        else
        	$(this).show();


    });          
}

/*-----------------------------------------------------------*
 * update position when addClass overFlow
 *-----------------------------------------------------------*/  
function updateBoxPositionOverFlow(){
    var right=0;
    $('.chatBoxslide .pusherChatBox:visible').each(function(){
        $(this).css({
            'right':right
        });

        right += $(this).width()+20;

        $('.chatBoxslide').css({
            'width':right
        });
    });          
}

/*----------------------------------------------------------------------------------------*
 * luu noi dung chat vao database
 *----------------------------------------------------------------------------------------*/ 
function insertContentChat(userId2, chatContent, stateMessage){
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
		obj.chatContent = chatContent;
		obj.userIdFriend = userId2;
		obj.stateMessage = stateMessage;
		$.ajax({
			url : "/chatAPI/insertContentChat",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//alert(data);
			},
		});
	}else{
		refreshtokenkey();
	}
}

/*----------------------------------------------------------------------------------------*
 * lấy nội dung chat trong database
 *----------------------------------------------------------------------------------------*/ 
function getContentChat(value,userId2){
	if(getCookie("__ohmt__")!=""){
		avartarUserTo = $("#avatarUserTo").text();
		var userId1 = $("#idTo").text();
		var obj = new Object();
		obj.userIdFriend = userId2;
		obj.time = $("#"+value.id).attr("value");
		$.ajax({
			url : "/chatAPI/getChatContent",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				//xoa bo cac div chat de append lai
				$("#textBoxMessage"+userId2+" div.block-line-chat").remove();
				$.each(data[1], function(index, value){
					if(userId1 == value.to){
						$("#textBoxMessage"+userId2).append("<div class='block-line-chat right'>" 
																	+"<div class='avatar-chatbox'>"
																		+"<img class='img-circle' src='"+avartarUserTo+"'>"  
																	+"</div>"
																	+ "<div class = 'linechat left'>"
//																		+"<div class='linechat-arrow'></div>"
																		+"<div class='linechat-inner'>"+ value.content+"<p>"+ getHoursTime(value.date)+"</div>"
																	+ "</div>"
															+"</div>");
					}else{
						avatar = $("#boxchat"+value.to+" img").attr("src");
						$("#textBoxMessage"+userId2).append("<div class='block-line-chat left'>" 
																	+"<div class='avatar-chatbox'>"
																		+"<img class='img-circle' src='"+avatar+"'>"  
																	+"</div>"
																	+"<div class='linechat right'>"
//																		+"<div class='linechat-arrow'></div>"
																		+"<div class='linechat-inner'>"+ value.content+"<p>"+ getHoursTime(value.date)+" </div>"
																	+ "</div>"
															  +"</div>");
					}
				})
				$("#boxchat"+userId2 + " .logMsg").scrollTop(function () { return this.scrollHeight; });
			},
		});
	}else{
		refreshtokenkey();
	}
	
}

/*----------------------------------------------------------------------------------------*
 * lấy nội dung chat trong database PHAN TRANG
 *----------------------------------------------------------------------------------------*/ 
chechGetContentChatByPage = true;
function getContentChatByPage(userId2,page){
	chechGetContentChatByPage = true;
	if(getCookie("__ohmt__")!=""){
		avartarUserTo = $("#avatarUserTo").text();
		var userId1 = $("#idTo").text();
		var obj = new Object();
		obj.userIdFrom = userId2;
		obj.page = page;
		$.ajax({
			url : "/chatAPI/getListChatContentByPage",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				if (data[0].State == 2) {
					refreshtokenkey();
				}else{
					var old_height = $("#boxchat"+userId2 + " .logMsg")[0].scrollHeight;
					var datetime = getDayTime(new Date());
					$.each(data[1], function(index, value){
						if(datetime != getDayTime(value.date)){
							$("#textBoxMessage"+userId2).prepend("<div class='time-line-chat'>"+datetime+"<div>");
							datetime = getDayTime(value.date);
						}
						if(value.date){
							
						}
						if(userId1 == value.to){
							$("#textBoxMessage"+userId2).prepend("<div class='block-line-chat right'>" 
																		+"<div class='avatar-chatbox'>"
																			+"<img class='img-circle' src='"+avartarUserTo+"'>"  
																		+"</div>"
																		+ "<div class = 'linechat left'>"
//																			+"<div class='linechat-arrow'></div>"
																			+"<div class='linechat-inner'>"+ value.content+"<p>"+ getHoursTime(value.date)+" </div>"
																		+ "</div>"
																+"</div>");
						}else{
							avatar = $("#openBoxChat"+value.to+" img").attr("src");
							$("#textBoxMessage"+userId2).prepend("<div class='block-line-chat left'>" 
																		+"<div class='avatar-chatbox'>"
																			+"<img class='img-circle' src='"+avatar+"'>"  
																		+"</div>"
																		+"<div class='linechat right'>"
//																			+"<div class='linechat-arrow'></div>"
																			+"<div class='linechat-inner'>"+ value.content+"<p>"+ getHoursTime(value.date)+" </div>"
																		+ "</div>"
																  +"</div>");
						}
					});
					if(page==1){
						$("#boxchat"+userId2 + " .logMsg").scrollTop(function () { return this.scrollHeight; });
					}else{
						var height = $("#boxchat"+userId2 + " .logMsg")[0].scrollHeight;
						$("#boxchat"+userId2 + " .logMsg").scrollTop(height-old_height);
					}
					if(data[1].length < 20){
						chechGetContentChatByPage = false;
					}
				}
//				check xem tin nhan co hay khong, neu co thi goi lai getListUserSendMessage de hien thi lai tin nhan
				if(page==1){
					if($("#tabs-link-message span").length >0){
						getListUserSendMessage();
					}
				}
			}
		});
	}else{
		refreshtokenkey();
	}
	
}

/*----------------------------------------------------------------------------------------*
 * search user
 *----------------------------------------------------------------------------------------*/
pageSearchUser = 2;
checkPageSearchUser = true;
function btClickSearchUser(value){
	var strSearch = $("#text-search-friend").val();
	var valueSearch = ChatString(strSearch).trim();
	if(valueSearch !=""){
		var tab_id = $("#"+value.id).attr("data-tabs");
		var id = value.id;
		$("#loading-search-friend").append(createHtmlLoading());
		document.getElementById('text-search-friend').disabled = true;
		$("#membersContent ul li.tabs-link").removeClass('current');
		$("#membersContent ul li.tabs-content").removeClass('current');
		$("#content-list-link-search-friend").empty();
		$("#"+id).addClass('current');
		$("#"+tab_id).addClass('current');
		searchUser(valueSearch,1);
		checkPageSearchUser = true;
		$("#content-link-search-friend .scroll").scroll(function() {
			var scrollHeight = $("#content-link-search-friend .scroll").scrollTop();
			var height = $("#content-list-link-search-friend").height();
			if(checkPageSearchUser == true){
				if((height  - scrollHeight) < 230){
					searchUser(valueSearch,pageSearchUser);
					pageSearchUser++;
				}
			}
		   });
	}
}
function onkeypressEnterSearchUser(event,value){
	if(event.which == 13 || event.keyCode == 13){
		btClickSearchUser(value);
	}
}
function searchUser(value,page){
//	var tab_id = $("#"+value.id).attr("data-tabs");
//	var id = value.id;
//	$("#membersContent ul li.tabs-link").removeClass('current');
//	$("#membersContent ul li.tabs-content").removeClass('current');
//	
//	$("#"+id).addClass('current');
//	$("#"+tab_id).addClass('current');
	if(getCookie("__ohmt__")!=""){
		var obj = new Object();
//		obj.searchValue = $("#text-search-friend").val();
		obj.searchValue = value;
		obj.page = page;
		$.ajax({
			url : "/chatAPI/getListUserForSearchFullTextByPage",
//			url : "/chatAPI/getListUserForSearch",
			beforeSend : function(request) {
				request.withCredentials = true;
				request.setRequestHeader(
						"E8668OHM",getCookie("__ohmt__"));
			},
			type : "POST",
			dataType : "json",
			data : JSON.stringify(obj),
			success : function(data) {
				if(data[0].State==1){
//					$("#content-list-link-search-friend").empty();
					if(data[1].length < 21){
						checkPageSearchUser = false;
					}
					var userIdRecent = $("#idTo").text();
					$.each(data[1],function(index,value){
						if(value.userId != userIdRecent ){
							$("#content-list-link-search-friend").append("<li class='li-list-content-user"+value.userId+"' stateonline=' stateonline"+value.onlineState+"'>"
									+"<span userName='"+value.fullName+"' class='list-user-search' type='"+value.friendState+"' data='"+value.userId+"'  id='openBoxChat"+value.userId+"'onclick='createBoxChat(this)'>"
										+"<img class = 'image-friend img-circle' src='"+value.avatar+"'>"
										+"<span class='username'>"+splitStr(value.fullName,10)+"</span>"
									+"</span>"
									+"<span id='text-add-friend"+value.userId+"' class='text-add-friend friendstate"+value.friendState+"' onclick='addFriend(this)' data='"+value.userId+"'  title='Kết bạn' >+</span>"
									+"</li>");
						}
					})
				}else{
//					$("#content-list-link-search-friend").html("");
					$("#content-list-link-search-friend").append("<li class='li-list-content-user0'>"
										+"<span class='list-user-search'>"
										+"<img class = 'image-friend img-circle' src='images/hethong/error.jpg'>"
										+"<span class='username'>Không tìm thấy</span>"
										+"</span>"
									+"</li>");
				}
				document.getElementById('text-search-friend').disabled = false;
				$("#loading-search-friend").empty()
			},
		});
	}else{
		refreshtokenkey();
	}
	
}
function logout(){
	document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	document.cookie = "r=; expires=Thu, 01 Jan 1970 00:00:00 UT;";
	window.location.replace("http://account.ohm.vn/login");
	if (getCookie("__ohmt__") == "")
		return;
	$.ajax({
				url : 'http://user.api.ohm.vn/logout',
				beforeSend : function(request) {
					request.withCredentials = true;
					request.setRequestHeader("E8668OHM",
							getCookie("__ohmt__"));
				},
				data : "",
				dataType : 'json',
				type : 'POST',
				success : function(data) {
					if (data.State == 2)
						return;
					document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=.ohm.vn;path=/";
					document.cookie = "r=; expires=Thu, 01 Jan 1970 00:00:00 UT; domain=.ohm.vn;path=/";
					window.location.replace("http://account.ohm.vn/login");
				},
				
			});
}


/*----------------------------------------------------------------------------------------*
 * get Keyword and campaign OTA
 *----------------------------------------------------------------------------------------*/

var countContentTextChat = 1;
function displayCampaign(value){
	var id = value.id;
	var data = $("#"+id).attr("data");
	$("#link-campaign-ota"+data).addClass("display-link-campaign-ota");
}
function hideCampaign(value){
	var id = value.id;
	var data = $("#"+id).attr("data");
	$("#link-campaign-ota"+data).removeClass("display-link-campaign-ota");
}

//tesst
function replaceKeyCampaignOTA(value,userId,avatar){
var urlOhm = "http://ads.ohm.vn/";
var text = value;
var res="";
var replaceStrKeywordOTA = "";
  $.ajax({
  url : urlOhm+"keyword?text="+text,
  dataType: 'jsonp',
  contentType: "application/json",
  jsonpCallback: 'jsonCallbackOhm',
  async : false,
  success : function(result) {
	  replaceStrKeywordOTA = "<div class='content-text-chat'> "+EmoticionString(text) + " </div>";
	  $.each(result.keyword,function(value,index){
			var link ="";
			for(i=0; i<= index.length-1;i++){
				if(i<2){
					link +="<a href='"+index[i].url+"' ota='"+index[i].ota+"' campaign='"+index[i].name+"' target='_blank' onclick = 'disableLinkClick(this)' id='getHoursTime()"+index[i].url+"' class='getHoursTime()"+index[i].url+"'>"+splitStr(index[i].name,15)
					+"<span class='dtohm'><img src='images/hethong/dtohm.png' title='ohm'></span>"
					+"<span class='plus-pay-ota'>+"+index[i].ota+"</span>"
					+"</a><br>";
				}
			}
			url = "<span class='replace-string-campaign' id='replace-string-campaign"+countContentTextChat+"' data='"+countContentTextChat+"' onmouseover='displayCampaign(this)' onmouseout='hideCampaign(this)' >"
						+"<span style='color:red;padding:0px 3px;display:inline-block;'>"+value+"</span>"
						+"<span class='link-campaign-ota' id='link-campaign-ota"+countContentTextChat+"'>"+link+"</span>"
				 +"</span>";
			replaceStrKeywordOTA = replaceStrKeywordOTA.replace(" "+value+" ",url);
			countContentTextChat++;
	  });  
	  appendTextReplaceKeyword(replaceStrKeywordOTA,userId,avatar)
  }
})
}
function appendTextReplaceKeyword(message,userId,avatar){
	$("#textBoxMessage"+userId).append("<div class='block-line-chat left'>" 
			+"<div class='avatar-chatbox'>"
				+"<img class='img-circle' src='"+avatar+"'>"  
			+"</div>"
			+ "<div class = 'linechat right'>"
//				+"<div class='linechat-arrow'></div>"
				+"<div class='linechat-inner'>"+message+"<p>"+getDateTime()+"</div>" 
			+ "</div>"
	+"</div>");
	$("#boxchat"+userId + " .logMsg").scrollTop(function () { return this.scrollHeight; });
}
function disableLinkClick(value){
	$("."+value.id).addClass("clicked");
}