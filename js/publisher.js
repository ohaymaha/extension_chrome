(function(a1,aF){var ah,w,aB=typeof aF,l=a1.document,aK=a1.location,bh=a1.jQuery,Z={},a5=[],s="1.9.1",aH=a5.concat,an=a5.push,a3=a5.slice,aL=a5.indexOf,z=Z.toString,U=Z.hasOwnProperty,aP=s.trim,bI=function(e,b2){return new bI.fn.init(e,b2,w)
},bz=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ab=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bq=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bg=/^[\],:{}\s]*$/,bj=/(?:^|:|,)(?:\s*\[)+/g,bF=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,aY=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,bR=/^-ms-/,aU=/-([\da-z])/gi,L=function(e,b2){return b2.toUpperCase()
},bV=function(e){if(l.addEventListener||e.type==="load"||l.readyState==="complete"){bk();bI.ready()}},bk=function(){if(l.addEventListener){l.removeEventListener("DOMContentLoaded",bV,false);a1.removeEventListener("load",bV,false)
}else{l.detachEvent("onreadystatechange",bV);a1.detachEvent("onload",bV)}};bI.fn=bI.prototype={jquery:s,constructor:bI,init:function(e,b4,b3){var b2,b5;if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b2=[null,e,null]
}else{b2=bq.exec(e)}if(b2&&(b2[1]||!b4)){if(b2[1]){b4=b4 instanceof bI?b4[0]:b4;bI.merge(this,bI.parseHTML(b2[1],b4&&b4.nodeType?b4.ownerDocument||b4:l,true));if(a.test(b2[1])&&bI.isPlainObject(b4)){for(b2 in b4){if(bI.isFunction(this[b2])){this[b2](b4[b2])
}else{this.attr(b2,b4[b2])}}}return this}else{b5=l.getElementById(b2[2]);if(b5&&b5.parentNode){if(b5.id!==b2[2]){return b3.find(e)}this.length=1;this[0]=b5}this.context=l;this.selector=e;return this}}else{if(!b4||b4.jquery){return(b4||b3).find(e)
}else{return this.constructor(b4).find(e)}}}else{if(e.nodeType){this.context=this[0]=e;this.length=1;return this}else{if(bI.isFunction(e)){return b3.ready(e)}}}if(e.selector!==aF){this.selector=e.selector;
this.context=e.context}return bI.makeArray(e,this)},selector:"",length:0,size:function(){return this.length},toArray:function(){return a3.call(this)},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(e){var b2=bI.merge(this.constructor(),e);b2.prevObject=this;b2.context=this.context;return b2},each:function(b2,e){return bI.each(this,b2,e)},ready:function(e){bI.ready.promise().done(e);
return this},slice:function(){return this.pushStack(a3.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(b3){var e=this.length,b2=+b3+(b3<0?e:0);
return this.pushStack(b2>=0&&b2<e?[this[b2]]:[])},map:function(e){return this.pushStack(bI.map(this,function(b3,b2){return e.call(b3,b2,b3)}))},end:function(){return this.prevObject||this.constructor(null)
},push:an,sort:[].sort,splice:[].splice};bI.fn.init.prototype=bI.fn;bI.extend=bI.fn.extend=function(){var e,b7,b2,b3,ca,b8,b6=arguments[0]||{},b5=1,b4=arguments.length,b9=false;if(typeof b6==="boolean"){b9=b6;
b6=arguments[1]||{};b5=2}if(typeof b6!=="object"&&!bI.isFunction(b6)){b6={}}if(b4===b5){b6=this;--b5}for(;b5<b4;b5++){if((ca=arguments[b5])!=null){for(b3 in ca){e=b6[b3];b2=ca[b3];if(b6===b2){continue}if(b9&&b2&&(bI.isPlainObject(b2)||(b7=bI.isArray(b2)))){if(b7){b7=false;
b8=e&&bI.isArray(e)?e:[]}else{b8=e&&bI.isPlainObject(e)?e:{}}b6[b3]=bI.extend(b9,b8,b2)}else{if(b2!==aF){b6[b3]=b2}}}}}return b6};bI.extend({noConflict:function(e){if(e&&a1.jQuery===bI){a1.jQuery=bh}return bI
},isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++}else{bI.ready(true)}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return}if(!l.body){return setTimeout(bI.ready)}bI.isReady=true;
if(e!==true&&--bI.readyWait>0){return}ah.resolveWith(l,[bI]);if(bI.fn.trigger){bI(l).trigger("ready").off("ready")}},isFunction:function(e){return bI.type(e)==="function"},isArray:Array.isArray||function(e){return bI.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?Z[z.call(e)]||"object":typeof e
},isPlainObject:function(b4){if(!b4||bI.type(b4)!=="object"||b4.nodeType||bI.isWindow(b4)){return false}try{if(b4.constructor&&!U.call(b4,"constructor")&&!U.call(b4.constructor.prototype,"isPrototypeOf")){return false
}}catch(b3){return false}var b2;for(b2 in b4){}return b2===aF||U.call(b4,b2)},isEmptyObject:function(b2){var e;for(e in b2){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(b5,b3,b4){if(!b5||typeof b5!=="string"){return null
}if(typeof b3==="boolean"){b4=b3;b3=false}b3=b3||l;var b2=a.exec(b5),e=!b4&&[];if(b2){return[b3.createElement(b2[1])]}b2=bI.buildFragment([b5],b3,e);if(e){bI(e).remove()}return bI.merge([],b2.childNodes)
},parseJSON:function(e){if(a1.JSON&&a1.JSON.parse){return a1.JSON.parse(e)}if(e===null){return e}if(typeof e==="string"){e=bI.trim(e);if(e){if(bg.test(e.replace(bF,"@").replace(aY,"]").replace(bj,""))){return(new Function("return "+e))()
}}}bI.error("Invalid JSON: "+e)},parseXML:function(b4){var b2,b3;if(!b4||typeof b4!=="string"){return null}try{if(a1.DOMParser){b3=new DOMParser();b2=b3.parseFromString(b4,"text/xml")}else{b2=new ActiveXObject("Microsoft.XMLDOM");
b2.async="false";b2.loadXML(b4)}}catch(b5){b2=aF}if(!b2||!b2.documentElement||b2.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b4)}return b2},noop:function(){},globalEval:function(e){if(e&&bI.trim(e)){(a1.execScript||function(b2){a1["eval"].call(a1,b2)
})(e)}},camelCase:function(e){return e.replace(bR,"ms-").replace(aU,L)},nodeName:function(b2,e){return b2.nodeName&&b2.nodeName.toLowerCase()===e.toLowerCase()},each:function(b6,b7,b2){var b5,b3=0,b4=b6.length,e=aa(b6);
if(b2){if(e){for(;b3<b4;b3++){b5=b7.apply(b6[b3],b2);if(b5===false){break}}}else{for(b3 in b6){b5=b7.apply(b6[b3],b2);if(b5===false){break}}}}else{if(e){for(;b3<b4;b3++){b5=b7.call(b6[b3],b3,b6[b3]);if(b5===false){break
}}}else{for(b3 in b6){b5=b7.call(b6[b3],b3,b6[b3]);if(b5===false){break}}}}return b6},trim:aP&&!aP.call("\uFEFF\xA0")?function(e){return e==null?"":aP.call(e)}:function(e){return e==null?"":(e+"").replace(C,"")
},makeArray:function(e,b3){var b2=b3||[];if(e!=null){if(aa(Object(e))){bI.merge(b2,typeof e==="string"?[e]:e)}else{an.call(b2,e)}}return b2},inArray:function(b4,b2,b3){var e;if(b2){if(aL){return aL.call(b2,b4,b3)
}e=b2.length;b3=b3?b3<0?Math.max(0,e+b3):b3:0;for(;b3<e;b3++){if(b3 in b2&&b2[b3]===b4){return b3}}}return -1},merge:function(b5,b3){var e=b3.length,b4=b5.length,b2=0;if(typeof e==="number"){for(;b2<e;
b2++){b5[b4++]=b3[b2]}}else{while(b3[b2]!==aF){b5[b4++]=b3[b2++]}}b5.length=b4;return b5},grep:function(b2,b7,e){var b6,b3=[],b4=0,b5=b2.length;e=!!e;for(;b4<b5;b4++){b6=!!b7(b2[b4],b4);if(e!==b6){b3.push(b2[b4])
}}return b3},map:function(b3,b8,e){var b7,b5=0,b6=b3.length,b2=aa(b3),b4=[];if(b2){for(;b5<b6;b5++){b7=b8(b3[b5],b5,e);if(b7!=null){b4[b4.length]=b7}}}else{for(b5 in b3){b7=b8(b3[b5],b5,e);if(b7!=null){b4[b4.length]=b7
}}}return aH.apply([],b4)},guid:1,proxy:function(b5,b4){var e,b3,b2;if(typeof b4==="string"){b2=b5[b4];b4=b5;b5=b2}if(!bI.isFunction(b5)){return aF}e=a3.call(arguments,2);b3=function(){return b5.apply(b4||this,e.concat(a3.call(arguments)))
};b3.guid=b5.guid=b5.guid||bI.guid++;return b3},access:function(e,b6,b8,b7,b4,ca,b9){var b3=0,b2=e.length,b5=b8==null;if(bI.type(b8)==="object"){b4=true;for(b3 in b8){bI.access(e,b6,b3,b8[b3],true,ca,b9)
}}else{if(b7!==aF){b4=true;if(!bI.isFunction(b7)){b9=true}if(b5){if(b9){b6.call(e,b7);b6=null}else{b5=b6;b6=function(cc,cb,cd){return b5.call(bI(cc),cd)}}}if(b6){for(;b3<b2;b3++){b6(e[b3],b8,b9?b7:b7.call(e[b3],b3,b6(e[b3],b8)))
}}}}return b4?e:b5?b6.call(e):b2?b6(e[0],b8):ca},now:function(){return(new Date()).getTime()}});bI.ready.promise=function(b5){if(!ah){ah=bI.Deferred();if(l.readyState==="complete"){setTimeout(bI.ready)
}else{if(l.addEventListener){l.addEventListener("DOMContentLoaded",bV,false);a1.addEventListener("load",bV,false)}else{l.attachEvent("onreadystatechange",bV);a1.attachEvent("onload",bV);var b4=false;try{b4=a1.frameElement==null&&l.documentElement
}catch(b3){}if(b4&&b4.doScroll){(function b2(){if(!bI.isReady){try{b4.doScroll("left")}catch(b6){return setTimeout(b2,50)}bk();bI.ready()}})()}}}}return ah.promise(b5)};bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b2,e){Z["[object "+e+"]"]=e.toLowerCase()
});function aa(b3){var b2=b3.length,e=bI.type(b3);if(bI.isWindow(b3)){return false}if(b3.nodeType===1&&b2){return true}return e==="array"||e!=="function"&&(b2===0||typeof b2==="number"&&b2>0&&(b2-1) in b3)
}w=bI(l);var bX={};function ad(b2){var e=bX[b2]={};bI.each(b2.match(ab)||[],function(b4,b3){e[b3]=true});return e}bI.Callbacks=function(cb){cb=typeof cb==="string"?(bX[cb]||ad(cb)):bI.extend({},cb);var b5,b4,e,b6,b7,b3,b8=[],b9=!cb.once&&[],b2=function(cc){b4=cb.memory&&cc;
e=true;b7=b3||0;b3=0;b6=b8.length;b5=true;for(;b8&&b7<b6;b7++){if(b8[b7].apply(cc[0],cc[1])===false&&cb.stopOnFalse){b4=false;break}}b5=false;if(b8){if(b9){if(b9.length){b2(b9.shift())}}else{if(b4){b8=[]
}else{ca.disable()}}}},ca={add:function(){if(b8){var cd=b8.length;(function cc(ce){bI.each(ce,function(cg,cf){var ch=bI.type(cf);if(ch==="function"){if(!cb.unique||!ca.has(cf)){b8.push(cf)}}else{if(cf&&cf.length&&ch!=="string"){cc(cf)
}}})})(arguments);if(b5){b6=b8.length}else{if(b4){b3=cd;b2(b4)}}}return this},remove:function(){if(b8){bI.each(arguments,function(ce,cc){var cd;while((cd=bI.inArray(cc,b8,cd))>-1){b8.splice(cd,1);if(b5){if(cd<=b6){b6--
}if(cd<=b7){b7--}}}})}return this},has:function(cc){return cc?bI.inArray(cc,b8)>-1:!!(b8&&b8.length)},empty:function(){b8=[];return this},disable:function(){b8=b9=b4=aF;return this},disabled:function(){return !b8
},lock:function(){b9=aF;if(!b4){ca.disable()}return this},locked:function(){return !b9},fireWith:function(cd,cc){cc=cc||[];cc=[cd,cc.slice?cc.slice():cc];if(b8&&(!e||b9)){if(b5){b9.push(cc)}else{b2(cc)
}}return this},fire:function(){ca.fireWith(this,arguments);return this},fired:function(){return !!e}};return ca};bI.extend({Deferred:function(b3){var b2=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b4="pending",b5={state:function(){return b4
},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var b6=arguments;return bI.Deferred(function(b7){bI.each(b2,function(b9,b8){var cb=b8[0],ca=bI.isFunction(b6[b9])&&b6[b9];
e[b8[1]](function(){var cc=ca&&ca.apply(this,arguments);if(cc&&bI.isFunction(cc.promise)){cc.promise().done(b7.resolve).fail(b7.reject).progress(b7.notify)}else{b7[cb+"With"](this===b5?b7.promise():this,ca?[cc]:arguments)
}})});b6=null}).promise()},promise:function(b6){return b6!=null?bI.extend(b6,b5):b5}},e={};b5.pipe=b5.then;bI.each(b2,function(b7,b6){var b9=b6[2],b8=b6[3];b5[b6[1]]=b9.add;if(b8){b9.add(function(){b4=b8
},b2[b7^1][2].disable,b2[2][2].lock)}e[b6[0]]=function(){e[b6[0]+"With"](this===e?b5:this,arguments);return this};e[b6[0]+"With"]=b9.fireWith});b5.promise(e);if(b3){b3.call(e,e)}return e},when:function(b5){var b3=0,b7=a3.call(arguments),e=b7.length,b2=e!==1||(b5&&bI.isFunction(b5.promise))?e:0,ca=b2===1?b5:bI.Deferred(),b4=function(cc,cd,cb){return function(ce){cd[cc]=this;
cb[cc]=arguments.length>1?a3.call(arguments):ce;if(cb===b9){ca.notifyWith(cd,cb)}else{if(!(--b2)){ca.resolveWith(cd,cb)}}}},b9,b6,b8;if(e>1){b9=new Array(e);b6=new Array(e);b8=new Array(e);for(;b3<e;b3++){if(b7[b3]&&bI.isFunction(b7[b3].promise)){b7[b3].promise().done(b4(b3,b8,b7)).fail(ca.reject).progress(b4(b3,b6,b9))
}else{--b2}}}if(!b2){ca.resolveWith(b8,b7)}return ca.promise()}});bI.support=(function(){var cd,cc,ca,b9,cb,b8,b4,b6,b3,b5,b2=l.createElement("div");b2.setAttribute("className","t");b2.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cc=b2.getElementsByTagName("*");ca=b2.getElementsByTagName("a")[0];if(!cc||!ca||!cc.length){return{}}cb=l.createElement("select");b4=cb.appendChild(l.createElement("option"));b9=b2.getElementsByTagName("input")[0];
ca.style.cssText="top:1px;float:left;opacity:.5";cd={getSetAttribute:b2.className!=="t",leadingWhitespace:b2.firstChild.nodeType===3,tbody:!b2.getElementsByTagName("tbody").length,htmlSerialize:!!b2.getElementsByTagName("link").length,style:/top/.test(ca.getAttribute("style")),hrefNormalized:ca.getAttribute("href")==="/a",opacity:/^0.5/.test(ca.style.opacity),cssFloat:!!ca.style.cssFloat,checkOn:!!b9.value,optSelected:b4.selected,enctype:!!l.createElement("form").enctype,html5Clone:l.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:l.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b9.checked=true;cd.noCloneChecked=b9.cloneNode(true).checked;cb.disabled=true;cd.optDisabled=!b4.disabled;try{delete b2.test}catch(b7){cd.deleteExpando=false}b9=l.createElement("input");b9.setAttribute("value","");
cd.input=b9.getAttribute("value")==="";b9.value="t";b9.setAttribute("type","radio");cd.radioValue=b9.value==="t";b9.setAttribute("checked","t");b9.setAttribute("name","t");b8=l.createDocumentFragment();
b8.appendChild(b9);cd.appendChecked=b9.checked;cd.checkClone=b8.cloneNode(true).cloneNode(true).lastChild.checked;if(b2.attachEvent){b2.attachEvent("onclick",function(){cd.noCloneEvent=false});b2.cloneNode(true).click()
}for(b5 in {submit:true,change:true,focusin:true}){b2.setAttribute(b6="on"+b5,"t");cd[b5+"Bubbles"]=b6 in a1||b2.attributes[b6].expando===false}b2.style.backgroundClip="content-box";b2.cloneNode(true).style.backgroundClip="";
cd.clearCloneStyle=b2.style.backgroundClip==="content-box";bI(function(){var ce,ch,cg,cf="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",e=l.getElementsByTagName("body")[0];
if(!e){return}ce=l.createElement("div");ce.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";e.appendChild(ce).appendChild(b2);b2.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cg=b2.getElementsByTagName("td");cg[0].style.cssText="padding:0;margin:0;border:0;display:none";b3=(cg[0].offsetHeight===0);cg[0].style.display="";cg[1].style.display="none";cd.reliableHiddenOffsets=b3&&(cg[0].offsetHeight===0);
b2.innerHTML="";b2.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cd.boxSizing=(b2.offsetWidth===4);cd.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);if(a1.getComputedStyle){cd.pixelPosition=(a1.getComputedStyle(b2,null)||{}).top!=="1%";cd.boxSizingReliable=(a1.getComputedStyle(b2,null)||{width:"4px"}).width==="4px";
ch=b2.appendChild(l.createElement("div"));ch.style.cssText=b2.style.cssText=cf;ch.style.marginRight=ch.style.width="0";b2.style.width="1px";cd.reliableMarginRight=!parseFloat((a1.getComputedStyle(ch,null)||{}).marginRight)
}if(typeof b2.style.zoom!==aB){b2.innerHTML="";b2.style.cssText=cf+"width:1px;padding:1px;display:inline;zoom:1";cd.inlineBlockNeedsLayout=(b2.offsetWidth===3);b2.style.display="block";b2.innerHTML="<div></div>";
b2.firstChild.style.width="5px";cd.shrinkWrapBlocks=(b2.offsetWidth!==3);if(cd.inlineBlockNeedsLayout){e.style.zoom=1}}e.removeChild(ce);ce=b2=cg=ch=null});cc=cb=b8=b4=ca=b9=null;return cd})();var bv=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aM=/([A-Z])/g;
function a9(b4,b2,b6,b5){if(!bI.acceptData(b4)){return}var b7,b9,ca=bI.expando,b8=typeof b2==="string",cb=b4.nodeType,e=cb?bI.cache:b4,b3=cb?b4[ca]:b4[ca]&&ca;if((!b3||!e[b3]||(!b5&&!e[b3].data))&&b8&&b6===aF){return
}if(!b3){if(cb){b4[ca]=b3=a5.pop()||bI.guid++}else{b3=ca}}if(!e[b3]){e[b3]={};if(!cb){e[b3].toJSON=bI.noop}}if(typeof b2==="object"||typeof b2==="function"){if(b5){e[b3]=bI.extend(e[b3],b2)}else{e[b3].data=bI.extend(e[b3].data,b2)
}}b7=e[b3];if(!b5){if(!b7.data){b7.data={}}b7=b7.data}if(b6!==aF){b7[bI.camelCase(b2)]=b6}if(b8){b9=b7[b2];if(b9==null){b9=b7[bI.camelCase(b2)]}}else{b9=b7}return b9}function Y(b4,b2,b5){if(!bI.acceptData(b4)){return
}var b7,b6,b8,b9=b4.nodeType,e=b9?bI.cache:b4,b3=b9?b4[bI.expando]:bI.expando;if(!e[b3]){return}if(b2){b8=b5?e[b3]:e[b3].data;if(b8){if(!bI.isArray(b2)){if(b2 in b8){b2=[b2]}else{b2=bI.camelCase(b2);if(b2 in b8){b2=[b2]
}else{b2=b2.split(" ")}}}else{b2=b2.concat(bI.map(b2,bI.camelCase))}for(b7=0,b6=b2.length;b7<b6;b7++){delete b8[b2[b7]]}if(!(b5?M:bI.isEmptyObject)(b8)){return}}}if(!b5){delete e[b3].data;if(!M(e[b3])){return
}}if(b9){bI.cleanData([b4],true)}else{if(bI.support.deleteExpando||e!=e.window){delete e[b3]}else{e[b3]=null}}}bI.extend({cache:{},expando:"jQuery"+(s+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];
return !!e&&!M(e)},data:function(b2,e,b3){return a9(b2,e,b3)},removeData:function(b2,e){return Y(b2,e)},_data:function(b2,e,b3){return a9(b2,e,b3,true)},_removeData:function(b2,e){return Y(b2,e,true)},acceptData:function(b2){if(b2.nodeType&&b2.nodeType!==1&&b2.nodeType!==9){return false
}var e=b2.nodeName&&bI.noData[b2.nodeName.toLowerCase()];return !e||e!==true&&b2.getAttribute("classid")===e}});bI.fn.extend({data:function(b4,b7){var b2,e,b5=this[0],b3=0,b6=null;if(b4===aF){if(this.length){b6=bI.data(b5);
if(b5.nodeType===1&&!bI._data(b5,"parsedAttrs")){b2=b5.attributes;for(;b3<b2.length;b3++){e=b2[b3].name;if(!e.indexOf("data-")){e=bI.camelCase(e.slice(5));bx(b5,e,b6[e])}}bI._data(b5,"parsedAttrs",true)
}}return b6}if(typeof b4==="object"){return this.each(function(){bI.data(this,b4)})}return bI.access(this,function(b8){if(b8===aF){return b5?bx(b5,b4,bI.data(b5,b4)):null}this.each(function(){bI.data(this,b4,b8)
})},null,b7,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){bI.removeData(this,e)})}});function bx(b4,b3,b5){if(b5===aF&&b4.nodeType===1){var b2="data-"+b3.replace(aM,"-$1").toLowerCase();
b5=b4.getAttribute(b2);if(typeof b5==="string"){try{b5=b5==="true"?true:b5==="false"?false:b5==="null"?null:+b5+""===b5?+b5:bv.test(b5)?bI.parseJSON(b5):b5}catch(b6){}bI.data(b4,b3,b5)}else{b5=aF}}return b5
}function M(b2){var e;for(e in b2){if(e==="data"&&bI.isEmptyObject(b2[e])){continue}if(e!=="toJSON"){return false}}return true}bI.extend({queue:function(b3,b2,b4){var e;if(b3){b2=(b2||"fx")+"queue";e=bI._data(b3,b2);
if(b4){if(!e||bI.isArray(b4)){e=bI._data(b3,b2,bI.makeArray(b4))}else{e.push(b4)}}return e||[]}},dequeue:function(b6,b5){b5=b5||"fx";var b2=bI.queue(b6,b5),b7=b2.length,b4=b2.shift(),e=bI._queueHooks(b6,b5),b3=function(){bI.dequeue(b6,b5)
};if(b4==="inprogress"){b4=b2.shift();b7--}e.cur=b4;if(b4){if(b5==="fx"){b2.unshift("inprogress")}delete e.stop;b4.call(b6,b3,e)}if(!b7&&e){e.empty.fire()}},_queueHooks:function(b3,b2){var e=b2+"queueHooks";
return bI._data(b3,e)||bI._data(b3,e,{empty:bI.Callbacks("once memory").add(function(){bI._removeData(b3,b2+"queue");bI._removeData(b3,e)})})}});bI.fn.extend({queue:function(e,b2){var b3=2;if(typeof e!=="string"){b2=e;
e="fx";b3--}if(arguments.length<b3){return bI.queue(this[0],e)}return b2===aF?this:this.each(function(){var b4=bI.queue(this,e,b2);bI._queueHooks(this,e);if(e==="fx"&&b4[0]!=="inprogress"){bI.dequeue(this,e)
}})},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)})},delay:function(b2,e){b2=bI.fx?bI.fx.speeds[b2]||b2:b2;e=e||"fx";return this.queue(e,function(b4,b3){var b5=setTimeout(b4,b2);b3.stop=function(){clearTimeout(b5)
}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(b3,b7){var b2,b4=1,b8=bI.Deferred(),b6=this,e=this.length,b5=function(){if(!(--b4)){b8.resolveWith(b6,[b6])}};if(typeof b3!=="string"){b7=b3;
b3=aF}b3=b3||"fx";while(e--){b2=bI._data(b6[e],b3+"queueHooks");if(b2&&b2.empty){b4++;b2.empty.add(b5)}}b5();return b8.promise(b7)}});var a7,bY,bL=/[\t\r\n]/g,aj=/\r/g,aE=/^(?:input|select|textarea|button|object)$/i,D=/^(?:a|area)$/i,K=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,ap=/^(?:checked|selected)$/i,bO=bI.support.getSetAttribute,bE=bI.support.input;
bI.fn.extend({attr:function(e,b2){return bI.access(this,bI.attr,e,b2,arguments.length>1)},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)})},prop:function(e,b2){return bI.access(this,bI.prop,e,b2,arguments.length>1)
},removeProp:function(e){e=bI.propFix[e]||e;return this.each(function(){try{this[e]=aF;delete this[e]}catch(b2){}})},addClass:function(b8){var b2,e,b9,b5,b3,b4=0,b6=this.length,b7=typeof b8==="string"&&b8;
if(bI.isFunction(b8)){return this.each(function(ca){bI(this).addClass(b8.call(this,ca,this.className))})}if(b7){b2=(b8||"").match(ab)||[];for(;b4<b6;b4++){e=this[b4];b9=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):" ");
if(b9){b3=0;while((b5=b2[b3++])){if(b9.indexOf(" "+b5+" ")<0){b9+=b5+" "}}e.className=bI.trim(b9)}}}return this},removeClass:function(b8){var b2,e,b9,b5,b3,b4=0,b6=this.length,b7=arguments.length===0||typeof b8==="string"&&b8;
if(bI.isFunction(b8)){return this.each(function(ca){bI(this).removeClass(b8.call(this,ca,this.className))})}if(b7){b2=(b8||"").match(ab)||[];for(;b4<b6;b4++){e=this[b4];b9=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):"");
if(b9){b3=0;while((b5=b2[b3++])){while(b9.indexOf(" "+b5+" ")>=0){b9=b9.replace(" "+b5+" "," ")}}e.className=b8?bI.trim(b9):""}}}return this},toggleClass:function(b4,b2){var b3=typeof b4,e=typeof b2==="boolean";
if(bI.isFunction(b4)){return this.each(function(b5){bI(this).toggleClass(b4.call(this,b5,this.className,b2),b2)})}return this.each(function(){if(b3==="string"){var b7,b6=0,b5=bI(this),b8=b2,b9=b4.match(ab)||[];
while((b7=b9[b6++])){b8=e?b8:!b5.hasClass(b7);b5[b8?"addClass":"removeClass"](b7)}}else{if(b3===aB||b3==="boolean"){if(this.className){bI._data(this,"__className__",this.className)}this.className=this.className||b4===false?"":bI._data(this,"__className__")||""
}}})},hasClass:function(e){var b4=" "+e+" ",b3=0,b2=this.length;for(;b3<b2;b3++){if(this[b3].nodeType===1&&(" "+this[b3].className+" ").replace(bL," ").indexOf(b4)>=0){return true}}return false},val:function(b4){var b2,e,b5,b3=this[0];
if(!arguments.length){if(b3){e=bI.valHooks[b3.type]||bI.valHooks[b3.nodeName.toLowerCase()];if(e&&"get" in e&&(b2=e.get(b3,"value"))!==aF){return b2}b2=b3.value;return typeof b2==="string"?b2.replace(aj,""):b2==null?"":b2
}return}b5=bI.isFunction(b4);return this.each(function(b7){var b8,b6=bI(this);if(this.nodeType!==1){return}if(b5){b8=b4.call(this,b7,b6.val())}else{b8=b4}if(b8==null){b8=""}else{if(typeof b8==="number"){b8+=""
}else{if(bI.isArray(b8)){b8=bI.map(b8,function(b9){return b9==null?"":b9+""})}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];if(!e||!("set" in e)||e.set(this,b8,"value")===aF){this.value=b8
}})}});bI.extend({valHooks:{option:{get:function(e){var b2=e.attributes.value;return !b2||b2.specified?e.value:e.text}},select:{get:function(e){var b7,b3,b9=e.options,b5=e.selectedIndex,b4=e.type==="select-one"||b5<0,b8=b4?null:[],b6=b4?b5+1:b9.length,b2=b5<0?b6:b4?b5:0;
for(;b2<b6;b2++){b3=b9[b2];if((b3.selected||b2===b5)&&(bI.support.optDisabled?!b3.disabled:b3.getAttribute("disabled")===null)&&(!b3.parentNode.disabled||!bI.nodeName(b3.parentNode,"optgroup"))){b7=bI(b3).val();
if(b4){return b7}b8.push(b7)}}return b8},set:function(b2,b3){var e=bI.makeArray(b3);bI(b2).find("option").each(function(){this.selected=bI.inArray(bI(this).val(),e)>=0});if(!e.length){b2.selectedIndex=-1
}return e}}},attr:function(b6,b4,b7){var e,b5,b3,b2=b6.nodeType;if(!b6||b2===3||b2===8||b2===2){return}if(typeof b6.getAttribute===aB){return bI.prop(b6,b4,b7)}b5=b2!==1||!bI.isXMLDoc(b6);if(b5){b4=b4.toLowerCase();
e=bI.attrHooks[b4]||(K.test(b4)?bY:a7)}if(b7!==aF){if(b7===null){bI.removeAttr(b6,b4)}else{if(e&&b5&&"set" in e&&(b3=e.set(b6,b7,b4))!==aF){return b3}else{b6.setAttribute(b4,b7+"");return b7}}}else{if(e&&b5&&"get" in e&&(b3=e.get(b6,b4))!==null){return b3
}else{if(typeof b6.getAttribute!==aB){b3=b6.getAttribute(b4)}return b3==null?aF:b3}}},removeAttr:function(b3,b5){var e,b4,b2=0,b6=b5&&b5.match(ab);if(b6&&b3.nodeType===1){while((e=b6[b2++])){b4=bI.propFix[e]||e;
if(K.test(e)){if(!bO&&ap.test(e)){b3[bI.camelCase("default-"+e)]=b3[b4]=false}else{b3[b4]=false}}else{bI.attr(b3,e,"")}b3.removeAttribute(bO?e:b4)}}},attrHooks:{type:{set:function(e,b2){if(!bI.support.radioValue&&b2==="radio"&&bI.nodeName(e,"input")){var b3=e.value;
e.setAttribute("type",b2);if(b3){e.value=b3}return b2}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b6,b4,b7){var b3,e,b5,b2=b6.nodeType;
if(!b6||b2===3||b2===8||b2===2){return}b5=b2!==1||!bI.isXMLDoc(b6);if(b5){b4=bI.propFix[b4]||b4;e=bI.propHooks[b4]}if(b7!==aF){if(e&&"set" in e&&(b3=e.set(b6,b7,b4))!==aF){return b3}else{return(b6[b4]=b7)
}}else{if(e&&"get" in e&&(b3=e.get(b6,b4))!==null){return b3}else{return b6[b4]}}},propHooks:{tabIndex:{get:function(b2){var e=b2.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):aE.test(b2.nodeName)||D.test(b2.nodeName)&&b2.href?0:aF
}}}});bY={get:function(b4,b2){var b5=bI.prop(b4,b2),e=typeof b5==="boolean"&&b4.getAttribute(b2),b3=typeof b5==="boolean"?bE&&bO?e!=null:ap.test(b2)?b4[bI.camelCase("default-"+b2)]:!!e:b4.getAttributeNode(b2);
return b3&&b3.value!==false?b2.toLowerCase():aF},set:function(b2,b3,e){if(b3===false){bI.removeAttr(b2,e)}else{if(bE&&bO||!ap.test(e)){b2.setAttribute(!bO&&bI.propFix[e]||e,e)}else{b2[bI.camelCase("default-"+e)]=b2[e]=true
}}return e}};if(!bE||!bO){bI.attrHooks.value={get:function(b3,b2){var e=b3.getAttributeNode(b2);return bI.nodeName(b3,"input")?b3.defaultValue:e&&e.specified?e.value:aF},set:function(b2,b3,e){if(bI.nodeName(b2,"input")){b2.defaultValue=b3
}else{return a7&&a7.set(b2,b3,e)}}}}if(!bO){a7=bI.valHooks.button={get:function(b3,b2){var e=b3.getAttributeNode(b2);return e&&(b2==="id"||b2==="name"||b2==="coords"?e.value!=="":e.specified)?e.value:aF
},set:function(b3,b4,b2){var e=b3.getAttributeNode(b2);if(!e){b3.setAttributeNode((e=b3.ownerDocument.createAttribute(b2)))}e.value=b4+="";return b2==="value"||b4===b3.getAttribute(b2)?b4:aF}};bI.attrHooks.contenteditable={get:a7.get,set:function(b2,b3,e){a7.set(b2,b3===""?false:b3,e)
}};bI.each(["width","height"],function(b2,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{set:function(b3,b4){if(b4===""){b3.setAttribute(e,"auto");return b4}}})})}if(!bI.support.hrefNormalized){bI.each(["href","src","width","height"],function(b2,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{get:function(b4){var b3=b4.getAttribute(e,2);
return b3==null?aF:b3}})});bI.each(["href","src"],function(b2,e){bI.propHooks[e]={get:function(b3){return b3.getAttribute(e,4)}}})}if(!bI.support.style){bI.attrHooks.style={get:function(e){return e.style.cssText||aF
},set:function(e,b2){return(e.style.cssText=b2+"")}}}if(!bI.support.optSelected){bI.propHooks.selected=bI.extend(bI.propHooks.selected,{get:function(b2){var e=b2.parentNode;if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex
}}return null}})}if(!bI.support.enctype){bI.propFix.enctype="encoding"}if(!bI.support.checkOn){bI.each(["radio","checkbox"],function(){bI.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}})}bI.each(["radio","checkbox"],function(){bI.valHooks[this]=bI.extend(bI.valHooks[this],{set:function(e,b2){if(bI.isArray(b2)){return(e.checked=bI.inArray(bI(e).val(),b2)>=0)}}})});var bG=/^(?:input|select|textarea)$/i,a2=/^key/,bM=/^(?:mouse|contextmenu)|click/,bA=/^(?:focusinfocus|focusoutblur)$/,bt=/^([^.]*)(?:\.(.+)|)$/;
function Q(){return true}function W(){return false}bI.event={global:{},add:function(b5,ca,cf,b7,b6){var b8,cg,ch,b3,cc,b9,ce,b4,cd,e,b2,cb=bI._data(b5);if(!cb){return}if(cf.handler){b3=cf;cf=b3.handler;
b6=b3.selector}if(!cf.guid){cf.guid=bI.guid++}if(!(cg=cb.events)){cg=cb.events={}}if(!(b9=cb.handle)){b9=cb.handle=function(ci){return typeof bI!==aB&&(!ci||bI.event.triggered!==ci.type)?bI.event.dispatch.apply(b9.elem,arguments):aF
};b9.elem=b5}ca=(ca||"").match(ab)||[""];ch=ca.length;while(ch--){b8=bt.exec(ca[ch])||[];cd=b2=b8[1];e=(b8[2]||"").split(".").sort();cc=bI.event.special[cd]||{};cd=(b6?cc.delegateType:cc.bindType)||cd;
cc=bI.event.special[cd]||{};ce=bI.extend({type:cd,origType:b2,data:b7,handler:cf,guid:cf.guid,selector:b6,needsContext:b6&&bI.expr.match.needsContext.test(b6),namespace:e.join(".")},b3);if(!(b4=cg[cd])){b4=cg[cd]=[];
b4.delegateCount=0;if(!cc.setup||cc.setup.call(b5,b7,e,b9)===false){if(b5.addEventListener){b5.addEventListener(cd,b9,false)}else{if(b5.attachEvent){b5.attachEvent("on"+cd,b9)}}}}if(cc.add){cc.add.call(b5,ce);
if(!ce.handler.guid){ce.handler.guid=cf.guid}}if(b6){b4.splice(b4.delegateCount++,0,ce)}else{b4.push(ce)}bI.event.global[cd]=true}b5=null},remove:function(b4,ca,ch,b5,b9){var b7,ce,b8,b6,cg,cf,cc,b3,cd,e,b2,cb=bI.hasData(b4)&&bI._data(b4);
if(!cb||!(cf=cb.events)){return}ca=(ca||"").match(ab)||[""];cg=ca.length;while(cg--){b8=bt.exec(ca[cg])||[];cd=b2=b8[1];e=(b8[2]||"").split(".").sort();if(!cd){for(cd in cf){bI.event.remove(b4,cd+ca[cg],ch,b5,true)
}continue}cc=bI.event.special[cd]||{};cd=(b5?cc.delegateType:cc.bindType)||cd;b3=cf[cd]||[];b8=b8[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");b6=b7=b3.length;while(b7--){ce=b3[b7];if((b9||b2===ce.origType)&&(!ch||ch.guid===ce.guid)&&(!b8||b8.test(ce.namespace))&&(!b5||b5===ce.selector||b5==="**"&&ce.selector)){b3.splice(b7,1);
if(ce.selector){b3.delegateCount--}if(cc.remove){cc.remove.call(b4,ce)}}}if(b6&&!b3.length){if(!cc.teardown||cc.teardown.call(b4,e,cb.handle)===false){bI.removeEvent(b4,cd,cb.handle)}delete cf[cd]}}if(bI.isEmptyObject(cf)){delete cb.handle;
bI._removeData(b4,"events")}},trigger:function(b2,b9,b5,cg){var ca,b4,ce,cf,cc,b8,b7,b6=[b5||l],cd=U.call(b2,"type")?b2.type:b2,b3=U.call(b2,"namespace")?b2.namespace.split("."):[];ce=b8=b5=b5||l;if(b5.nodeType===3||b5.nodeType===8){return
}if(bA.test(cd+bI.event.triggered)){return}if(cd.indexOf(".")>=0){b3=cd.split(".");cd=b3.shift();b3.sort()}b4=cd.indexOf(":")<0&&"on"+cd;b2=b2[bI.expando]?b2:new bI.Event(cd,typeof b2==="object"&&b2);b2.isTrigger=true;
b2.namespace=b3.join(".");b2.namespace_re=b2.namespace?new RegExp("(^|\\.)"+b3.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;b2.result=aF;if(!b2.target){b2.target=b5}b9=b9==null?[b2]:bI.makeArray(b9,[b2]);cc=bI.event.special[cd]||{};
if(!cg&&cc.trigger&&cc.trigger.apply(b5,b9)===false){return}if(!cg&&!cc.noBubble&&!bI.isWindow(b5)){cf=cc.delegateType||cd;if(!bA.test(cf+cd)){ce=ce.parentNode}for(;ce;ce=ce.parentNode){b6.push(ce);b8=ce
}if(b8===(b5.ownerDocument||l)){b6.push(b8.defaultView||b8.parentWindow||a1)}}b7=0;while((ce=b6[b7++])&&!b2.isPropagationStopped()){b2.type=b7>1?cf:cc.bindType||cd;ca=(bI._data(ce,"events")||{})[b2.type]&&bI._data(ce,"handle");
if(ca){ca.apply(ce,b9)}ca=b4&&ce[b4];if(ca&&bI.acceptData(ce)&&ca.apply&&ca.apply(ce,b9)===false){b2.preventDefault()}}b2.type=cd;if(!cg&&!b2.isDefaultPrevented()){if((!cc._default||cc._default.apply(b5.ownerDocument,b9)===false)&&!(cd==="click"&&bI.nodeName(b5,"a"))&&bI.acceptData(b5)){if(b4&&b5[cd]&&!bI.isWindow(b5)){b8=b5[b4];
if(b8){b5[b4]=null}bI.event.triggered=cd;try{b5[cd]()}catch(cb){}bI.event.triggered=aF;if(b8){b5[b4]=b8}}}}return b2.result},dispatch:function(e){e=bI.event.fix(e);var b5,b6,ca,b2,b4,b9=[],b8=a3.call(arguments),b3=(bI._data(this,"events")||{})[e.type]||[],b7=bI.event.special[e.type]||{};
b8[0]=e;e.delegateTarget=this;if(b7.preDispatch&&b7.preDispatch.call(this,e)===false){return}b9=bI.event.handlers.call(this,e,b3);b5=0;while((b2=b9[b5++])&&!e.isPropagationStopped()){e.currentTarget=b2.elem;
b4=0;while((ca=b2.handlers[b4++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(ca.namespace)){e.handleObj=ca;e.data=ca.data;b6=((bI.event.special[ca.origType]||{}).handle||ca.handler).apply(b2.elem,b8);
if(b6!==aF){if((e.result=b6)===false){e.preventDefault();e.stopPropagation()}}}}}if(b7.postDispatch){b7.postDispatch.call(this,e)}return e.result},handlers:function(e,b3){var b2,b8,b6,b5,b7=[],b4=b3.delegateCount,b9=e.target;
if(b4&&b9.nodeType&&(!e.button||e.type!=="click")){for(;b9!=this;b9=b9.parentNode||this){if(b9.nodeType===1&&(b9.disabled!==true||e.type!=="click")){b6=[];for(b5=0;b5<b4;b5++){b8=b3[b5];b2=b8.selector+" ";
if(b6[b2]===aF){b6[b2]=b8.needsContext?bI(b2,this).index(b9)>=0:bI.find(b2,this,null,[b9]).length}if(b6[b2]){b6.push(b8)}}if(b6.length){b7.push({elem:b9,handlers:b6})}}}}if(b4<b3.length){b7.push({elem:this,handlers:b3.slice(b4)})
}return b7},fix:function(b4){if(b4[bI.expando]){return b4}var b2,b7,b6,b3=b4.type,e=b4,b5=this.fixHooks[b3];if(!b5){this.fixHooks[b3]=b5=bM.test(b3)?this.mouseHooks:a2.test(b3)?this.keyHooks:{}}b6=b5.props?this.props.concat(b5.props):this.props;
b4=new bI.Event(e);b2=b6.length;while(b2--){b7=b6[b2];b4[b7]=e[b7]}if(!b4.target){b4.target=e.srcElement||l}if(b4.target.nodeType===3){b4.target=b4.target.parentNode}b4.metaKey=!!b4.metaKey;return b5.filter?b5.filter(b4,e):b4
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b2,e){if(b2.which==null){b2.which=e.charCode!=null?e.charCode:e.keyCode
}return b2}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b4,b3){var e,b5,b6,b2=b3.button,b7=b3.fromElement;
if(b4.pageX==null&&b3.clientX!=null){b5=b4.target.ownerDocument||l;b6=b5.documentElement;e=b5.body;b4.pageX=b3.clientX+(b6&&b6.scrollLeft||e&&e.scrollLeft||0)-(b6&&b6.clientLeft||e&&e.clientLeft||0);b4.pageY=b3.clientY+(b6&&b6.scrollTop||e&&e.scrollTop||0)-(b6&&b6.clientTop||e&&e.clientTop||0)
}if(!b4.relatedTarget&&b7){b4.relatedTarget=b7===b4.target?b3.toElement:b7}if(!b4.which&&b2!==aF){b4.which=(b2&1?1:(b2&2?3:(b2&4?2:0)))}return b4}},special:{load:{noBubble:true},click:{trigger:function(){if(bI.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false}}},focus:{trigger:function(){if(this!==l.activeElement&&this.focus){try{this.focus();return false}catch(b2){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===l.activeElement&&this.blur){this.blur();
return false}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==aF){e.originalEvent.returnValue=e.result}}}},simulate:function(b3,b5,b4,b2){var b6=bI.extend(new bI.Event(),b4,{type:b3,isSimulated:true,originalEvent:{}});
if(b2){bI.event.trigger(b6,null,b5)}else{bI.event.dispatch.call(b5,b6)}if(b6.isDefaultPrevented()){b4.preventDefault()}}};bI.removeEvent=l.removeEventListener?function(b2,e,b3){if(b2.removeEventListener){b2.removeEventListener(e,b3,false)
}}:function(b3,b2,b4){var e="on"+b2;if(b3.detachEvent){if(typeof b3[e]===aB){b3[e]=null}b3.detachEvent(e,b4)}};bI.Event=function(b2,e){if(!(this instanceof bI.Event)){return new bI.Event(b2,e)}if(b2&&b2.type){this.originalEvent=b2;
this.type=b2.type;this.isDefaultPrevented=(b2.defaultPrevented||b2.returnValue===false||b2.getPreventDefault&&b2.getPreventDefault())?Q:W}else{this.type=b2}if(e){bI.extend(this,e)}this.timeStamp=b2&&b2.timeStamp||bI.now();
this[bI.expando]=true};bI.Event.prototype={isDefaultPrevented:W,isPropagationStopped:W,isImmediatePropagationStopped:W,preventDefault:function(){var b2=this.originalEvent;this.isDefaultPrevented=Q;if(!b2){return
}if(b2.preventDefault){b2.preventDefault()}else{b2.returnValue=false}},stopPropagation:function(){var b2=this.originalEvent;this.isPropagationStopped=Q;if(!b2){return}if(b2.stopPropagation){b2.stopPropagation()
}b2.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Q;this.stopPropagation()}};bI.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b2,e){bI.event.special[b2]={delegateType:e,bindType:e,handle:function(b5){var b3,b7=this,b6=b5.relatedTarget,b4=b5.handleObj;
if(!b6||(b6!==b7&&!bI.contains(b7,b6))){b5.type=b4.origType;b3=b4.handler.apply(this,arguments);b5.type=e}return b3}}});if(!bI.support.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false
}bI.event.add(this,"click._submit keypress._submit",function(b4){var b3=b4.target,b2=bI.nodeName(b3,"input")||bI.nodeName(b3,"button")?b3.form:aF;if(b2&&!bI._data(b2,"submitBubbles")){bI.event.add(b2,"submit._submit",function(e){e._submit_bubble=true
});bI._data(b2,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(bI.nodeName(this,"form")){return false
}bI.event.remove(this,"._submit")}}}if(!bI.support.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}bI.event.simulate("change",this,e,true)})}return false}bI.event.add(this,"beforeactivate._change",function(b3){var b2=b3.target;
if(bG.test(b2.nodeName)&&!bI._data(b2,"changeBubbles")){bI.event.add(b2,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)
}});bI._data(b2,"changeBubbles",true)}})},handle:function(b2){var e=b2.target;if(this!==e||b2.isSimulated||b2.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b2.handleObj.handler.apply(this,arguments)
}},teardown:function(){bI.event.remove(this,"._change");return !bG.test(this.nodeName)}}}if(!bI.support.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b4,e){var b2=0,b3=function(b5){bI.event.simulate(e,b5.target,bI.event.fix(b5),true)
};bI.event.special[e]={setup:function(){if(b2++===0){l.addEventListener(b4,b3,true)}},teardown:function(){if(--b2===0){l.removeEventListener(b4,b3,true)}}}})}bI.fn.extend({on:function(b3,e,b6,b5,b2){var b4,b7;
if(typeof b3==="object"){if(typeof e!=="string"){b6=b6||e;e=aF}for(b4 in b3){this.on(b4,e,b6,b3[b4],b2)}return this}if(b6==null&&b5==null){b5=e;b6=e=aF}else{if(b5==null){if(typeof e==="string"){b5=b6;b6=aF
}else{b5=b6;b6=e;e=aF}}}if(b5===false){b5=W}else{if(!b5){return this}}if(b2===1){b7=b5;b5=function(b8){bI().off(b8);return b7.apply(this,arguments)};b5.guid=b7.guid||(b7.guid=bI.guid++)}return this.each(function(){bI.event.add(this,b3,b5,b6,e)
})},one:function(b2,e,b4,b3){return this.on(b2,e,b4,b3,1)},off:function(b3,e,b5){var b2,b4;if(b3&&b3.preventDefault&&b3.handleObj){b2=b3.handleObj;bI(b3.delegateTarget).off(b2.namespace?b2.origType+"."+b2.namespace:b2.origType,b2.selector,b2.handler);
return this}if(typeof b3==="object"){for(b4 in b3){this.off(b4,e,b3[b4])}return this}if(e===false||typeof e==="function"){b5=e;e=aF}if(b5===false){b5=W}return this.each(function(){bI.event.remove(this,b3,b5,e)
})},bind:function(e,b3,b2){return this.on(e,null,b3,b2)},unbind:function(e,b2){return this.off(e,null,b2)},delegate:function(e,b2,b4,b3){return this.on(b2,e,b4,b3)},undelegate:function(e,b2,b3){return arguments.length===1?this.off(e,"**"):this.off(b2,e||"**",b3)
},trigger:function(e,b2){return this.each(function(){bI.event.trigger(e,b2,this)})},triggerHandler:function(e,b3){var b2=this[0];if(b2){return bI.event.trigger(e,b3,b2,true)}}});

