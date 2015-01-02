/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */
 chrome.storage.sync.get({
   		OHMdisable: 'no',
    	OHMfavoriteColor: '#F20D0D',
	    OHMtokenKey: '',
	    OHMrefreshKey: '',
	    OHMexpiryTime: '',
	    OHMusername: '',
	    OHMname: ''
  }, function(items) { 
	    if( items.OHMdisable =='yes' ){ 
			chrome.browserAction.setBadgeText({text: "off"});
			chrome.browserAction.setBadgeBackgroundColor({ color: '#cccccc' });
		}
		else
		{
			chrome.browserAction.setBadgeText({text: "on"});
			chrome.browserAction.setBadgeBackgroundColor({ color: '#1FD002' });
		} 
  });

 
// wiki
// var wikihistory=[],wikicache={},currentHistoryPosition=0,currentLangState=0;
// function handleLink(a){var b,d=getCurrentLang();b="http://"+d+".m.wikipedia.org"+a;for(var c=0;c<currentHistoryPosition;c++)wikicache[wikihistory[0]]&&delete wikicache[wikihistory[0]],wikihistory.length>0&&wikihistory.shift();if(wikihistory.length>10){wikihistory=wikihistory.slice(0,10);var e={};for(c in wikihistory){var f=wikihistory[c].url;e[f]=wikicache[f]}wikicache=e}wikihistory.unshift({url:b,lang:d,title:a.replace("/wiki/","")});currentHistoryPosition=0;localStorage.setItem("refresh","true")}
// function addContextMenu(){localStorage.enableContextMenu!="false"&&chrome.contextMenus.create({title:"Tìm trên Wikipedia cho '%s'",contexts:["selection"],onclick:function(a){if(a.selectionText){var b=chrome.extension.getViews({type:"popup"});b.length>0?(b[0].document.getElementById("searchbox").value=a.selectionText,b[0].doSearch()):(a="http://"+(localStorage.current_language||"en")+".wikipedia.org/wiki/"+encodeURIComponent(a.selectionText),chrome.tabs.create({url:a}))}}})}
// function init(){pageWidth=parseInt(localStorage.pageWidth);if(!pageWidth||pageWidth<=0)localStorage.pageWidth=480;addContextMenu()}function toggleLang(){currentLangState=currentLangState==0?1:0}function checkLang(){return{state:currentLangState,primaryLang:localStorage.current_language,secondaryLang:localStorage.secondary_language}}
// function getCurrentLang(){return currentLangState==0&&localStorage.current_language?localStorage.current_language:currentLangState==1&&localStorage.secondary_language?localStorage.secondary_language:"en"}init();
