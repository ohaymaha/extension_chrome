/**
 * 
 */
function createHtml(){
	var a= "<div id='pusherChat'>"
			    +"<div id='membersContent'>"                
			    +"<ul class='tabs'>"
			    	+"<li class='tabs-link-control'>"
			    		+"<span id='expand' onclick='slideUpOrDownFriendBox(this)'><span class='close'>&#x25BC;</span><span class='open'>&#x25B2;</span></span>"
			    		+"<span class = 'tabs-link current' id='tabs-link-friend' data-tabs='tabs-list-friend' onclick='tabsFriendUser(this)'>Bạn bè</span>"
			    		+"<span class = 'tabs-link' id='tabs-link-message' data-tabs='content-link-message' onclick='tabsFriendUser(this)' data-toggle='tooltip' data-placement='top' title='Tin nhắn'>"
			        		+"<img id='messages-icon' src='images/hethong/Messages-icon.png'>"
			    		+"</span>"
			    		+"<span class = 'tabs-link' id='tabs-link-addfriend' data-tabs='tabs-list-user-send-add-friend' onclick='tabsFriendUser(this)' data-toggle='tooltip' data-placement='top' title='Kết bạn'>"
			    			+"<img id='icon-addFriend' src='images/hethong/icon-addFriend.png'>"
			    		+"</span>"
			    		+"<span class = 'tabs-link' id='tabs-link-user-for-ip' data-tabs='tabs-list-user-for-ip' onclick='tabsFriendUser(this)' data-toggle='tooltip' data-placement='top' title='Bạn bè gần'>"
			    			+"<img id='icon-addFriend' src='images/hethong/addGroup-icon.png'>"
			    		+"</span>"
			    		+"<span style='display: none;' id='idTo'></span>"
			    		+"<span style='display: none;' id='avatarUserTo'></span>"
			    	+"</li>"
			    	+"<li id='tabs-list-friend' class='tabs-content current'>"
			    		+"<div  class = 'scroll'>"
			    			+"<ul id='members-list'></ul>"
			    		+"</div>"
			    	+"</li>"

			    	+"<li id='tabs-list-user-for-ip' class='tabs-content'>"
			    		+"<div  class = 'scroll'>"
			    			+"<ul id='members-list-user-for-ip'></ul>"
			    		+"</div>"
			    	+"</li>"
			    	
			    	+"<li id='tabs-list-user-send-add-friend' class='tabs-content'>"
			    		+"<div  class = 'scroll'>"
			    			+"<ul id='members-list-user-send-add-friend'></ul>"
			    		+"</div>"
			    	+"</li>"
			    	
			    	+"<li id='content-link-message' class='tabs-content'>"
			    		+"<div  class = 'scroll'>"
			    			+"<div id='content-list-link-message'></div>"
			    		+"</div>"
			    	+"</li>"
			    	
			    	+"<li id='li-text-search-friend'>"
			    		+"<div id='loading-search-friend'></div>"
			    		+"<input data-tabs='content-link-search-friend' id='text-search-friend' type='text' placeholder='Tìm kiếm bạn bè' onkeypress='onkeypressEnterSearchUser(event,this)'>"
			    		+"<img alt='tim-kiem' src='images/hethong/search-friend-button.png' onclick='btClickSearchUser(this)' class = 'tabs-link' id='tabs-link-search-friend' data-tabs='content-link-search-friend'>"
			    	+"</li>"
			    	+"<li id='content-link-search-friend' class='tabs-content'>"
			    		+"<div  class = 'scroll'>"
			    			+"<ul id='content-list-link-search-friend'></ul>"
			    		+"</div>"
			    	+"</li>"
			    +"</ul>"
			+"</div>"
			+"<div class='chatBoxWrap'>"
			    +"<div class='chatBoxslide'></div>"
			+"</div>"
			+"</div>";
//	$("#text-search-friend").onEnter( function() {
//		btClickSearchUser(value);                
//    });
	return a;
}