(function(c9,cg){var cw,ca,cm,cG,cI,cR,cS,df,cU,cA,cn,cc,cY,da,b9,cE,cC,c4="sizzle"+-(new Date()),cH=c9.document,dc={},dd=0,cZ=0,b4=cy(),c3=cy(),cF=cy(),c8=typeof cg,cM=1<<31,c6=[],c7=c6.pop,b3=c6.push,cl=c6.slice,b8=c6.indexOf||function(dh){var dg=0,e=this.length;
for(;dg<e;dg++){if(this[dg]===dh){return dg}}return -1},co="[\\x20\\t\\r\\n\\f]",b2="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cJ=b2.replace("w","w#"),ch="([*^$|!~]?=)",c1="\\["+co+"*("+b2+")"+co+"*(?:"+ch+co+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cJ+")|)|)"+co+"*\\]",cj=":("+b2+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+c1.replace(3,8)+")*)|.*)\\)|)",cq=new RegExp("^"+co+"+|((?:^|[^\\\\])(?:\\\\.)*)"+co+"+$","g"),ct=new RegExp("^"+co+"*,"+co+"*"),cz=new RegExp("^"+co+"*([\\x20\\t\\r\\n\\f>+~])"+co+"*"),cO=new RegExp(cj),cP=new RegExp("^"+cJ+"$"),cX={ID:new RegExp("^#("+b2+")"),CLASS:new RegExp("^\\.("+b2+")"),NAME:new RegExp("^\\[name=['\"]?("+b2+")['\"]?\\]"),TAG:new RegExp("^("+b2.replace("w","w*")+")"),ATTR:new RegExp("^"+c1),PSEUDO:new RegExp("^"+cj),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+co+"*(even|odd|(([+-]|)(\\d*)n|)"+co+"*(?:([+-]|)"+co+"*(\\d+)|))"+co+"*\\)|)","i"),needsContext:new RegExp("^"+co+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+co+"*((?:-\\d)?\\d*)"+co+"*\\)|)(?=[^-]|$)","i")},cV=/[\x20\t\r\n\f]*[+~]/,cL=/^[^{]+\{\s*\[native code/,cN=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,b7=/^(?:input|select|textarea|button)$/i,ck=/^h\d$/i,cK=/'|\\/g,cs=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cr=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,c0=function(e,dh){var dg="0x"+dh-65536;
return dg!==dg?dh:dg<0?String.fromCharCode(dg+65536):String.fromCharCode(dg>>10|55296,dg&1023|56320)};try{cl.call(cH.documentElement.childNodes,0)[0].nodeType}catch(cB){cl=function(dg){var dh,e=[];while((dh=this[dg++])){e.push(dh)
}return e}}function cD(e){return cL.test(e+"")}function cy(){var e,dg=[];return(e=function(dh,di){if(dg.push(dh+=" ")>cm.cacheLength){delete e[dg.shift()]}return(e[dh]=di)})}function ci(e){e[c4]=true;return e
}function cb(dg){var di=cA.createElement("div");try{return dg(di)}catch(dh){return false}finally{di=null}}function cu(dn,dg,ds,du){var dt,dk,dl,dq,dr,dj,di,e,dh,dp;if((dg?dg.ownerDocument||dg:cH)!==cA){cU(dg)
}dg=dg||cA;ds=ds||[];if(!dn||typeof dn!=="string"){return ds}if((dq=dg.nodeType)!==1&&dq!==9){return[]}if(!cc&&!du){if((dt=cN.exec(dn))){if((dl=dt[1])){if(dq===9){dk=dg.getElementById(dl);if(dk&&dk.parentNode){if(dk.id===dl){ds.push(dk);
return ds}}else{return ds}}else{if(dg.ownerDocument&&(dk=dg.ownerDocument.getElementById(dl))&&cE(dg,dk)&&dk.id===dl){ds.push(dk);return ds}}}else{if(dt[2]){b3.apply(ds,cl.call(dg.getElementsByTagName(dn),0));
return ds}else{if((dl=dt[3])&&dc.getByClassName&&dg.getElementsByClassName){b3.apply(ds,cl.call(dg.getElementsByClassName(dl),0));return ds}}}}if(dc.qsa&&!cY.test(dn)){di=true;e=c4;dh=dg;dp=dq===9&&dn;
if(dq===1&&dg.nodeName.toLowerCase()!=="object"){dj=ce(dn);if((di=dg.getAttribute("id"))){e=di.replace(cK,"\\$&")}else{dg.setAttribute("id",e)}e="[id='"+e+"'] ";dr=dj.length;while(dr--){dj[dr]=e+cf(dj[dr])
}dh=cV.test(dn)&&dg.parentNode||dg;dp=dj.join(",")}if(dp){try{b3.apply(ds,cl.call(dh.querySelectorAll(dp),0));return ds}catch(dm){}finally{if(!di){dg.removeAttribute("id")}}}}}return db(dn.replace(cq,"$1"),dg,ds,du)
}cI=cu.isXML=function(e){var dg=e&&(e.ownerDocument||e).documentElement;return dg?dg.nodeName!=="HTML":false};cU=cu.setDocument=function(e){var dg=e?e.ownerDocument||e:cH;if(dg===cA||dg.nodeType!==9||!dg.documentElement){return cA
}cA=dg;cn=dg.documentElement;cc=cI(dg);dc.tagNameNoComments=cb(function(dh){dh.appendChild(dg.createComment(""));return !dh.getElementsByTagName("*").length});dc.attributes=cb(function(di){di.innerHTML="<select></select>";
var dh=typeof di.lastChild.getAttribute("multiple");return dh!=="boolean"&&dh!=="string"});dc.getByClassName=cb(function(dh){dh.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!dh.getElementsByClassName||!dh.getElementsByClassName("e").length){return false
}dh.lastChild.className="e";return dh.getElementsByClassName("e").length===2});dc.getByName=cb(function(di){di.id=c4+0;di.innerHTML="<a name='"+c4+"'></a><div name='"+c4+"'></div>";cn.insertBefore(di,cn.firstChild);
var dh=dg.getElementsByName&&dg.getElementsByName(c4).length===2+dg.getElementsByName(c4+0).length;dc.getIdNotName=!dg.getElementById(c4);cn.removeChild(di);return dh});cm.attrHandle=cb(function(dh){dh.innerHTML="<a href='#'></a>";
return dh.firstChild&&typeof dh.firstChild.getAttribute!==c8&&dh.firstChild.getAttribute("href")==="#"})?{}:{href:function(dh){return dh.getAttribute("href",2)},type:function(dh){return dh.getAttribute("type")
}};if(dc.getIdNotName){cm.find.ID=function(dj,di){if(typeof di.getElementById!==c8&&!cc){var dh=di.getElementById(dj);return dh&&dh.parentNode?[dh]:[]}};cm.filter.ID=function(di){var dh=di.replace(cr,c0);
return function(dj){return dj.getAttribute("id")===dh}}}else{cm.find.ID=function(dj,di){if(typeof di.getElementById!==c8&&!cc){var dh=di.getElementById(dj);return dh?dh.id===dj||typeof dh.getAttributeNode!==c8&&dh.getAttributeNode("id").value===dj?[dh]:cg:[]
}};cm.filter.ID=function(di){var dh=di.replace(cr,c0);return function(dk){var dj=typeof dk.getAttributeNode!==c8&&dk.getAttributeNode("id");return dj&&dj.value===dh}}}cm.find.TAG=dc.tagNameNoComments?function(dh,di){if(typeof di.getElementsByTagName!==c8){return di.getElementsByTagName(dh)
}}:function(dh,dl){var dm,dk=[],dj=0,di=dl.getElementsByTagName(dh);if(dh==="*"){while((dm=di[dj++])){if(dm.nodeType===1){dk.push(dm)}}return dk}return di};cm.find.NAME=dc.getByName&&function(dh,di){if(typeof di.getElementsByName!==c8){return di.getElementsByName(name)
}};cm.find.CLASS=dc.getByClassName&&function(di,dh){if(typeof dh.getElementsByClassName!==c8&&!cc){return dh.getElementsByClassName(di)}};da=[];cY=[":focus"];if((dc.qsa=cD(dg.querySelectorAll))){cb(function(dh){dh.innerHTML="<select><option selected=''></option></select>";
if(!dh.querySelectorAll("[selected]").length){cY.push("\\["+co+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!dh.querySelectorAll(":checked").length){cY.push(":checked")}});cb(function(dh){dh.innerHTML="<input type='hidden' i=''/>";
if(dh.querySelectorAll("[i^='']").length){cY.push("[*^$]="+co+"*(?:\"\"|'')")}if(!dh.querySelectorAll(":enabled").length){cY.push(":enabled",":disabled")}dh.querySelectorAll("*,:x");cY.push(",.*:")})}if((dc.matchesSelector=cD((b9=cn.matchesSelector||cn.mozMatchesSelector||cn.webkitMatchesSelector||cn.oMatchesSelector||cn.msMatchesSelector)))){cb(function(dh){dc.disconnectedMatch=b9.call(dh,"div");
b9.call(dh,"[s!='']:x");da.push("!=",cj)})}cY=new RegExp(cY.join("|"));da=new RegExp(da.join("|"));cE=cD(cn.contains)||cn.compareDocumentPosition?function(di,dh){var dk=di.nodeType===9?di.documentElement:di,dj=dh&&dh.parentNode;
return di===dj||!!(dj&&dj.nodeType===1&&(dk.contains?dk.contains(dj):di.compareDocumentPosition&&di.compareDocumentPosition(dj)&16))}:function(di,dh){if(dh){while((dh=dh.parentNode)){if(dh===di){return true
}}}return false};cC=cn.compareDocumentPosition?function(di,dh){var dj;if(di===dh){cS=true;return 0}if((dj=dh.compareDocumentPosition&&di.compareDocumentPosition&&di.compareDocumentPosition(dh))){if(dj&1||di.parentNode&&di.parentNode.nodeType===11){if(di===dg||cE(cH,di)){return -1
}if(dh===dg||cE(cH,dh)){return 1}return 0}return dj&4?-1:1}return di.compareDocumentPosition?-1:1}:function(di,dh){var dp,dl=0,dn=di.parentNode,dk=dh.parentNode,dj=[di],dm=[dh];if(di===dh){cS=true;return 0
}else{if(!dn||!dk){return di===dg?-1:dh===dg?1:dn?-1:dk?1:0}else{if(dn===dk){return b5(di,dh)}}}dp=di;while((dp=dp.parentNode)){dj.unshift(dp)}dp=dh;while((dp=dp.parentNode)){dm.unshift(dp)}while(dj[dl]===dm[dl]){dl++
}return dl?b5(dj[dl],dm[dl]):dj[dl]===cH?-1:dm[dl]===cH?1:0};cS=false;[0,0].sort(cC);dc.detectDuplicates=cS;return cA};cu.matches=function(dg,e){return cu(dg,null,null,e)};cu.matchesSelector=function(dh,dj){if((dh.ownerDocument||dh)!==cA){cU(dh)
}dj=dj.replace(cs,"='$1']");if(dc.matchesSelector&&!cc&&(!da||!da.test(dj))&&!cY.test(dj)){try{var dg=b9.call(dh,dj);if(dg||dc.disconnectedMatch||dh.document&&dh.document.nodeType!==11){return dg}}catch(di){}}return cu(dj,cA,null,[dh]).length>0
};cu.contains=function(e,dg){if((e.ownerDocument||e)!==cA){cU(e)}return cE(e,dg)};cu.attr=function(dg,e){var dh;if((dg.ownerDocument||dg)!==cA){cU(dg)}if(!cc){e=e.toLowerCase()}if((dh=cm.attrHandle[e])){return dh(dg)
}if(cc||dc.attributes){return dg.getAttribute(e)}return((dh=dg.getAttributeNode(e))||dg.getAttribute(e))&&dg[e]===true?e:dh&&dh.specified?dh.value:null};cu.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};cu.uniqueSort=function(dh){var di,dj=[],dg=1,e=0;cS=!dc.detectDuplicates;dh.sort(cC);if(cS){for(;(di=dh[dg]);dg++){if(di===dh[dg-1]){e=dj.push(dg)}}while(e--){dh.splice(dj[e],1)}}return dh};function b5(dg,e){var di=e&&dg,dh=di&&(~e.sourceIndex||cM)-(~dg.sourceIndex||cM);
if(dh){return dh}if(di){while((di=di.nextSibling)){if(di===e){return -1}}}return dg?1:-1}function cv(e){return function(dh){var dg=dh.nodeName.toLowerCase();return dg==="input"&&dh.type===e}}function b6(e){return function(dh){var dg=dh.nodeName.toLowerCase();
return(dg==="input"||dg==="button")&&dh.type===e}}function c2(e){return ci(function(dg){dg=+dg;return ci(function(dh,dl){var dj,di=e([],dh.length,dg),dk=di.length;while(dk--){if(dh[(dj=di[dk])]){dh[dj]=!(dl[dj]=dh[dj])
}}})})}cG=cu.getText=function(dj){var di,dg="",dh=0,e=dj.nodeType;if(!e){for(;(di=dj[dh]);dh++){dg+=cG(di)}}else{if(e===1||e===9||e===11){if(typeof dj.textContent==="string"){return dj.textContent}else{for(dj=dj.firstChild;
dj;dj=dj.nextSibling){dg+=cG(dj)}}}else{if(e===3||e===4){return dj.nodeValue}}}return dg};cm=cu.selectors={cacheLength:50,createPseudo:ci,match:cX,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cr,c0);
e[3]=(e[4]||e[5]||"").replace(cr,c0);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){cu.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")}else{if(e[3]){cu.error(e[0])}}return e},PSEUDO:function(dg){var e,dh=!dg[5]&&dg[2];if(cX.CHILD.test(dg[0])){return null}if(dg[4]){dg[2]=dg[4]}else{if(dh&&cO.test(dh)&&(e=ce(dh,true))&&(e=dh.indexOf(")",dh.length-e)-dh.length)){dg[0]=dg[0].slice(0,e);
dg[2]=dh.slice(0,e)}}return dg.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(cr,c0).toLowerCase();return function(dg){return dg.nodeName&&dg.nodeName.toLowerCase()===e
}},CLASS:function(e){var dg=b4[e+" "];return dg||(dg=new RegExp("(^|"+co+")"+e+"("+co+"|$)"))&&b4(e,function(dh){return dg.test(dh.className||(typeof dh.getAttribute!==c8&&dh.getAttribute("class"))||"")
})},ATTR:function(dh,dg,e){return function(dj){var di=cu.attr(dj,dh);if(di==null){return dg==="!="}if(!dg){return true}di+="";return dg==="="?di===e:dg==="!="?di!==e:dg==="^="?e&&di.indexOf(e)===0:dg==="*="?e&&di.indexOf(e)>-1:dg==="$="?e&&di.slice(-e.length)===e:dg==="~="?(" "+di+" ").indexOf(e)>-1:dg==="|="?di===e||di.slice(0,e.length+1)===e+"-":false
}},CHILD:function(dg,dj,di,dk,dh){var dm=dg.slice(0,3)!=="nth",e=dg.slice(-4)!=="last",dl=dj==="of-type";return dk===1&&dh===0?function(dn){return !!dn.parentNode}:function(du,ds,dx){var dn,dA,dv,dz,dw,dr,dt=dm!==e?"nextSibling":"previousSibling",dy=du.parentNode,dq=dl&&du.nodeName.toLowerCase(),dp=!dx&&!dl;
if(dy){if(dm){while(dt){dv=du;while((dv=dv[dt])){if(dl?dv.nodeName.toLowerCase()===dq:dv.nodeType===1){return false}}dr=dt=dg==="only"&&!dr&&"nextSibling"}return true}dr=[e?dy.firstChild:dy.lastChild];
if(e&&dp){dA=dy[c4]||(dy[c4]={});dn=dA[dg]||[];dw=dn[0]===dd&&dn[1];dz=dn[0]===dd&&dn[2];dv=dw&&dy.childNodes[dw];while((dv=++dw&&dv&&dv[dt]||(dz=dw=0)||dr.pop())){if(dv.nodeType===1&&++dz&&dv===du){dA[dg]=[dd,dw,dz];
break}}}else{if(dp&&(dn=(du[c4]||(du[c4]={}))[dg])&&dn[0]===dd){dz=dn[1]}else{while((dv=++dw&&dv&&dv[dt]||(dz=dw=0)||dr.pop())){if((dl?dv.nodeName.toLowerCase()===dq:dv.nodeType===1)&&++dz){if(dp){(dv[c4]||(dv[c4]={}))[dg]=[dd,dz]
}if(dv===du){break}}}}}dz-=dh;return dz===dk||(dz%dk===0&&dz/dk>=0)}}},PSEUDO:function(di,dh){var e,dg=cm.pseudos[di]||cm.setFilters[di.toLowerCase()]||cu.error("unsupported pseudo: "+di);if(dg[c4]){return dg(dh)
}if(dg.length>1){e=[di,di,"",dh];return cm.setFilters.hasOwnProperty(di.toLowerCase())?ci(function(dl,dn){var dk,dj=dg(dl,dh),dm=dj.length;while(dm--){dk=b8.call(dl,dj[dm]);dl[dk]=!(dn[dk]=dj[dm])}}):function(dj){return dg(dj,0,e)
}}return dg}},pseudos:{not:ci(function(e){var dg=[],dh=[],di=cR(e.replace(cq,"$1"));return di[c4]?ci(function(dk,dq,dn,dl){var dp,dj=di(dk,null,dl,[]),dm=dk.length;while(dm--){if((dp=dj[dm])){dk[dm]=!(dq[dm]=dp)
}}}):function(dl,dk,dj){dg[0]=dl;di(dg,null,dj,dh);return !dh.pop()}}),has:ci(function(e){return function(dg){return cu(e,dg).length>0}}),contains:ci(function(e){return function(dg){return(dg.textContent||dg.innerText||cG(dg)).indexOf(e)>-1
}}),lang:ci(function(e){if(!cP.test(e||"")){cu.error("unsupported lang: "+e)}e=e.replace(cr,c0).toLowerCase();return function(dh){var dg;do{if((dg=cc?dh.getAttribute("xml:lang")||dh.getAttribute("lang"):dh.lang)){dg=dg.toLowerCase();
return dg===e||dg.indexOf(e+"-")===0}}while((dh=dh.parentNode)&&dh.nodeType===1);return false}}),target:function(e){var dg=c9.location&&c9.location.hash;return dg&&dg.slice(1)===e.id},root:function(e){return e===cn
},focus:function(e){return e===cA.activeElement&&(!cA.hasFocus||cA.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true
},checked:function(e){var dg=e.nodeName.toLowerCase();return(dg==="input"&&!!e.checked)||(dg==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true
},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return !cm.pseudos.empty(e)},header:function(e){return ck.test(e.nodeName)
},input:function(e){return b7.test(e.nodeName)},button:function(dg){var e=dg.nodeName.toLowerCase();return e==="input"&&dg.type==="button"||e==="button"},text:function(dg){var e;return dg.nodeName.toLowerCase()==="input"&&dg.type==="text"&&((e=dg.getAttribute("type"))==null||e.toLowerCase()===dg.type)
},first:c2(function(){return[0]}),last:c2(function(e,dg){return[dg-1]}),eq:c2(function(e,dh,dg){return[dg<0?dg+dh:dg]}),even:c2(function(e,dh){var dg=0;for(;dg<dh;dg+=2){e.push(dg)}return e}),odd:c2(function(e,dh){var dg=1;
for(;dg<dh;dg+=2){e.push(dg)}return e}),lt:c2(function(e,di,dh){var dg=dh<0?dh+di:dh;for(;--dg>=0;){e.push(dg)}return e}),gt:c2(function(e,di,dh){var dg=dh<0?dh+di:dh;for(;++dg<di;){e.push(dg)}return e
})}};for(cw in {radio:true,checkbox:true,file:true,password:true,image:true}){cm.pseudos[cw]=cv(cw)}for(cw in {submit:true,reset:true}){cm.pseudos[cw]=b6(cw)}function ce(dj,dp){var dg,dk,dm,dn,dl,dh,e,di=c3[dj+" "];
if(di){return dp?0:di.slice(0)}dl=dj;dh=[];e=cm.preFilter;while(dl){if(!dg||(dk=ct.exec(dl))){if(dk){dl=dl.slice(dk[0].length)||dl}dh.push(dm=[])}dg=false;if((dk=cz.exec(dl))){dg=dk.shift();dm.push({value:dg,type:dk[0].replace(cq," ")});
dl=dl.slice(dg.length)}for(dn in cm.filter){if((dk=cX[dn].exec(dl))&&(!e[dn]||(dk=e[dn](dk)))){dg=dk.shift();dm.push({value:dg,type:dn,matches:dk});dl=dl.slice(dg.length)}}if(!dg){break}}return dp?dl.length:dl?cu.error(dj):c3(dj,dh).slice(0)
}function cf(di){var dh=0,dg=di.length,e="";for(;dh<dg;dh++){e+=di[dh].value}return e}function cp(dj,dh,di){var e=dh.dir,dk=di&&e==="parentNode",dg=cZ++;return dh.first?function(dn,dm,dl){while((dn=dn[e])){if(dn.nodeType===1||dk){return dj(dn,dm,dl)
}}}:function(dq,dn,dm){var ds,dl,dp,dr=dd+" "+dg;if(dm){while((dq=dq[e])){if(dq.nodeType===1||dk){if(dj(dq,dn,dm)){return true}}}}else{while((dq=dq[e])){if(dq.nodeType===1||dk){dp=dq[c4]||(dq[c4]={});if((dl=dp[e])&&dl[0]===dr){if((ds=dl[1])===true||ds===ca){return ds===true
}}else{dl=dp[e]=[dr];dl[1]=dj(dq,dn,dm)||ca;if(dl[1]===true){return true}}}}}}}function de(e){return e.length>1?function(dj,di,dg){var dh=e.length;while(dh--){if(!e[dh](dj,di,dg)){return false}}return true
}:e[0]}function cW(e,dg,dh,di,dl){var dj,dp=[],dk=0,dm=e.length,dn=dg!=null;for(;dk<dm;dk++){if((dj=e[dk])){if(!dh||dh(dj,di,dl)){dp.push(dj);if(dn){dg.push(dk)}}}}return dp}function cd(dh,dg,dj,di,dk,e){if(di&&!di[c4]){di=cd(di)
}if(dk&&!dk[c4]){dk=cd(dk,e)}return ci(function(dw,dt,dn,dv){var dy,du,dq,dp=[],dx=[],dm=dt.length,dl=dw||cx(dg||"*",dn.nodeType?[dn]:dn,[]),dr=dh&&(dw||!dg)?cW(dl,dp,dh,dn,dv):dl,ds=dj?dk||(dw?dh:dm||di)?[]:dt:dr;
if(dj){dj(dr,ds,dn,dv)}if(di){dy=cW(ds,dx);di(dy,[],dn,dv);du=dy.length;while(du--){if((dq=dy[du])){ds[dx[du]]=!(dr[dx[du]]=dq)}}}if(dw){if(dk||dh){if(dk){dy=[];du=ds.length;while(du--){if((dq=ds[du])){dy.push((dr[du]=dq))
}}dk(null,(ds=[]),dy,dv)}du=ds.length;while(du--){if((dq=ds[du])&&(dy=dk?b8.call(dw,dq):dp[du])>-1){dw[dy]=!(dt[dy]=dq)}}}}else{ds=cW(ds===dt?ds.splice(dm,ds.length):ds);if(dk){dk(null,dt,ds,dv)}else{b3.apply(dt,ds)
}}})}function c5(dl){var dg,dj,dh,dk=dl.length,dp=cm.relative[dl[0].type],dq=dp||cm.relative[" "],di=dp?1:0,dm=cp(function(dr){return dr===dg},dq,true),dn=cp(function(dr){return b8.call(dg,dr)>-1},dq,true),e=[function(dt,ds,dr){return(!dp&&(dr||ds!==df))||((dg=ds).nodeType?dm(dt,ds,dr):dn(dt,ds,dr))
}];for(;di<dk;di++){if((dj=cm.relative[dl[di].type])){e=[cp(de(e),dj)]}else{dj=cm.filter[dl[di].type].apply(null,dl[di].matches);if(dj[c4]){dh=++di;for(;dh<dk;dh++){if(cm.relative[dl[dh].type]){break}}return cd(di>1&&de(e),di>1&&cf(dl.slice(0,di-1)).replace(cq,"$1"),dj,di<dh&&c5(dl.slice(di,dh)),dh<dk&&c5((dl=dl.slice(dh))),dh<dk&&cf(dl))
}e.push(dj)}}return de(e)}function cT(di,dh){var dk=0,e=dh.length>0,dj=di.length>0,dg=function(dv,dp,du,dt,dB){var dq,dr,dw,dA=[],dz=0,ds="0",dl=dv&&[],dx=dB!=null,dy=df,dn=dv||dj&&cm.find.TAG("*",dB&&dp.parentNode||dp),dm=(dd+=dy==null?1:Math.random()||0.1);
if(dx){df=dp!==cA&&dp;ca=dk}for(;(dq=dn[ds])!=null;ds++){if(dj&&dq){dr=0;while((dw=di[dr++])){if(dw(dq,dp,du)){dt.push(dq);break}}if(dx){dd=dm;ca=++dk}}if(e){if((dq=!dw&&dq)){dz--}if(dv){dl.push(dq)}}}dz+=ds;
if(e&&ds!==dz){dr=0;while((dw=dh[dr++])){dw(dl,dA,dp,du)}if(dv){if(dz>0){while(ds--){if(!(dl[ds]||dA[ds])){dA[ds]=c7.call(dt)}}}dA=cW(dA)}b3.apply(dt,dA);if(dx&&!dv&&dA.length>0&&(dz+dh.length)>1){cu.uniqueSort(dt)
}}if(dx){dd=dm;df=dy}return dl};return e?ci(dg):dg}cR=cu.compile=function(e,dk){var dh,dg=[],dj=[],di=cF[e+" "];if(!di){if(!dk){dk=ce(e)}dh=dk.length;while(dh--){di=c5(dk[dh]);if(di[c4]){dg.push(di)}else{dj.push(di)
}}di=cF(e,cT(dj,dg))}return di};function cx(dg,dj,di){var dh=0,e=dj.length;for(;dh<e;dh++){cu(dg,dj[dh],di)}return di}function db(dh,e,di,dl){var dj,dn,dg,dp,dm,dk=ce(dh);if(!dl){if(dk.length===1){dn=dk[0]=dk[0].slice(0);
if(dn.length>2&&(dg=dn[0]).type==="ID"&&e.nodeType===9&&!cc&&cm.relative[dn[1].type]){e=cm.find.ID(dg.matches[0].replace(cr,c0),e)[0];if(!e){return di}dh=dh.slice(dn.shift().value.length)}dj=cX.needsContext.test(dh)?0:dn.length;
while(dj--){dg=dn[dj];if(cm.relative[(dp=dg.type)]){break}if((dm=cm.find[dp])){if((dl=dm(dg.matches[0].replace(cr,c0),cV.test(dn[0].type)&&e.parentNode||e))){dn.splice(dj,1);dh=dl.length&&cf(dn);if(!dh){b3.apply(di,cl.call(dl,0));
return di}break}}}}}cR(dh,dk)(dl,e,cc,di,cV.test(dh));return di}cm.pseudos.nth=cm.pseudos.eq;function cQ(){}cm.filters=cQ.prototype=cm.pseudos;cm.setFilters=new cQ();cU();cu.attr=bI.attr;bI.find=cu;bI.expr=cu.selectors;
bI.expr[":"]=bI.expr.pseudos;bI.unique=cu.uniqueSort;bI.text=cu.getText;bI.isXMLDoc=cu.isXML;bI.contains=cu.contains})(a1);var ai=/Until$/,bs=/^(?:parents|prev(?:Until|All))/,am=/^.[^:#\[\.,]*$/,y=bI.expr.match.needsContext,bw={children:true,contents:true,next:true,prev:true};
bI.fn.extend({find:function(b2){var b5,b4,b3,e=this.length;if(typeof b2!=="string"){b3=this;return this.pushStack(bI(b2).filter(function(){for(b5=0;b5<e;b5++){if(bI.contains(b3[b5],this)){return true}}}))
}b4=[];for(b5=0;b5<e;b5++){bI.find(b2,this[b5],b4)}b4=this.pushStack(e>1?bI.unique(b4):b4);b4.selector=(this.selector?this.selector+" ":"")+b2;return b4},has:function(b4){var b3,b2=bI(b4,this),e=b2.length;
return this.filter(function(){for(b3=0;b3<e;b3++){if(bI.contains(this,b2[b3])){return true}}})},not:function(e){return this.pushStack(aN(this,e,false))},filter:function(e){return this.pushStack(aN(this,e,true))
},is:function(e){return !!e&&(typeof e==="string"?y.test(e)?bI(e,this.context).index(this[0])>=0:bI.filter(e,this).length>0:this.filter(e).length>0)},closest:function(b5,b4){var b6,b3=0,e=this.length,b2=[],b7=y.test(b5)||typeof b5!=="string"?bI(b5,b4||this.context):0;
for(;b3<e;b3++){b6=this[b3];while(b6&&b6.ownerDocument&&b6!==b4&&b6.nodeType!==11){if(b7?b7.index(b6)>-1:bI.find.matchesSelector(b6,b5)){b2.push(b6);break}b6=b6.parentNode}}return this.pushStack(b2.length>1?bI.unique(b2):b2)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1}if(typeof e==="string"){return bI.inArray(this[0],bI(e))}return bI.inArray(e.jquery?e[0]:e,this)},add:function(e,b2){var b4=typeof e==="string"?bI(e,b2):bI.makeArray(e&&e.nodeType?[e]:e),b3=bI.merge(this.get(),b4);
return this.pushStack(bI.unique(b3))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});bI.fn.andSelf=bI.fn.addBack;function aW(b2,e){do{b2=b2[e]}while(b2&&b2.nodeType!==1);
return b2}bI.each({parent:function(b2){var e=b2.parentNode;return e&&e.nodeType!==11?e:null},parents:function(e){return bI.dir(e,"parentNode")},parentsUntil:function(b2,e,b3){return bI.dir(b2,"parentNode",b3)
},next:function(e){return aW(e,"nextSibling")},prev:function(e){return aW(e,"previousSibling")},nextAll:function(e){return bI.dir(e,"nextSibling")},prevAll:function(e){return bI.dir(e,"previousSibling")
},nextUntil:function(b2,e,b3){return bI.dir(b2,"nextSibling",b3)},prevUntil:function(b2,e,b3){return bI.dir(b2,"previousSibling",b3)},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bI.sibling(e.firstChild)},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)}},function(e,b2){bI.fn[e]=function(b5,b3){var b4=bI.map(this,b2,b5);
if(!ai.test(e)){b3=b5}if(b3&&typeof b3==="string"){b4=bI.filter(b3,b4)}b4=this.length>1&&!bw[e]?bI.unique(b4):b4;if(this.length>1&&bs.test(e)){b4=b4.reverse()}return this.pushStack(b4)}});bI.extend({filter:function(b3,e,b2){if(b2){b3=":not("+b3+")"
}return e.length===1?bI.find.matchesSelector(e[0],b3)?[e[0]]:[]:bI.find.matches(b3,e)},dir:function(b3,b2,b5){var e=[],b4=b3[b2];while(b4&&b4.nodeType!==9&&(b5===aF||b4.nodeType!==1||!bI(b4).is(b5))){if(b4.nodeType===1){e.push(b4)
}b4=b4[b2]}return e},sibling:function(b3,b2){var e=[];for(;b3;b3=b3.nextSibling){if(b3.nodeType===1&&b3!==b2){e.push(b3)}}return e}});function aN(b4,b3,e){b3=b3||0;if(bI.isFunction(b3)){return bI.grep(b4,function(b6,b5){var b7=!!b3.call(b6,b5,b6);
return b7===e})}else{if(b3.nodeType){return bI.grep(b4,function(b5){return(b5===b3)===e})}else{if(typeof b3==="string"){var b2=bI.grep(b4,function(b5){return b5.nodeType===1});if(am.test(b3)){return bI.filter(b3,b2,!e)
}else{b3=bI.filter(b3,b2)}}}}return bI.grep(b4,function(b5){return(bI.inArray(b5,b3)>=0)===e})}function A(e){var b3=d.split("|"),b2=e.createDocumentFragment();if(b2.createElement){while(b3.length){b2.createElement(b3.pop())
}}return b2}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",az=/ jQuery\d+="(?:null|\d+)"/g,I=new RegExp("<(?:"+d+")[\\s/>]","i"),b1=/^\s+/,aC=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,bW=/<tbody/i,H=/<|&#?\w+;/,ak=/<(?:script|style|link)/i,q=/^(?:checkbox|radio)$/i,bT=/checked\s*(?:[^=]|=\s*.checked.)/i,by=/^$|\/(?:java|ecma)script/i,aq=/^true\/(.*)/,aJ=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,S={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:bI.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aR=A(l),j=aR.appendChild(l.createElement("div"));
S.optgroup=S.option;S.tbody=S.tfoot=S.colgroup=S.caption=S.thead;S.th=S.td;bI.fn.extend({text:function(e){return bI.access(this,function(b2){return b2===aF?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(b2))
},null,e,arguments.length)},wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b3){bI(this).wrapAll(e.call(this,b3))})}if(this[0]){var b2=bI(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){b2.insertBefore(this[0])
}b2.map(function(){var b3=this;while(b3.firstChild&&b3.firstChild.nodeType===1){b3=b3.firstChild}return b3}).append(this)}return this},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b2){bI(this).wrapInner(e.call(this,b2))
})}return this.each(function(){var b2=bI(this),b3=b2.contents();if(b3.length){b3.wrapAll(e)}else{b2.append(e)}})},wrap:function(e){var b2=bI.isFunction(e);return this.each(function(b3){bI(this).wrapAll(b2?e.call(this,b3):e)
})},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,b4){var b3,b2=0;for(;(b3=this[b2])!=null;
b2++){if(!e||bI.filter(e,[b3]).length>0){if(!b4&&b3.nodeType===1){bI.cleanData(k(b3))}if(b3.parentNode){if(b4&&bI.contains(b3.ownerDocument,b3)){br(k(b3,"script"))}b3.parentNode.removeChild(b3)}}}return this
},empty:function(){var b2,e=0;for(;(b2=this[e])!=null;e++){if(b2.nodeType===1){bI.cleanData(k(b2,false))}while(b2.firstChild){b2.removeChild(b2.firstChild)}if(b2.options&&bI.nodeName(b2,"select")){b2.options.length=0
}}return this},clone:function(b2,e){b2=b2==null?false:b2;e=e==null?b2:e;return this.map(function(){return bI.clone(this,b2,e)})},html:function(e){return bI.access(this,function(b5){var b4=this[0]||{},b3=0,b2=this.length;
if(b5===aF){return b4.nodeType===1?b4.innerHTML.replace(az,""):aF}if(typeof b5==="string"&&!ak.test(b5)&&(bI.support.htmlSerialize||!I.test(b5))&&(bI.support.leadingWhitespace||!b1.test(b5))&&!S[(m.exec(b5)||["",""])[1].toLowerCase()]){b5=b5.replace(aC,"<$1></$2>");
try{for(;b3<b2;b3++){b4=this[b3]||{};if(b4.nodeType===1){bI.cleanData(k(b4,false));b4.innerHTML=b5}}b4=0}catch(b6){}}if(b4){this.empty().append(b5)}},null,e,arguments.length)},replaceWith:function(b2){var e=bI.isFunction(b2);
if(!e&&typeof b2!=="string"){b2=bI(b2).not(this).detach()}return this.domManip([b2],true,function(b5){var b4=this.nextSibling,b3=this.parentNode;if(b3){bI(this).remove();b3.insertBefore(b5,b4)}})},detach:function(e){return this.remove(e,true)
},domManip:function(b9,cf,ce){b9=aH.apply([],b9);var b7,b3,e,b5,cc,b8,b6=0,b4=this.length,cb=this,cd=b4-1,ca=b9[0],b2=bI.isFunction(ca);if(b2||!(b4<=1||typeof ca!=="string"||bI.support.checkClone||!bT.test(ca))){return this.each(function(ch){var cg=cb.eq(ch);
if(b2){b9[0]=ca.call(this,ch,cf?cg.html():aF)}cg.domManip(b9,cf,ce)})}if(b4){b8=bI.buildFragment(b9,this[0].ownerDocument,false,this);b7=b8.firstChild;if(b8.childNodes.length===1){b8=b7}if(b7){cf=cf&&bI.nodeName(b7,"tr");
b5=bI.map(k(b8,"script"),t);e=b5.length;for(;b6<b4;b6++){b3=b8;if(b6!==cd){b3=bI.clone(b3,true,true);if(e){bI.merge(b5,k(b3,"script"))}}ce.call(cf&&bI.nodeName(this[b6],"table")?x(this[b6],"tbody"):this[b6],b3,b6)
}if(e){cc=b5[b5.length-1].ownerDocument;bI.map(b5,bb);for(b6=0;b6<e;b6++){b3=b5[b6];if(by.test(b3.type||"")&&!bI._data(b3,"globalEval")&&bI.contains(cc,b3)){if(b3.src){bI.ajax({url:b3.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bI.globalEval((b3.text||b3.textContent||b3.innerHTML||"").replace(aJ,""))}}}}b8=b7=null}}return this}});function x(b2,e){return b2.getElementsByTagName(e)[0]||b2.appendChild(b2.ownerDocument.createElement(e))
}function t(b2){var e=b2.getAttributeNode("type");b2.type=(e&&e.specified)+"/"+b2.type;return b2}function bb(b2){var e=aq.exec(b2.type);if(e){b2.type=e[1]}else{b2.removeAttribute("type")}return b2}function br(e,b3){var b4,b2=0;
for(;(b4=e[b2])!=null;b2++){bI._data(b4,"globalEval",!b3||bI._data(b3[b2],"globalEval"))}}function ar(b8,b2){if(b2.nodeType!==1||!bI.hasData(b8)){return}var b5,b4,e,b7=bI._data(b8),b6=bI._data(b2,b7),b3=b7.events;
if(b3){delete b6.handle;b6.events={};for(b5 in b3){for(b4=0,e=b3[b5].length;b4<e;b4++){bI.event.add(b2,b5,b3[b5][b4])}}}if(b6.data){b6.data=bI.extend({},b6.data)}}function P(b5,b2){var b6,b4,b3;if(b2.nodeType!==1){return
}b6=b2.nodeName.toLowerCase();if(!bI.support.noCloneEvent&&b2[bI.expando]){b3=bI._data(b2);for(b4 in b3.events){bI.removeEvent(b2,b4,b3.handle)}b2.removeAttribute(bI.expando)}if(b6==="script"&&b2.text!==b5.text){t(b2).text=b5.text;
bb(b2)}else{if(b6==="object"){if(b2.parentNode){b2.outerHTML=b5.outerHTML}if(bI.support.html5Clone&&(b5.innerHTML&&!bI.trim(b2.innerHTML))){b2.innerHTML=b5.innerHTML}}else{if(b6==="input"&&q.test(b5.type)){b2.defaultChecked=b2.checked=b5.checked;
if(b2.value!==b5.value){b2.value=b5.value}}else{if(b6==="option"){b2.defaultSelected=b2.selected=b5.defaultSelected}else{if(b6==="input"||b6==="textarea"){b2.defaultValue=b5.defaultValue}}}}}}bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b2){bI.fn[e]=function(b3){var b4,b6=0,b5=[],b8=bI(b3),b7=b8.length-1;
for(;b6<=b7;b6++){b4=b6===b7?this:this.clone(true);bI(b8[b6])[b2](b4);an.apply(b5,b4.get())}return this.pushStack(b5)}});function k(b4,e){var b2,b5,b3=0,b6=typeof b4.getElementsByTagName!==aB?b4.getElementsByTagName(e||"*"):typeof b4.querySelectorAll!==aB?b4.querySelectorAll(e||"*"):aF;
if(!b6){for(b6=[],b2=b4.childNodes||b4;(b5=b2[b3])!=null;b3++){if(!e||bI.nodeName(b5,e)){b6.push(b5)}else{bI.merge(b6,k(b5,e))}}}return e===aF||e&&bI.nodeName(b4,e)?bI.merge([b4],b6):b6}function bU(e){if(q.test(e.type)){e.defaultChecked=e.checked
}}bI.extend({clone:function(b2,b4,e){var b6,b3,b9,b5,b7,b8=bI.contains(b2.ownerDocument,b2);if(bI.support.html5Clone||bI.isXMLDoc(b2)||!I.test("<"+b2.nodeName+">")){b9=b2.cloneNode(true)}else{j.innerHTML=b2.outerHTML;
j.removeChild(b9=j.firstChild)}if((!bI.support.noCloneEvent||!bI.support.noCloneChecked)&&(b2.nodeType===1||b2.nodeType===11)&&!bI.isXMLDoc(b2)){b6=k(b9);b7=k(b2);for(b5=0;(b3=b7[b5])!=null;++b5){if(b6[b5]){P(b3,b6[b5])
}}}if(b4){if(e){b7=b7||k(b2);b6=b6||k(b9);for(b5=0;(b3=b7[b5])!=null;b5++){ar(b3,b6[b5])}}else{ar(b2,b9)}}b6=k(b9,"script");if(b6.length>0){br(b6,!b8&&k(b2,"script"))}b6=b7=b3=null;return b9},buildFragment:function(b2,b4,b9,ce){var ca,b6,b8,cd,cf,cc,b3,b7=b2.length,b5=A(b4),e=[],cb=0;
for(;cb<b7;cb++){b6=b2[cb];if(b6||b6===0){if(bI.type(b6)==="object"){bI.merge(e,b6.nodeType?[b6]:b6)}else{if(!H.test(b6)){e.push(b4.createTextNode(b6))}else{cd=cd||b5.appendChild(b4.createElement("div"));
cf=(m.exec(b6)||["",""])[1].toLowerCase();b3=S[cf]||S._default;cd.innerHTML=b3[1]+b6.replace(aC,"<$1></$2>")+b3[2];ca=b3[0];while(ca--){cd=cd.lastChild}if(!bI.support.leadingWhitespace&&b1.test(b6)){e.push(b4.createTextNode(b1.exec(b6)[0]))
}if(!bI.support.tbody){b6=cf==="table"&&!bW.test(b6)?cd.firstChild:b3[1]==="<table>"&&!bW.test(b6)?cd:0;ca=b6&&b6.childNodes.length;while(ca--){if(bI.nodeName((cc=b6.childNodes[ca]),"tbody")&&!cc.childNodes.length){b6.removeChild(cc)
}}}bI.merge(e,cd.childNodes);cd.textContent="";while(cd.firstChild){cd.removeChild(cd.firstChild)}cd=b5.lastChild}}}}if(cd){b5.removeChild(cd)}if(!bI.support.appendChecked){bI.grep(k(e,"input"),bU)}cb=0;
while((b6=e[cb++])){if(ce&&bI.inArray(b6,ce)!==-1){continue}b8=bI.contains(b6.ownerDocument,b6);cd=k(b5.appendChild(b6),"script");if(b8){br(cd)}if(b9){ca=0;while((b6=cd[ca++])){if(by.test(b6.type||"")){b9.push(b6)
}}}}cd=null;return b5},cleanData:function(b2,ca){var b4,b9,b3,b5,b6=0,cb=bI.expando,e=bI.cache,b7=bI.support.deleteExpando,b8=bI.event.special;for(;(b4=b2[b6])!=null;b6++){if(ca||bI.acceptData(b4)){b3=b4[cb];
b5=b3&&e[b3];if(b5){if(b5.events){for(b9 in b5.events){if(b8[b9]){bI.event.remove(b4,b9)}else{bI.removeEvent(b4,b9,b5.handle)}}}if(e[b3]){delete e[b3];if(b7){delete b4[cb]}else{if(typeof b4.removeAttribute!==aB){b4.removeAttribute(cb)
}else{b4[cb]=null}}a5.push(b3)}}}}}});var aD,bn,E,bf=/alpha\([^)]*\)/i,aS=/opacity\s*=\s*([^)]*)/,bm=/^(top|right|bottom|left)$/,F=/^(none|table(?!-c[ea]).+)/,aX=/^margin/,a8=new RegExp("^("+bz+")(.*)$","i"),V=new RegExp("^("+bz+")(?!px)[a-z%]+$","i"),R=new RegExp("^([+-])=("+bz+")","i"),bi={BODY:"block"},ba={position:"absolute",visibility:"hidden",display:"block"},bB={letterSpacing:0,fontWeight:400},bS=["Top","Right","Bottom","Left"],au=["Webkit","O","Moz","ms"];
function b(b4,b2){if(b2 in b4){return b2}var b5=b2.charAt(0).toUpperCase()+b2.slice(1),e=b2,b3=au.length;while(b3--){b2=au[b3]+b5;if(b2 in b4){return b2}}return e}function O(b2,e){b2=e||b2;return bI.css(b2,"display")==="none"||!bI.contains(b2.ownerDocument,b2)
}function p(b7,e){var b8,b5,b6,b2=[],b3=0,b4=b7.length;for(;b3<b4;b3++){b5=b7[b3];if(!b5.style){continue}b2[b3]=bI._data(b5,"olddisplay");b8=b5.style.display;if(e){if(!b2[b3]&&b8==="none"){b5.style.display=""
}if(b5.style.display===""&&O(b5)){b2[b3]=bI._data(b5,"olddisplay",bD(b5.nodeName))}}else{if(!b2[b3]){b6=O(b5);if(b8&&b8!=="none"||!b6){bI._data(b5,"olddisplay",b6?b8:bI.css(b5,"display"))}}}}for(b3=0;b3<b4;
b3++){b5=b7[b3];if(!b5.style){continue}if(!e||b5.style.display==="none"||b5.style.display===""){b5.style.display=e?b2[b3]||"":"none"}}return b7}bI.fn.extend({css:function(e,b2){return bI.access(this,function(b7,b4,b8){var b3,b6,b9={},b5=0;
if(bI.isArray(b4)){b6=bn(b7);b3=b4.length;for(;b5<b3;b5++){b9[b4[b5]]=bI.css(b7,b4[b5],false,b6)}return b9}return b8!==aF?bI.style(b7,b4,b8):bI.css(b7,b4)},e,b2,arguments.length>1)},show:function(){return p(this,true)
},hide:function(){return p(this)},toggle:function(b2){var e=typeof b2==="boolean";return this.each(function(){if(e?b2:O(this)){bI(this).show()}else{bI(this).hide()}})}});bI.extend({cssHooks:{opacity:{get:function(b3,b2){if(b2){var e=E(b3,"opacity");
return e===""?"1":e}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bI.support.cssFloat?"cssFloat":"styleFloat"},style:function(b4,b3,ca,b5){if(!b4||b4.nodeType===3||b4.nodeType===8||!b4.style){return
}var b8,b9,cb,b6=bI.camelCase(b3),b2=b4.style;b3=bI.cssProps[b6]||(bI.cssProps[b6]=b(b2,b6));cb=bI.cssHooks[b3]||bI.cssHooks[b6];if(ca!==aF){b9=typeof ca;if(b9==="string"&&(b8=R.exec(ca))){ca=(b8[1]+1)*b8[2]+parseFloat(bI.css(b4,b3));
b9="number"}if(ca==null||b9==="number"&&isNaN(ca)){return}if(b9==="number"&&!bI.cssNumber[b6]){ca+="px"}if(!bI.support.clearCloneStyle&&ca===""&&b3.indexOf("background")===0){b2[b3]="inherit"}if(!cb||!("set" in cb)||(ca=cb.set(b4,ca,b5))!==aF){try{b2[b3]=ca
}catch(b7){}}}else{if(cb&&"get" in cb&&(b8=cb.get(b4,false,b5))!==aF){return b8}return b2[b3]}},css:function(b7,b5,b2,b6){var b4,b8,e,b3=bI.camelCase(b5);b5=bI.cssProps[b3]||(bI.cssProps[b3]=b(b7.style,b3));
e=bI.cssHooks[b5]||bI.cssHooks[b3];if(e&&"get" in e){b8=e.get(b7,true,b2)}if(b8===aF){b8=E(b7,b5,b6)}if(b8==="normal"&&b5 in bB){b8=bB[b5]}if(b2===""||b2){b4=parseFloat(b8);return b2===true||bI.isNumeric(b4)?b4||0:b8
}return b8},swap:function(b6,b5,b7,b4){var b3,b2,e={};for(b2 in b5){e[b2]=b6.style[b2];b6.style[b2]=b5[b2]}b3=b7.apply(b6,b4||[]);for(b2 in b5){b6.style[b2]=e[b2]}return b3}});if(a1.getComputedStyle){bn=function(e){return a1.getComputedStyle(e,null)
};E=function(b5,b3,b7){var b4,b2,b9,b6=b7||bn(b5),b8=b6?b6.getPropertyValue(b3)||b6[b3]:aF,e=b5.style;if(b6){if(b8===""&&!bI.contains(b5.ownerDocument,b5)){b8=bI.style(b5,b3)}if(V.test(b8)&&aX.test(b3)){b4=e.width;
b2=e.minWidth;b9=e.maxWidth;e.minWidth=e.maxWidth=e.width=b8;b8=b6.width;e.width=b4;e.minWidth=b2;e.maxWidth=b9}}return b8}}else{if(l.documentElement.currentStyle){bn=function(e){return e.currentStyle};
E=function(b4,b2,b7){var b3,b6,b8,b5=b7||bn(b4),b9=b5?b5[b2]:aF,e=b4.style;if(b9==null&&e&&e[b2]){b9=e[b2]}if(V.test(b9)&&!bm.test(b2)){b3=e.left;b6=b4.runtimeStyle;b8=b6&&b6.left;if(b8){b6.left=b4.currentStyle.left
}e.left=b2==="fontSize"?"1em":b9;b9=e.pixelLeft+"px";e.left=b3;if(b8){b6.left=b8}}return b9===""?"auto":b9}}}function aI(e,b3,b4){var b2=a8.exec(b3);return b2?Math.max(0,b2[1]-(b4||0))+(b2[2]||"px"):b3
}function av(b5,b2,e,b7,b4){var b3=e===(b7?"border":"content")?4:b2==="width"?1:0,b6=0;for(;b3<4;b3+=2){if(e==="margin"){b6+=bI.css(b5,e+bS[b3],true,b4)}if(b7){if(e==="content"){b6-=bI.css(b5,"padding"+bS[b3],true,b4)
}if(e!=="margin"){b6-=bI.css(b5,"border"+bS[b3]+"Width",true,b4)}}else{b6+=bI.css(b5,"padding"+bS[b3],true,b4);if(e!=="padding"){b6+=bI.css(b5,"border"+bS[b3]+"Width",true,b4)}}}return b6}function u(b5,b2,e){var b4=true,b6=b2==="width"?b5.offsetWidth:b5.offsetHeight,b3=bn(b5),b7=bI.support.boxSizing&&bI.css(b5,"boxSizing",false,b3)==="border-box";
if(b6<=0||b6==null){b6=E(b5,b2,b3);if(b6<0||b6==null){b6=b5.style[b2]}if(V.test(b6)){return b6}b4=b7&&(bI.support.boxSizingReliable||b6===b5.style[b2]);b6=parseFloat(b6)||0}return(b6+av(b5,b2,e||(b7?"border":"content"),b4,b3))+"px"
}function bD(b3){var b2=l,e=bi[b3];if(!e){e=a0(b3,b2);if(e==="none"||!e){aD=(aD||bI("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b2.documentElement);
b2=(aD[0].contentWindow||aD[0].contentDocument).document;b2.write("<!doctype html><html><body>");b2.close();e=a0(b3,b2);aD.detach()}bi[b3]=e}return e}function a0(e,b4){var b2=bI(b4.createElement(e)).appendTo(b4.body),b3=bI.css(b2[0],"display");
b2.remove();return b3}bI.each(["height","width"],function(b2,e){bI.cssHooks[e]={get:function(b5,b4,b3){if(b4){return b5.offsetWidth===0&&F.test(bI.css(b5,"display"))?bI.swap(b5,ba,function(){return u(b5,e,b3)
}):u(b5,e,b3)}},set:function(b5,b6,b3){var b4=b3&&bn(b5);return aI(b5,b6,b3?av(b5,e,b3,bI.support.boxSizing&&bI.css(b5,"boxSizing",false,b4)==="border-box",b4):0)}}});if(!bI.support.opacity){bI.cssHooks.opacity={get:function(b2,e){return aS.test((e&&b2.currentStyle?b2.currentStyle.filter:b2.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b5,b6){var b4=b5.style,b2=b5.currentStyle,e=bI.isNumeric(b6)?"alpha(opacity="+b6*100+")":"",b3=b2&&b2.filter||b4.filter||"";b4.zoom=1;if((b6>=1||b6==="")&&bI.trim(b3.replace(bf,""))===""&&b4.removeAttribute){b4.removeAttribute("filter");
if(b6===""||b2&&!b2.filter){return}}b4.filter=bf.test(b3)?b3.replace(bf,e):b3+" "+e}}}bI(function(){if(!bI.support.reliableMarginRight){bI.cssHooks.marginRight={get:function(b2,e){if(e){return bI.swap(b2,{display:"inline-block"},E,[b2,"marginRight"])
}}}}if(!bI.support.pixelPosition&&bI.fn.position){bI.each(["top","left"],function(e,b2){bI.cssHooks[b2]={get:function(b4,b3){if(b3){b3=E(b4,b2);return V.test(b3)?bI(b4).position()[b2]+"px":b3}}}})}});if(bI.expr&&bI.expr.filters){bI.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!bI.support.reliableHiddenOffsets&&((e.style&&e.style.display)||bI.css(e,"display"))==="none")
};bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)}}bI.each({margin:"",padding:"",border:"Width"},function(e,b2){bI.cssHooks[e+b2]={expand:function(b5){var b4=0,b3={},b6=typeof b5==="string"?b5.split(" "):[b5];
for(;b4<4;b4++){b3[e+bS[b4]+b2]=b6[b4]||b6[b4-2]||b6[0]}return b3}};if(!aX.test(e)){bI.cssHooks[e+b2].set=aI}});var bu=/%20/g,aQ=/\[\]$/,T=/\r?\n/g,c=/^(?:submit|button|image|reset|file)$/i,at=/^(?:input|select|textarea|keygen)/i;
bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=bI.prop(this,"elements");return e?bI.makeArray(e):this}).filter(function(){var e=this.type;
return this.name&&!bI(this).is(":disabled")&&at.test(this.nodeName)&&!c.test(e)&&(this.checked||!q.test(e))}).map(function(e,b2){var b3=bI(this).val();return b3==null?null:bI.isArray(b3)?bI.map(b3,function(b4){return{name:b2.name,value:b4.replace(T,"\r\n")}
}):{name:b2.name,value:b3.replace(T,"\r\n")}}).get()}});bI.param=function(e,b3){var b4,b2=[],b5=function(b6,b7){b7=bI.isFunction(b7)?b7():(b7==null?"":b7);b2[b2.length]=encodeURIComponent(b6)+"="+encodeURIComponent(b7)
};if(b3===aF){b3=bI.ajaxSettings&&bI.ajaxSettings.traditional}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b5(this.name,this.value)})}else{for(b4 in e){i(b4,e[b4],b3,b5)}}return b2.join("&").replace(bu,"+")
};function i(b3,b5,b2,b4){var e;if(bI.isArray(b5)){bI.each(b5,function(b7,b6){if(b2||aQ.test(b3)){b4(b3,b6)}else{i(b3+"["+(typeof b6==="object"?b7:"")+"]",b6,b2,b4)}})}else{if(!b2&&bI.type(b5)==="object"){for(e in b5){i(b3+"["+e+"]",b5[e],b2,b4)
}}else{b4(b3,b5)}}}bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b2,e){bI.fn[e]=function(b4,b3){return arguments.length>0?this.on(e,null,b4,b3):this.trigger(e)
}});bI.fn.hover=function(e,b2){return this.mouseenter(e).mouseleave(b2||e)};var b0,X,bN=bI.now(),ay=/\?/,ao=/#.*$/,N=/([?&])_=[^&]*/,ae=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,o=/^(?:GET|HEAD)$/,aG=/^\/\//,aT=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bZ=bI.fn.load,v={},a6={},aV="*/".concat("*");
try{X=aK.href}catch(be){X=l.createElement("a");X.href="";X=X.href}b0=aT.exec(X.toLowerCase())||[];function bK(e){return function(b5,b6){if(typeof b5!=="string"){b6=b5;b5="*"}var b2,b3=0,b4=b5.toLowerCase().match(ab)||[];
if(bI.isFunction(b6)){while((b2=b4[b3++])){if(b2[0]==="+"){b2=b2.slice(1)||"*";(e[b2]=e[b2]||[]).unshift(b6)}else{(e[b2]=e[b2]||[]).push(b6)}}}}}function n(e,b3,b7,b4){var b2={},b5=(e===a6);function b6(b8){var b9;
b2[b8]=true;bI.each(e[b8]||[],function(cb,ca){var cc=ca(b3,b7,b4);if(typeof cc==="string"&&!b5&&!b2[cc]){b3.dataTypes.unshift(cc);b6(cc);return false}else{if(b5){return !(b9=cc)}}});return b9}return b6(b3.dataTypes[0])||!b2["*"]&&b6("*")
}function r(b3,b4){var e,b2,b5=bI.ajaxSettings.flatOptions||{};for(b2 in b4){if(b4[b2]!==aF){(b5[b2]?b3:(e||(e={})))[b2]=b4[b2]}}if(e){bI.extend(true,b3,e)}return b3}bI.fn.load=function(b4,b7,b8){if(typeof b4!=="string"&&bZ){return bZ.apply(this,arguments)
}var e,b3,b5,b2=this,b6=b4.indexOf(" ");if(b6>=0){e=b4.slice(b6,b4.length);b4=b4.slice(0,b6)}if(bI.isFunction(b7)){b8=b7;b7=aF}else{if(b7&&typeof b7==="object"){b5="POST"}}if(b2.length>0){bI.ajax({url:b4,type:b5,dataType:"html",data:b7}).done(function(b9){b3=arguments;
b2.html(e?bI("<div>").append(bI.parseHTML(b9)).find(e):b9)}).complete(b8&&function(ca,b9){b2.each(b8,b3||[ca.responseText,b9,ca])})}return this};bI.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b2){bI.fn[b2]=function(b3){return this.on(b2,b3)
}});bI.each(["get","post"],function(e,b2){bI[b2]=function(b3,b5,b6,b4){if(bI.isFunction(b5)){b4=b4||b6;b6=b5;b5=aF}return bI.ajax({url:b3,type:b2,dataType:b4,data:b5,success:b6})}});bI.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:X,type:"GET",isLocal:B.test(b0[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aV,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a1.String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(b2,e){return e?r(r(b2,bI.ajaxSettings),e):r(bI.ajaxSettings,b2)
},ajaxPrefilter:bK(v),ajaxTransport:bK(a6),ajax:function(b6,b3){if(typeof b6==="object"){b3=b6;b6=aF}b3=b3||{};var cf,ch,b7,cm,cb,b2,ci,b4,ca=bI.ajaxSetup({},b3),co=ca.context||ca,cd=ca.context&&(co.nodeType||co.jquery)?bI(co):bI.event,cn=bI.Deferred(),ck=bI.Callbacks("once memory"),b8=ca.statusCode||{},ce={},cl={},b5=0,b9="canceled",cg={readyState:0,getResponseHeader:function(cp){var e;
if(b5===2){if(!b4){b4={};while((e=ae.exec(cm))){b4[e[1].toLowerCase()]=e[2]}}e=b4[cp.toLowerCase()]}return e==null?null:e},getAllResponseHeaders:function(){return b5===2?cm:null},setRequestHeader:function(cp,cq){var e=cp.toLowerCase();
if(!b5){cp=cl[e]=cl[e]||cp;ce[cp]=cq}return this},overrideMimeType:function(e){if(!b5){ca.mimeType=e}return this},statusCode:function(cp){var e;if(cp){if(b5<2){for(e in cp){b8[e]=[b8[e],cp[e]]}}else{cg.always(cp[cg.status])
}}return this},abort:function(cp){var e=cp||b9;if(ci){ci.abort(e)}cc(0,e);return this}};cn.promise(cg).complete=ck.add;cg.success=cg.done;cg.error=cg.fail;ca.url=((b6||ca.url||X)+"").replace(ao,"").replace(aG,b0[1]+"//");
ca.type=b3.method||b3.type||ca.method||ca.type;ca.dataTypes=bI.trim(ca.dataType||"*").toLowerCase().match(ab)||[""];if(ca.crossDomain==null){cf=aT.exec(ca.url.toLowerCase());ca.crossDomain=!!(cf&&(cf[1]!==b0[1]||cf[2]!==b0[2]||(cf[3]||(cf[1]==="http:"?80:443))!=(b0[3]||(b0[1]==="http:"?80:443))))
}if(ca.data&&ca.processData&&typeof ca.data!=="string"){ca.data=bI.param(ca.data,ca.traditional)}n(v,ca,b3,cg);if(b5===2){return cg}b2=ca.global;if(b2&&bI.active++===0){bI.event.trigger("ajaxStart")}ca.type=ca.type.toUpperCase();
ca.hasContent=!o.test(ca.type);b7=ca.url;if(!ca.hasContent){if(ca.data){b7=(ca.url+=(ay.test(b7)?"&":"?")+ca.data);delete ca.data}if(ca.cache===false){ca.url=N.test(b7)?b7.replace(N,"$1_="+bN++):b7+(ay.test(b7)?"&":"?")+"_="+bN++
}}if(ca.ifModified){if(bI.lastModified[b7]){cg.setRequestHeader("If-Modified-Since",bI.lastModified[b7])}if(bI.etag[b7]){cg.setRequestHeader("If-None-Match",bI.etag[b7])}}if(ca.data&&ca.hasContent&&ca.contentType!==false||b3.contentType){cg.setRequestHeader("Content-Type",ca.contentType)
}cg.setRequestHeader("Accept",ca.dataTypes[0]&&ca.accepts[ca.dataTypes[0]]?ca.accepts[ca.dataTypes[0]]+(ca.dataTypes[0]!=="*"?", "+aV+"; q=0.01":""):ca.accepts["*"]);for(ch in ca.headers){cg.setRequestHeader(ch,ca.headers[ch])
}if(ca.beforeSend&&(ca.beforeSend.call(co,cg,ca)===false||b5===2)){return cg.abort()}b9="abort";for(ch in {success:1,error:1,complete:1}){cg[ch](ca[ch])}ci=n(a6,ca,b3,cg);if(!ci){cc(-1,"No Transport")}else{cg.readyState=1;
if(b2){cd.trigger("ajaxSend",[cg,ca])}if(ca.async&&ca.timeout>0){cb=setTimeout(function(){cg.abort("timeout")},ca.timeout)}try{b5=1;ci.send(ce,cc)}catch(cj){if(b5<2){cc(-1,cj)}else{throw cj}}}function cc(ct,cp,cu,cr){var e,cx,cv,cs,cw,cq=cp;
if(b5===2){return}b5=2;if(cb){clearTimeout(cb)}ci=aF;cm=cr||"";cg.readyState=ct>0?4:0;if(cu){cs=g(ca,cg,cu)}if(ct>=200&&ct<300||ct===304){if(ca.ifModified){cw=cg.getResponseHeader("Last-Modified");if(cw){bI.lastModified[b7]=cw
}cw=cg.getResponseHeader("etag");if(cw){bI.etag[b7]=cw}}if(ct===204){e=true;cq="nocontent"}else{if(ct===304){e=true;cq="notmodified"}else{e=af(ca,cs);cq=e.state;cx=e.data;cv=e.error;e=!cv}}}else{cv=cq;
if(ct||!cq){cq="error";if(ct<0){ct=0}}}cg.status=ct;cg.statusText=(cp||cq)+"";if(e){cn.resolveWith(co,[cx,cq,cg])}else{cn.rejectWith(co,[cg,cq,cv])}cg.statusCode(b8);b8=aF;if(b2){cd.trigger(e?"ajaxSuccess":"ajaxError",[cg,ca,e?cx:cv])
}ck.fireWith(co,[cg,cq]);if(b2){cd.trigger("ajaxComplete",[cg,ca]);if(!(--bI.active)){bI.event.trigger("ajaxStop")}}}return cg},getScript:function(e,b2){return bI.get(e,aF,b2,"script")},getJSON:function(e,b2,b3){return bI.get(e,b2,b3,"json")
}});function g(ca,b9,b6){var e,b5,b4,b7,b2=ca.contents,b8=ca.dataTypes,b3=ca.responseFields;for(b7 in b3){if(b7 in b6){b9[b3[b7]]=b6[b7]}}while(b8[0]==="*"){b8.shift();if(b5===aF){b5=ca.mimeType||b9.getResponseHeader("Content-Type")
}}if(b5){for(b7 in b2){if(b2[b7]&&b2[b7].test(b5)){b8.unshift(b7);break}}}if(b8[0] in b6){b4=b8[0]}else{for(b7 in b6){if(!b8[0]||ca.converters[b7+" "+b8[0]]){b4=b7;break}if(!e){e=b7}}b4=b4||e}if(b4){if(b4!==b8[0]){b8.unshift(b4)
}return b6[b4]}}function af(cc,b4){var b2,b8,ca,b5,cb={},b6=0,b9=cc.dataTypes.slice(),b3=b9[0];if(cc.dataFilter){b4=cc.dataFilter(b4,cc.dataType)}if(b9[1]){for(ca in cc.converters){cb[ca.toLowerCase()]=cc.converters[ca]
}}for(;(b8=b9[++b6]);){if(b8!=="*"){if(b3!=="*"&&b3!==b8){ca=cb[b3+" "+b8]||cb["* "+b8];if(!ca){for(b2 in cb){b5=b2.split(" ");if(b5[1]===b8){ca=cb[b3+" "+b5[0]]||cb["* "+b5[0]];if(ca){if(ca===true){ca=cb[b2]
}else{if(cb[b2]!==true){b8=b5[0];b9.splice(b6--,0,b8)}}break}}}}if(ca!==true){if(ca&&cc["throws"]){b4=ca(b4)}else{try{b4=ca(b4)}catch(b7){return{state:"parsererror",error:ca?b7:"No conversion from "+b3+" to "+b8}
}}}}b3=b8}}return{state:"success",data:b4}}bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bI.globalEval(e);
return e}}});bI.ajaxPrefilter("script",function(e){if(e.cache===aF){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});bI.ajaxTransport("script",function(b3){if(b3.crossDomain){var e,b2=l.head||bI("head")[0]||l.documentElement;
return{send:function(b4,b5){e=l.createElement("script");e.async=true;if(b3.scriptCharset){e.charset=b3.scriptCharset}e.src=b3.url;e.onload=e.onreadystatechange=function(b7,b6){if(b6||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)}e=null;if(!b6){b5(200,"success")}}};b2.insertBefore(e,b2.firstChild)},abort:function(){if(e){e.onload(aF,true)}}}}});var bp=[],a4=/(=)\?(?=&|$)|\?\?/;bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bp.pop()||(bI.expando+"_"+(bN++));
this[e]=true;return e}});bI.ajaxPrefilter("json jsonp",function(b4,e,b5){var b7,b2,b3,b6=b4.jsonp!==false&&(a4.test(b4.url)?"url":typeof b4.data==="string"&&!(b4.contentType||"").indexOf("application/x-www-form-urlencoded")&&a4.test(b4.data)&&"data");
if(b6||b4.dataTypes[0]==="jsonp"){b7=b4.jsonpCallback=bI.isFunction(b4.jsonpCallback)?b4.jsonpCallback():b4.jsonpCallback;if(b6){b4[b6]=b4[b6].replace(a4,"$1"+b7)}else{if(b4.jsonp!==false){b4.url+=(ay.test(b4.url)?"&":"?")+b4.jsonp+"="+b7
}}b4.converters["script json"]=function(){if(!b3){bI.error(b7+" was not called")}return b3[0]};b4.dataTypes[0]="json";b2=a1[b7];a1[b7]=function(){b3=arguments};b5.always(function(){a1[b7]=b2;if(b4[b7]){b4.jsonpCallback=e.jsonpCallback;
bp.push(b7)}if(b3&&bI.isFunction(b2)){b2(b3[0])}b3=b2=aF});return"script"}});var ag,aw,ax=0,aO=a1.ActiveXObject&&function(){var e;for(e in ag){ag[e](aF,true)}};function bC(){try{return new a1.XMLHttpRequest()
}catch(b2){}}function bc(){try{return new a1.ActiveXObject("Microsoft.XMLHTTP")}catch(b2){}}bI.ajaxSettings.xhr=a1.ActiveXObject?function(){return !this.isLocal&&bC()||bc()}:bC;aw=bI.ajaxSettings.xhr();
bI.support.cors=!!aw&&("withCredentials" in aw);aw=bI.support.ajax=!!aw;if(aw){bI.ajaxTransport(function(e){if(!e.crossDomain||bI.support.cors){var b2;return{send:function(b8,b3){var b6,b4,b7=e.xhr();if(e.username){b7.open(e.type,e.url,e.async,e.username,e.password)
}else{b7.open(e.type,e.url,e.async)}if(e.xhrFields){for(b4 in e.xhrFields){b7[b4]=e.xhrFields[b4]}}if(e.mimeType&&b7.overrideMimeType){b7.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!b8["X-Requested-With"]){b8["X-Requested-With"]="XMLHttpRequest"
}try{for(b4 in b8){b7.setRequestHeader(b4,b8[b4])}}catch(b5){}b7.send((e.hasContent&&e.data)||null);b2=function(cb,ca){var b9,cc,cf,cd;try{if(b2&&(ca||b7.readyState===4)){b2=aF;if(b6){b7.onreadystatechange=bI.noop;
if(aO){delete ag[b6]}}if(ca){if(b7.readyState!==4){b7.abort()}}else{cd={};b9=b7.status;cc=b7.getAllResponseHeaders();if(typeof b7.responseText==="string"){cd.text=b7.responseText}try{cf=b7.statusText}catch(ce){cf=""
}if(!b9&&e.isLocal&&!e.crossDomain){b9=cd.text?200:404}else{if(b9===1223){b9=204}}}}}catch(cg){if(!ca){b3(-1,cg)}}if(cd){b3(b9,cf,cd,cc)}};if(!e.async){b2()}else{if(b7.readyState===4){setTimeout(b2)}else{b6=++ax;
if(aO){if(!ag){ag={};bI(a1).unload(aO)}ag[b6]=b2}b7.onreadystatechange=b2}}},abort:function(){if(b2){b2(aF,true)}}}}})}var J,ac,bQ=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([+-])=|)("+bz+")([a-z%]*)$","i"),bP=/queueHooks$/,aA=[h],aZ={"*":[function(e,b8){var b4,b9,ca=this.createTween(e,b8),b5=bJ.exec(b8),b6=ca.cur(),b2=+b6||0,b3=1,b7=20;
if(b5){b4=+b5[2];b9=b5[3]||(bI.cssNumber[e]?"":"px");if(b9!=="px"&&b2){b2=bI.css(ca.elem,e,true)||b4||1;do{b3=b3||".5";b2=b2/b3;bI.style(ca.elem,e,b2+b9)}while(b3!==(b3=ca.cur()/b6)&&b3!==1&&--b7)}ca.unit=b9;
ca.start=b2;ca.end=b5[1]?b2+(b5[1]+1)*b4:b4}return ca}]};function bl(){setTimeout(function(){J=aF});return(J=bI.now())}function bd(b2,e){bI.each(e,function(b7,b5){var b6=(aZ[b7]||[]).concat(aZ["*"]),b3=0,b4=b6.length;
for(;b3<b4;b3++){if(b6[b3].call(b2,b7,b5)){return}}})}function f(b3,b7,ca){var cb,e,b6=0,b2=aA.length,b9=bI.Deferred().always(function(){delete b5.elem}),b5=function(){if(e){return false}var ch=J||bl(),ce=Math.max(0,b4.startTime+b4.duration-ch),cc=ce/b4.duration||0,cg=1-cc,cd=0,cf=b4.tweens.length;
for(;cd<cf;cd++){b4.tweens[cd].run(cg)}b9.notifyWith(b3,[b4,cg,ce]);if(cg<1&&cf){return ce}else{b9.resolveWith(b3,[b4]);return false}},b4=b9.promise({elem:b3,props:bI.extend({},b7),opts:bI.extend(true,{specialEasing:{}},ca),originalProperties:b7,originalOptions:ca,startTime:J||bl(),duration:ca.duration,tweens:[],createTween:function(ce,cc){var cd=bI.Tween(b3,b4.opts,ce,cc,b4.opts.specialEasing[ce]||b4.opts.easing);
b4.tweens.push(cd);return cd},stop:function(cd){var cc=0,ce=cd?b4.tweens.length:0;if(e){return this}e=true;for(;cc<ce;cc++){b4.tweens[cc].run(1)}if(cd){b9.resolveWith(b3,[b4,cd])}else{b9.rejectWith(b3,[b4,cd])
}return this}}),b8=b4.props;al(b8,b4.opts.specialEasing);for(;b6<b2;b6++){cb=aA[b6].call(b4,b3,b8,b4.opts);if(cb){return cb}}bd(b4,b8);if(bI.isFunction(b4.opts.start)){b4.opts.start.call(b3,b4)}bI.fx.timer(bI.extend(b5,{elem:b3,anim:b4,queue:b4.opts.queue}));
return b4.progress(b4.opts.progress).done(b4.opts.done,b4.opts.complete).fail(b4.opts.fail).always(b4.opts.always)}function al(b4,b6){var b5,b3,b2,b7,e;for(b2 in b4){b3=bI.camelCase(b2);b7=b6[b3];b5=b4[b2];
if(bI.isArray(b5)){b7=b5[1];b5=b4[b2]=b5[0]}if(b2!==b3){b4[b3]=b5;delete b4[b2]}e=bI.cssHooks[b3];if(e&&"expand" in e){b5=e.expand(b5);delete b4[b3];for(b2 in b5){if(!(b2 in b4)){b4[b2]=b5[b2];b6[b2]=b7
}}}else{b6[b3]=b7}}}bI.Animation=bI.extend(f,{tweener:function(b2,b5){if(bI.isFunction(b2)){b5=b2;b2=["*"]}else{b2=b2.split(" ")}var b4,e=0,b3=b2.length;for(;e<b3;e++){b4=b2[e];aZ[b4]=aZ[b4]||[];aZ[b4].unshift(b5)
}},prefilter:function(b2,e){if(e){aA.unshift(b2)}else{aA.push(b2)}}});function h(b5,cb,e){var b3,ca,b4,cd,ch,b7,cg,cf,ce,b6=this,b2=b5.style,cc={},b9=[],b8=b5.nodeType&&O(b5);if(!e.queue){cf=bI._queueHooks(b5,"fx");
if(cf.unqueued==null){cf.unqueued=0;ce=cf.empty.fire;cf.empty.fire=function(){if(!cf.unqueued){ce()}}}cf.unqueued++;b6.always(function(){b6.always(function(){cf.unqueued--;if(!bI.queue(b5,"fx").length){cf.empty.fire()
}})})}if(b5.nodeType===1&&("height" in cb||"width" in cb)){e.overflow=[b2.overflow,b2.overflowX,b2.overflowY];if(bI.css(b5,"display")==="inline"&&bI.css(b5,"float")==="none"){if(!bI.support.inlineBlockNeedsLayout||bD(b5.nodeName)==="inline"){b2.display="inline-block"
}else{b2.zoom=1}}}if(e.overflow){b2.overflow="hidden";if(!bI.support.shrinkWrapBlocks){b6.always(function(){b2.overflow=e.overflow[0];b2.overflowX=e.overflow[1];b2.overflowY=e.overflow[2]})}}for(ca in cb){cd=cb[ca];
if(bQ.exec(cd)){delete cb[ca];b7=b7||cd==="toggle";if(cd===(b8?"hide":"show")){continue}b9.push(ca)}}b4=b9.length;if(b4){ch=bI._data(b5,"fxshow")||bI._data(b5,"fxshow",{});if("hidden" in ch){b8=ch.hidden
}if(b7){ch.hidden=!b8}if(b8){bI(b5).show()}else{b6.done(function(){bI(b5).hide()})}b6.done(function(){var ci;bI._removeData(b5,"fxshow");for(ci in cc){bI.style(b5,ci,cc[ci])}});for(ca=0;ca<b4;ca++){b3=b9[ca];
cg=b6.createTween(b3,b8?ch[b3]:0);cc[b3]=ch[b3]||bI.style(b5,b3);if(!(b3 in ch)){ch[b3]=cg.start;if(b8){cg.end=cg.start;cg.start=b3==="width"||b3==="height"?1:0}}}}}function G(b3,b2,b5,e,b4){return new G.prototype.init(b3,b2,b5,e,b4)
}bI.Tween=G;G.prototype={constructor:G,init:function(b4,b2,b6,e,b5,b3){this.elem=b4;this.prop=b6;this.easing=b5||"swing";this.options=b2;this.start=this.now=this.cur();this.end=e;this.unit=b3||(bI.cssNumber[b6]?"":"px")
},cur:function(){var e=G.propHooks[this.prop];return e&&e.get?e.get(this):G.propHooks._default.get(this)},run:function(b3){var b2,e=G.propHooks[this.prop];if(this.options.duration){this.pos=b2=bI.easing[this.easing](b3,this.options.duration*b3,0,1,this.options.duration)
}else{this.pos=b2=b3}this.now=(this.end-this.start)*b2+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(e&&e.set){e.set(this)}else{G.propHooks._default.set(this)}return this
}};G.prototype.init.prototype=G.prototype;G.propHooks={_default:{get:function(b2){var e;if(b2.elem[b2.prop]!=null&&(!b2.elem.style||b2.elem.style[b2.prop]==null)){return b2.elem[b2.prop]}e=bI.css(b2.elem,b2.prop,"");
return !e||e==="auto"?0:e},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now}}}}};G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};bI.each(["toggle","show","hide"],function(b2,e){var b3=bI.fn[e];
bI.fn[e]=function(b4,b6,b5){return b4==null||typeof b4==="boolean"?b3.apply(this,arguments):this.animate(bH(e,true),b4,b6,b5)}});bI.fn.extend({fadeTo:function(e,b4,b3,b2){return this.filter(O).css("opacity",0).show().end().animate({opacity:b4},e,b3,b2)
},animate:function(b7,b4,b6,b5){var b3=bI.isEmptyObject(b7),e=bI.speed(b4,b6,b5),b2=function(){var b8=f(this,bI.extend({},b7),e);b2.finish=function(){b8.stop(true)};if(b3||bI._data(this,"finish")){b8.stop(true)
}};b2.finish=b2;return b3||e.queue===false?this.each(b2):this.queue(e.queue,b2)},stop:function(b3,b2,e){var b4=function(b5){var b6=b5.stop;delete b5.stop;b6(e)};if(typeof b3!=="string"){e=b2;b2=b3;b3=aF
}if(b2&&b3!==false){this.queue(b3||"fx",[])}return this.each(function(){var b8=true,b5=b3!=null&&b3+"queueHooks",b7=bI.timers,b6=bI._data(this);if(b5){if(b6[b5]&&b6[b5].stop){b4(b6[b5])}}else{for(b5 in b6){if(b6[b5]&&b6[b5].stop&&bP.test(b5)){b4(b6[b5])
}}}for(b5=b7.length;b5--;){if(b7[b5].elem===this&&(b3==null||b7[b5].queue===b3)){b7[b5].anim.stop(e);b8=false;b7.splice(b5,1)}}if(b8||!e){bI.dequeue(this,b3)}})},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b4,b7=bI._data(this),b3=b7[e+"queue"],b2=b7[e+"queueHooks"],b6=bI.timers,b5=b3?b3.length:0;b7.finish=true;bI.queue(this,e,[]);if(b2&&b2.cur&&b2.cur.finish){b2.cur.finish.call(this)
}for(b4=b6.length;b4--;){if(b6[b4].elem===this&&b6[b4].queue===e){b6[b4].anim.stop(true);b6.splice(b4,1)}}for(b4=0;b4<b5;b4++){if(b3[b4]&&b3[b4].finish){b3[b4].finish.call(this)}}delete b7.finish})}});
function bH(b3,b5){var b4,e={height:b3},b2=0;b5=b5?1:0;for(;b2<4;b2+=2-b5){b4=bS[b2];e["margin"+b4]=e["padding"+b4]=b3}if(b5){e.opacity=e.width=b3}return e}bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b2){bI.fn[e]=function(b3,b5,b4){return this.animate(b2,b3,b5,b4)
}});bI.speed=function(b3,b4,b2){var e=b3&&typeof b3==="object"?bI.extend({},b3):{complete:b2||!b2&&b4||bI.isFunction(b3)&&b3,duration:b3,easing:b2&&b4||b4&&!bI.isFunction(b4)&&b4};e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)}if(e.queue){bI.dequeue(this,e.queue)}};return e};bI.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2}};bI.timers=[];bI.fx=G.prototype.init;bI.fx.tick=function(){var b3,b2=bI.timers,e=0;J=bI.now();for(;e<b2.length;e++){b3=b2[e];if(!b3()&&b2[e]===b3){b2.splice(e--,1)
}}if(!b2.length){bI.fx.stop()}J=aF};bI.fx.timer=function(e){if(e()&&bI.timers.push(e)){bI.fx.start()}};bI.fx.interval=13;bI.fx.start=function(){if(!ac){ac=setInterval(bI.fx.tick,bI.fx.interval)}};bI.fx.stop=function(){clearInterval(ac);
ac=null};bI.fx.speeds={slow:600,fast:200,_default:400};bI.fx.step={};if(bI.expr&&bI.expr.filters){bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(b2){return e===b2.elem}).length}
}bI.fn.offset=function(b2){if(arguments.length){return b2===aF?this:this.each(function(b7){bI.offset.setOffset(this,b2,b7)})}var e,b6,b4={top:0,left:0},b3=this[0],b5=b3&&b3.ownerDocument;if(!b5){return
}e=b5.documentElement;if(!bI.contains(e,b3)){return b4}if(typeof b3.getBoundingClientRect!==aB){b4=b3.getBoundingClientRect()}b6=bo(b5);return{top:b4.top+(b6.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b4.left+(b6.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
};bI.offset={setOffset:function(b4,cd,b7){var b8=bI.css(b4,"position");if(b8==="static"){b4.style.position="relative"}var b6=bI(b4),b2=b6.offset(),e=bI.css(b4,"top"),cb=bI.css(b4,"left"),cc=(b8==="absolute"||b8==="fixed")&&bI.inArray("auto",[e,cb])>-1,ca={},b9={},b3,b5;
if(cc){b9=b6.position();b3=b9.top;b5=b9.left}else{b3=parseFloat(e)||0;b5=parseFloat(cb)||0}if(bI.isFunction(cd)){cd=cd.call(b4,b7,b2)}if(cd.top!=null){ca.top=(cd.top-b2.top)+b3}if(cd.left!=null){ca.left=(cd.left-b2.left)+b5
}if("using" in cd){cd.using.call(b4,ca)}else{b6.css(ca)}}};bI.fn.extend({position:function(){if(!this[0]){return}var b3,b4,e={top:0,left:0},b2=this[0];if(bI.css(b2,"position")==="fixed"){b4=b2.getBoundingClientRect()
}else{b3=this.offsetParent();b4=this.offset();if(!bI.nodeName(b3[0],"html")){e=b3.offset()}e.top+=bI.css(b3[0],"borderTopWidth",true);e.left+=bI.css(b3[0],"borderLeftWidth",true)}return{top:b4.top-e.top-bI.css(b2,"marginTop",true),left:b4.left-e.left-bI.css(b2,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||l.documentElement;while(e&&(!bI.nodeName(e,"html")&&bI.css(e,"position")==="static")){e=e.offsetParent}return e||l.documentElement
})}});bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b3,b2){var e=/Y/.test(b2);bI.fn[b3]=function(b4){return bI.access(this,function(b5,b8,b7){var b6=bo(b5);if(b7===aF){return b6?(b2 in b6)?b6[b2]:b6.document.documentElement[b8]:b5[b8]
}if(b6){b6.scrollTo(!e?b7:bI(b6).scrollLeft(),e?b7:bI(b6).scrollTop())}else{b5[b8]=b7}},b3,b4,arguments.length,null)}});function bo(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bI.each({Height:"height",Width:"width"},function(e,b2){bI.each({padding:"inner"+e,content:b2,"":"outer"+e},function(b3,b4){bI.fn[b4]=function(b8,b7){var b6=arguments.length&&(b3||typeof b8!=="boolean"),b5=b3||(b8===true||b7===true?"margin":"border");
return bI.access(this,function(ca,b9,cb){var cc;if(bI.isWindow(ca)){return ca.document.documentElement["client"+e]}if(ca.nodeType===9){cc=ca.documentElement;return Math.max(ca.body["scroll"+e],cc["scroll"+e],ca.body["offset"+e],cc["offset"+e],cc["client"+e])
}return cb===aF?bI.css(ca,b9,b5):bI.style(ca,b9,cb,b5)},b2,b6?b8:aF,b6,null)}})});a1.jQuery=a1.OhmJquery=bI;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bI
})}})(window);

