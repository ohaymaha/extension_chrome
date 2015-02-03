var flagISPUB = false;
	var body = document.getElementsByTagName("body");
	var str = body[0].innerHTML;  
	var pattern = 'ads.ohm.vn/publisher.js'; 
	var reg = new RegExp(pattern, "ig"); ; 
	var is_publisher = reg.test(str);
	if(is_publisher){
		flagISPUB = true;
	}

	var body = document.getElementsByTagName("head");
	var str = body[0].innerHTML;  
	var pattern = 'ads.ohm.vn/publisher.js'; 
	var reg = new RegExp(pattern, "ig"); ; 
	var is_publisher = reg.test(str);
	if(is_publisher){
		flagISPUB = true;
	}

	if(flagISPUB){
		return false;
	}




	function getSelecter(JQelement)
    {
            JQforArrElement = new Array();
            JQforElement = "";
            JQstr = JQelement[0].outerHTML;
            JQforElement = JQelement;
            var t = 1;
            JQforArrElement[0] = JQforElement;
            while(1==1)
            {
                    if(JQforElement.parent().prop("tagName")!="BODY")
                    {
                            JQforElement = JQforElement.parent();
                            JQforArrElement[t] = JQforElement;
                    } else {
                            break;
                    }
                    t++;
            }
           
            var ik = "";
            var arrSelect = new Array();
           
            for(j=0;j<(t-1);j++)
            {
                   
                    var jsoup = JQforArrElement[j].attr("id");
                    var js = "";
                    if(typeof jsoup!="undefined")
                    {
                            if(JQSelecter.trim(jsoup)!="")
                            {
                                    js = "#"+jsoup;
                            }
                    }
                   
                    if(typeof jsoup=="undefined")
                    {
                            jsoup = JQforArrElement[j].attr("class");
                            if(typeof jsoup!="undefined")
                            {
                                    var arr = jsoup.split(" ");
                                    js = JQforArrElement[j].prop("tagName").toLowerCase();
                                    for(k=0;k<arr.length;k++)
                                    {
                                            if(JQSelecter.trim(arr[k])!="")
                                            {
                                                    js += "."+arr[k];
                                            }
                                    }
                            }
                    }

                    if(typeof jsoup=="undefined")
                    {
                            jsoup = JQforArrElement[j].prop("tagName");
                            js = jsoup.toLowerCase();
                    }
                   
                    arrSelect[j] = js;
                    var id = JQforArrElement[j].attr("id");
                   
                    if(JQSelecter(js)&&JQSelecter(js).length==1)
                    {
                            break;
                    }
                   
            }
   
            var listSelecter = new Array();

            for(var u = (arrSelect.length-1);u>=0;u--)
            {
                    ik += arrSelect[u]+" ";
                   
                    var ar = new Array();
                    if(JQSelecter(ik).length>1)
                    {
                            for(var m = 0;m<JQSelecter(ik).length;m++)
                            {
                                    ar[m] = arrSelect[u]+":eq("+m+")";
                            }
                    } else {
                            ar[0] = arrSelect[u];
                    }

                    listSelecter[u] =  ar;
            }
           
            var liss = new Array();
            var max = new Array();
           
            for(var i=0;i<listSelecter.length;i++)
            {
                    liss[i] = 0;
            }
           
            for(var i=0;i<listSelecter.length;i++)
            {
                    max[i] = listSelecter[i].length;
            }
            var k = listSelecter.length-1;
           
            if(listSelecter.length>0)
            {
                    dance:
                    while(1==1)
                    {
                            var reg = "";
                            for(var j=(listSelecter.length-1);j>=0;j--)
                            {
                                    if(!listSelecter[j][liss[j]])
                                    {
                                            break dance;
                                    }
                                    reg+=listSelecter[j][liss[j]]+" ";
                            }
                           
                            liss[k]++;
                            for(var j=0;j<listSelecter.length-1;j++)
                            {
                                    if(liss[k-j]>=max[k-j])
                                    {
                                            liss[k-1-j] = liss[k-1-j]+1;
                                            liss[k] = 0;
                                            for(var t=0;t<j;t++)
                                            {
                                                    liss[k-j] = 0;
                                            }
                                    }
                            }
                           
                            if(JQSelecter(reg)[0]&&JQSelecter(reg)[0].outerHTML==JQstr)
                            {
                                    JQSelecter("#jq-view").html("<input value='"+JQSelecter.trim(reg)+"' onclick='javascript:this.select()' style='width:100%;margin:10px 0;display:block;'/>"+JQSelecter(reg)[0].outerHTML);
                                    break;
                            }
                    }
           }
          }