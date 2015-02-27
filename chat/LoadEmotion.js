function loadIcon(value){
	var idd = value.id;
	var id =$("#"+idd).attr("data");
	var state = $("#"+idd).attr("stateonline");
	var tabsCount = database.length/16;
	if(tabsCount%1 >0){
		tabsCount = tabsCount + 1;
	};
	/* kiem tra neu box-emotion khong co thi append
	 * ul chua cac li tabs link
	 *div box-emotion chua cac div chua emotion */
	 
	if($("#box-emotion-"+id).length==false){
		$("#append-box-emotion-"+id).append("<div class='box-emotion' id='box-emotion-"+id+"' >"
									+ "<ul class='tabs-emotion' id='tabs-emotion-"+id+"'>"
									+"</ul>"
									+"</div>");
		/* append cac tabs link li vao ul
		 * append cac div content emotion vao div box-emotion
		 * append 16 img emotion vao div tabs-emotion-content */
		for(i = 1; i<=tabsCount; i++){
			if(i==1){
				$("#tabs-emotion-"+id).append("<li class='tabs-link current' data-tab='tabs-emotion-content-"+i+"' onclick='tabEmotionClick(this)'>"+i+"</li>")
				$("#box-emotion-"+id).append("<div id='tabs-emotion-content-"+i+"' class='tabs-emotion-content current'></div>");
				$.each(database, function(y,value){
					if(y <= i*15){
						$("#box-emotion-"+id+" #tabs-emotion-content-"+i).append("<img src='images/icon/"+value.value+"' id='emotion"+id+"' data='"+id+"' value='"+value.value+"' alt='"+value.key+"' stateonline='"+state+"' onclick='sendMessage(13,this)'>");
					}
				});
			}else{
				$("#tabs-emotion-"+id).append("<li class='tabs-link' data-tab='tabs-emotion-content-"+i+"' onclick='tabEmotionClick(this)'>"+i+"</li>")
				$("#box-emotion-"+id).append("<div id='tabs-emotion-content-"+i+"' class='tabs-emotion-content'></div>");
				$.each(database, function(y,value){
					if((i-1)*15 < y&& y <= i*15){
						$("#box-emotion-"+id+" #tabs-emotion-content-"+i).append("<img src='images/icon/"+value.value+"' id='emotion"+id+"' data='"+id+"' value='"+value.value+"' alt='"+value.key+"' stateonline='"+state+"' onclick='sendMessage(13,this)'>");
					}
				});
			}
		};
	}else{
		if($("#box-emotion-"+id).is(':visible')){
			$("#box-emotion-"+id).hide();
		}else{
			$("#box-emotion-"+id).show();
		}
		
	}
}
function tabEmotionClick(value){
	var tab_id = $(value).attr('data-tab');

		$('ul.tabs-emotion li').removeClass('current');
		$('.tabs-emotion-content').removeClass('current');

		$(value).addClass('current');
		$("#"+tab_id).addClass('current');
}