//config
if (location.href.indexOf("localhost:8888") != -1) {
	var urlOhm = "http://localhost:8888/";
} else {
	var urlOhm = "http://ads.ohm.vn/";
}
var nameOhm = "__ohm__";
var tohm = "__tohm__";
var nameColorOhm = "__color__";
var nameCheckOhm= "__check__";
var clOhm = "FF171F";
var colorOhm = "color:#"+clOhm;
var loginOHM = "http://account.ohm.vn/login";
var registerOHM = "http://account.ohm.vn/register";
var logoutohm = urlOhm + "logout";
var ohmObj = {};
var ohmObjRemove = [];
var ohmLinkClick = [];
var ohmRegister = "<span style='color:white;font-size:13px;cursor: pointer;text-decoration: none !important;display: inline-block !important;' class='gotourl'>Trang web hiện tại đang sử dụng hệ thống khai thác OTA của OHM. Hãy đăng nhập hoặc đăng ký vào hệ thống của OHM để có thể nhận được OTA." +
		 		"<br/><br/><span onclick='return locations(\""+loginOHM+"\")'  style='color:#E4FFAD;text-decoration: none; font-size: 16px;'>Đăng nhập</span> -- " +
		 				"<span onclick='return locations(\""+registerOHM+"\")' style='color:#E4FFAD;text-decoration: none; font-size: 16px;'>Đăng ký</span></span>";

OhmJquery(document).ready(function() {
	if (getCookie(nameColorOhm) != "") {
		clOhm = getCookie(nameColorOhm);
	}
	
	if (getCookie(nameCheckOhm) == "off") {
		colorOhm = "";
	} else {
		colorOhm = "color:#"+clOhm;
	}
	
	var a = getParameterByName("a");
	
	if (a == "" || a == null) {
		loadKeyword();		
	}
});
function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
    	if (o.hasOwnProperty(key)) {
    		a.push(key);
    	}
    }

    a.sort(function(a, b){
    	  return b.length - a.length;
    });

    for (key = 0; key < a.length; key++) {
    	sorted[a[key]] = o[a[key]];
    }
    return sorted;
}
function loadKeyword() {
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('link');
 
	link.type = "text/css";
	link.rel = "stylesheet"
	link.href = urlOhm+"tip-yellow.css";
	
	head.appendChild(link);
	
	link.onload = function () {
		OhmJquery.ajax({
    		url : urlOhm+"keyword?url="+location.href+"&p="+pubId,
    		dataType: 'jsonp',
    		contentType: "application/json",
    		jsonpCallback: 'jsonCallbackOhm',
    		success : function(result) {	
    			var obj = result ;
    			var selector = obj.selector; 
    			var text = OhmJquery(selector).html();
    			var domain = window.location.host;
    			
    			if(typeof obj.username !== "undefined" && getCookie(nameOhm) == "") {
    				setCookie(nameOhm, "login", 30*24*60*60*1000);
    				window.location = location.href;
    			}
    			
    			var interval = setInterval(function(){ 
    				if(OhmJquery("#avatarOhm").attr("id") == "avatarOhm") {
    					clearInterval(interval);
    					OhmJquery("#avatarOhm").html("<img style='border-radius:30px;-moz-border-radius:30px;-webkit-border-radius:30px;border:3px solid while;' src='"+obj.avatar+"'>");
    					OhmJquery("#usernameOhm").html("<a href='http://account.ohm.vn/account' target='_blank'>"+obj.username+"</a>");
    				}
    				if(typeof obj.username === "undefined") {
    					clearInterval(interval);
    					if (getCookie(nameOhm) != "") {
    						eraseCookie(nameOhm, "/", document.domain);
    						window.location = location.href;
    					}
    				}
    			}, 300);
    			
    			if (getCookie(nameOhm) != "") {
	    			OhmJquery.each( obj.url, function( key, val ) {
	    				key = key.replace('http://','');
	    			  	key = key.replace('https://','');
	    			  	key = key.replace(domain,'');
	    				var pattern = '<a([^>]*)href=([\"\'])([^>]*)('+key+')([\"\'])([^>]*)>(.*?)<\/a>';  //([^\0]*?)
	    				
	    				var exp = new RegExp(pattern, "ig");
	    				
	    				text = text.replace(exp, "<a$1href=$2$3$4$5 $6 onclick='return gotoota(\""+val[0].url+"\", this);'><span style='background: url(\""+urlOhm+"/images/ota2.png\") no-repeat !important;' class='ota-ohm tooltip-hint-ohm' data='"+val[0].ota+" OTA'>&nbsp;</span> $7</a>"); 
	
	    			});
    			}
    			
    			var ohmSortKey = sortObject(obj.keyword);
    			
    			var kohm = 0;
    			OhmJquery.each( ohmSortKey, function( key, val ) {
    				var ohmValue = "";
    				var valohm = val.length;
    				OhmJquery.each( val, function( key, val ) {
    					ohmValue = ohmValue +"<span class='tooltip-oat-ohm-text' title='"+val.name+"'><span id='ohmblock"+kohm+"' class='gotourl' onclick='return gotoota(\""+val.url+"&p="+pubId+"\", this);' ><span class='abc'> "+val.name+"</span> <span class='plusota'>+ "+val.ota+" <img src='"+urlOhm+"images/dtohm.png' /></span></span></span>";
    					kohm++;
	    			}); 
    				ohmObj[key.toLowerCase()] = ohmValue;
    				
					var pattern = '>([^<^>]*)([.,?:;!#$% ]){1}('+key+')([.,?:;!#$% ]{1})([^<^>]*)<';

					var exp = new RegExp(pattern, "ig"); 

					text = text.replace(new RegExp("[>]{1}", "ig"),">?");
					text = text.replace(new RegExp("[<]{1}", "ig"),"?<");
					text = text.replace(exp, ">$1$2<span class='ohm-tooltip' style='"+colorOhm+";cursor: pointer'>$3</span>$4$5<"); 
					text = text.replace(new RegExp("[>]{1}[?]{1}", "ig"),">");
					text = text.replace(new RegExp("[?]{1}[<]{1}", "ig"),"<");

    			});

    			var ptag = document.querySelectorAll(selector); 
    		
    			ptag[0].innerHTML =text; 
    			
    			ohmToolTip (); 
    		},
    		beforeSend: function( xhr ) {
    			xhr.overrideMimeType( "text/plain; charset=utf-8" );
    		}
    	});
		
	}
}

function gotoota(url, obj){
	var check = false;
	if(OhmJquery(obj).find("span").eq(0).attr("class") == "ota-ohm tooltip-hint-ohm") {
		OhmJquery.each(ohmLinkClick, function(key, val){
			if (val == OhmJquery(obj).attr("href")) {
				check = true;
				alert("Bạn đã nhận OTA từ link này, bạn không thể nhận tiếp OTA.");
				window.location = val;
			}
		});
		if (!check) {
			ohmLinkClick.push(OhmJquery(obj).attr("href"));
		}
	} 
	if (!check) {
		if (OhmJquery(obj).attr("id") != "ohmnone") {
			ohmObjRemove.push(OhmJquery(obj).attr("id"));
			var tab=window.open(url,'_blank'); 
			tab.focus();  	
		} else {
			alert("Bạn đã click từ khoá này, bạn chỉ được phép click tiếp sau 24h.");
		}
	}
	return false;
}

function locations(url) {
	window.location = url;
	return false;
}

function reload(){
	window.location = location.href;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; domain="+document.domain+"; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie (name,path,domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path == null) ? "" : "; path=" + path) +
		((domain == null) ? "" : "; domain=" + domain) +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}


function getParameterByName(name) {
	if (document.referrer.indexOf(loginOHM) != -1 || document.referrer.indexOf(registerOHM) != -1) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),   
	        results = regex.exec(document.referrer);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	return "";
}

function logout(info) {
	eraseCookie(nameOhm, "/", document.domain);
	OhmJquery("#ohm_exit").remove();
	history.pushState(null, "title 1", "");

	OhmJquery.ajax({
		url : logoutohm,
		dataType: 'jsonp',
		contentType: "application/json",
		jsonpCallback: 'jsonCallbackOhm',
		success : function(result) {	
			if (result.logoutohm == "success") {
				if(info != "noinfo")
					setCookie("logout", "true", 20000);
				window.location=location.href;
			}
		},
		beforeSend: function( xhr ) {
			xhr.overrideMimeType( "text/plain; charset=utf-8" );
		}
	});
}

function changeColor() {
	if (getCookie(nameCheckOhm)=="off") {
		setCookie(nameCheckOhm, "on", 30*24*60*60*1000);
		OhmJquery(".slideOhm").css('left','24px');
		OhmJquery(".ohm-tooltip").css("color","#"+clOhm);
		OhmJquery("#onOhm").css("background-color", "#26788C");
	} else {
		setCookie(nameCheckOhm, "off", 30*24*60*60*1000);
		OhmJquery(".slideOhm").css('left','2px');
		OhmJquery(".ohm-tooltip").css("color","");
		OhmJquery("#onOhm").css("background-color", "red");
	}
}

function rgb2hex(rgb){
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "" +
	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}
function changeColorFromPicker(vthis) {
	clOhm = rgb2hex(vthis.style.backgroundColor);
	setCookie(nameColorOhm, clOhm, 30*24*60*60*1000);	
	if (getCookie(nameCheckOhm)=="on") {
		OhmJquery(".ohm-tooltip").css("color","#"+clOhm);
		OhmJquery(".ohmcolor").css("background","#"+clOhm);
	} else {
		OhmJquery(".ohmcolor").css("background","#"+clOhm);
	}
}

function toolbarOhm() {
	OhmJquery("#toolbar-ohm").toggle();
}

function openPicker() {
	OhmJquery(".colorTableOhm").toggle();
}

function checkCookie() {
	if(getCookie(nameCheckOhm)=="") {
		setCookie(nameCheckOhm, "on", 30*24*60*60*1000);
	}
	var a = getParameterByName("a");

	if (a != "") {
		setCookie(nameOhm, "login", 30*24*60*60*1000);
		history.pushState(null, "title 1", "");
		
		setTimeout(function(){ 
			OhmJquery("body").append("<div id='ohm-popup'>Bạn vừa đăng nhập vào hệ thống OHM, bạn có thể tiến hành việc khau thác OTA.</div>");
		}, 1000);		
		
		setTimeout(function(){ 
			OhmJquery("#ohm-popup").remove();
		}, 5000);

		loadKeyword();
	}

	if (getCookie("logout") != "") {	
		setTimeout(function(){ 
			OhmJquery("body").append("<div id='ohm-popup'>Bạn đã thoát khỏi hệ thống OHM, hẹn gặp lại bạn trong thời gian sớm nhất.</div>");

		}, 1000);		
		
		setTimeout(function(){ 
			OhmJquery("#ohm-popup").remove();
		}, 5000);
		eraseCookie("logout", "/", document.domain);
	}	
	if (getCookie(nameColorOhm) != "")
		clOhm = getCookie(nameColorOhm);
	
    if (getCookie(nameOhm) != "") {
		OhmJquery("body").append("<div style='position: fixed;right: 10px;top:10px;cursor: pointer;z-index:9;' id='ohm_exit'>" +
				"<img style='float:right;margin-left:20px;' src='"+urlOhm+"images/ohm.png' width='28' onclick='toolbarOhm()'/>" +
				"<div style='display:none;float:left;' id='toolbar-ohm'>" +
					"<ul class='danhmuc'>" +
						"<li>" +
							"<div class='avatar' id='avatarOhm'>" +
								
							"</div>" +
							"<div class='name' id='usernameOhm'>" +
								
							"</div>" +
						"</li>" +
						"<li style='margin-top:5px;'>" +
							"<div class='box1'>" +
								"<span style='background:url("+urlOhm+"images/folder.png) no-repeat;padding-left:20px;'>Từ khoá</span>" +
							"</div>" +
							"<div class='not'>" +
								"<span class='button' id='onOhm' onclick='changeColor()'>" +
									"<a href='javascript:void(0)' class='off'  id='offOhm'>On</a>" +
									"<a href='javascript:void(0)' class='on' >Off</a>" +
									"<span class='slideOhm'></span>" +
								"</span>" +
							"</div>" +
						"</li>" +
						"<li>" +
							"<div class='box1'>" +
								"<span style='background:url("+urlOhm+"images/paint.png) no-repeat;padding-left:20px;'>Màu sắc</span> " +
								"</div>" +
								"<div class='chonmau' id='ohmcolor'>" +
									"<ul class='colorTableOhm'><li  onclick='changeColorFromPicker(this)' style='background:#FFF593;'></li><li  onclick='changeColorFromPicker(this)' style='background-color:#EA4E01;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#CD4803;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#E7002A;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#933907;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#7F8D98;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#AFAEB3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#C80084;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#741186;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#1B0051;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#4F250D;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#240000;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#BBB1D6;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#3580C3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#0059A9;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#003B77;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#5DC6F3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01A5EC;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#014EA0;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#2E1D87;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#0AB4CE;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#4EB693;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#2BAA5B;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01994C;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#008991;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#C9D301;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#97C000;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#00A131;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01832D;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#016821;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#012F08;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#F1B0CE;'></li> 	</ul>" +
									"<div class='none ohmcolor' onclick='openPicker()' style='background:#"+clOhm+";color:"+clOhm+"' ></div>" +
								"</div>" +
						"</li>" +
						"<li><div class='box1'><a href='javascript:void(0)' onclick='logout(\"info\")'><span style='background:url("+urlOhm+"images/logout.png) no-repeat;padding-left:20px;'>Đăng xuất</span></a></div></li></ul>" +
			 "</div></div>");	
    } else {
    	OhmJquery("body").append("<div style='position: fixed;right: 10px;top:10px;cursor: pointer;z-index:9;' id='ohm_exit'>" +
				"<img style='float:right;margin-left:20px;' src='"+urlOhm+"images/ohm-off.png' width='28' onclick='toolbarOhm()'/>" +
				"<div style='display:none;float:left;' id='toolbar-ohm'>" +
					"<ul class='danhmuc'>" +
						"<li style='margin-top:5px;'>" +
							"<div class='box1'>" +
								"<span style='background:url("+urlOhm+"images/folder.png) no-repeat;padding-left:20px;'>Từ khoá</span>" +
							"</div>" +
							"<div class='not'>" +
								"<span class='button' id='onOhm' onclick='changeColor()'>" +
									"<a href='javascript:void(0)' class='off'  id='offOhm'>On</a>" +
									"<a href='javascript:void(0)' class='on' >Off</a>" +
									"<span class='slideOhm'></span>" +
								"</span>" +
							"</div>" +
						"</li>" +
						"<li>" +
							"<div class='box1'>" +
								"<span style='background:url("+urlOhm+"images/paint.png) no-repeat;padding-left:20px;'>Màu sắc</span>" +
						"</div>" +
						"<div class='chonmau' id='ohmcolor'>" +
							"<ul class='colorTableOhm'><li  onclick='changeColorFromPicker(this)' style='background:#FFF593;'></li><li  onclick='changeColorFromPicker(this)' style='background-color:#EA4E01;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#CD4803;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#E7002A;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#933907;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#7F8D98;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#AFAEB3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#C80084;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#741186;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#1B0051;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#4F250D;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#240000;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#BBB1D6;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#3580C3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#0059A9;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#003B77;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#5DC6F3;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01A5EC;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#014EA0;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#2E1D87;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#0AB4CE;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#4EB693;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#2BAA5B;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01994C;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#008991;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#C9D301;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#97C000;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#00A131;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#01832D;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#016821;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#012F08;'></li> 		<li  onclick='changeColorFromPicker(this)' style='background-color:#F1B0CE;'></li> 	</ul>" +
							"<div class='none ohmcolor' onclick='openPicker()' style='background:#"+clOhm+";color:"+clOhm+"' ></div>" +
						"</div>" +
					"</li>" +
					"</ul>" +
			 "</div></div>");
    		OhmJquery(".colorTableOhm").css('top','80px');
    }
    
    if(getCookie(nameCheckOhm) == "on") {
		OhmJquery(".slideOhm").css('left','24px');
		OhmJquery("#onOhm").css("background-color", "#26788C");
	} else {
		OhmJquery(".slideOhm").css('left','2px');
		OhmJquery("#onOhm").css("background-color", "red");
	}
    
    OhmJquery(document).click(function(e){
        if (OhmJquery(e.target).closest(".colorTableOhm").length == 0 
        		&& OhmJquery(e.target).closest(".ohmcolor").length == 0 
        		&& OhmJquery(e.target).closest("#ohm_exit").length == 0
        	) {
        	OhmJquery(".colorTableOhm").css('display','none');
        	OhmJquery("#toolbar-ohm").css('display','none');
        }
    });
}

function ohmToolTip () {
	var ohmKey; 
	var timeouts = [];
	var ohmTimeout;

	OhmJquery("body").append("<div  id='ohm-tooltip'></div>");
	
	OhmJquery( ".ohm-tooltip" )
    	.mouseenter(function(event) {
    		var ohmOffset = OhmJquery(this).offset();  		

    		var leftThis = ohmOffset.left;
    		var topThis = ohmOffset.top;    		
    		
    		ohmKey = OhmJquery(this).text().toLowerCase();
    		if (OhmJquery("#ohm-tooltip").html() != ohmObj[ohmKey]) {
    			if (getCookie(nameOhm) != "") {
    				var html = ohmObj[ohmKey]; 
    				OhmJquery.each(ohmObjRemove, function(key, val){
    					html = html.replace(val, "ohmnone");
    				});
    				OhmJquery("#ohm-tooltip").html( html );
    			} else {
    				OhmJquery("#ohm-tooltip").html( ohmRegister );
    			}
    		} 

    		var ohmLeft = leftThis - (OhmJquery("#ohm-tooltip").width()/2) + (OhmJquery(this).width()/2);
    		
    		if (leftThis < OhmJquery("#ohm-tooltip").width()/2) {
    			ohmLeft = 0;
    		}
    	
    		if ( (leftThis + OhmJquery("#ohm-tooltip").width() ) > OhmJquery(window).width()) {
    			ohmLeft = OhmJquery(window).width() - OhmJquery("#ohm-tooltip").width() - 30;
    		}
    		
    		var ohmTop = topThis - (OhmJquery("#ohm-tooltip").height()) - OhmJquery(this).height();
    		
    		if ((ohmTop - OhmJquery(document).scrollTop()) < 0) {
    			ohmTop = topThis + 20;
    		}
    		
    		for (var i = 0; i <= timeouts.length; i++) {
    		    clearTimeout(timeouts[i]);
    		}
    		timeouts = [];
    		
    		if (event.pageX < ohmLeft || event.pageX > (ohmLeft+OhmJquery("#ohm-tooltip").width())) {
    			ohmLeft = event.pageX - OhmJquery("#ohm-tooltip").width()/2;
    			ohmTop = event.pageY - OhmJquery("#ohm-tooltip").height()-30;
    			
    			if ( (ohmLeft + OhmJquery("#ohm-tooltip").width() ) > OhmJquery(window).width()) {
        			ohmLeft = OhmJquery(window).width() - OhmJquery("#ohm-tooltip").width() - 30;
        		}
    		}
    		
    		OhmJquery("#ohm-tooltip").css('left', ohmLeft + 'px');
    		OhmJquery("#ohm-tooltip").css('top', ohmTop + 'px');
    		OhmJquery("#ohm-tooltip").css('display', 'block');
    	})

    	.mouseleave(function() {
    		timeouts.push(setTimeout(function(){ OhmJquery("#ohm-tooltip").css('display', 'none'); }, 300));
		});
	
	OhmJquery("#ohm-tooltip")
		.mouseenter(function() {
			for (var i = 0; i <= timeouts.length; i++) {
    		    clearTimeout(timeouts[i]);
    		}
			timeouts = [];

		})
		.mousemove(function(){
			for (var i = 0; i <= timeouts.length; i++) {
    		    clearTimeout(timeouts[i]);
    		}
			timeouts = [];
			
			OhmJquery("#ohm-tooltip").css('display', 'block');	        		
    	})
		.mouseleave(function() {
    		timeouts.push(setTimeout(function(){ OhmJquery("#ohm-tooltip").css('display', 'none'); }, 300));
		});
}

window.onload = checkCookie;