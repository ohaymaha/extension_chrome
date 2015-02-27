var database =
			[{ "id": "1", "key": " ^-^", "value": "1.png" },
            { "id": "2", "key": " -d", "value": "2.png" },
            { "id": "3", "key": " :d", "value": "3.png" },
            { "id": "4", "key": " +d", "value": "4.png" },
            { "id": "5", "key": " :v", "value": "5.png" },
            { "id": "6", "key": " (-_-)", "value": "6.png" },
            { "id": "7", "key": " =(", "value": "7.png" },
            { "id": "8", "key": " :-#", "value": "8.png" },
            { "id": "9", "key": " =d", "value": "9.png" },
            { "id": "10", "key": " :$", "value": "10.png" },
            { "id": "11", "key": " (n-n)", "value": "11.png" },
            { "id": "12", "key": " :*", "value": "12.png" },
            { "id": "13", "key": " -p", "value": "13.png" },
            { "id": "14", "key": " :/", "value": "14.png" },
            { "id": "15", "key": " :-s", "value": "15.png" },
            { "id": "16", "key": " :,(", "value": "16.png" },
            { "id": "17", "key": " :-j", "value": "17.png" },
            { "id": "18", "key": " b-(", "value": "18.png" },
            { "id": "19", "key": " >:0", "value": "19.png" },
            { "id": "20", "key": " >:-0", "value": "20.png" },
            { "id": "21", "key": " 3:)", "value": "21.png" },
            { "id": "22", "key": " (T_T)", "value": "22.png" },
            { "id": "23", "key": " 3:-)", "value": "23.png" },
            { "id": "24", "key": " (@-@)", "value": "24.png" },
            { "id": "25", "key": " b)", "value": "25.png" },
            { "id": "26", "key": " (jk)", "value": "26.png" },
            { "id": "27", "key": " :-p", "value": "27.png" },
            { "id": "28", "key": " ~^o^~", "value": "28.png" },
            { "id": "29", "key": " b-|", "value": "29.png" },
            { "id": "30", "key": " :p", "value": "30.png" },
            { "id": "31", "key": " -*", "value": "31.png" },
            { "id": "32", "key": " o.", "value": "32.png" },
            { "id": "33", "key": " [-0<", "value": "33.png" },
            { "id": "34", "key": " <o)", "value": "34.png" },
            { "id": "35", "key": " 8->", "value": "35.png" },
            { "id": "36", "key": " :x", "value": "36.png" },
            { "id": "37", "key": " :-c", "value": "37.png" },
            { "id": "38", "key": " b-)", "value": "38.png" },
            { "id": "39", "key": " >-/", "value": "39.png" },
            { "id": "40", "key": " :-h", "value": "40.png" },
            { "id": "41", "key": " :-bd", "value": "41.png" },
            { "id": "42", "key": " [-x", "value": "42.png" },
            { "id": "43", "key": " :bd", "value": "43.png" },
            { "id": "44", "key": " (y)", "value": "44.png" },
            { "id": "45", "key": " (o_o)", "value": "45.png" },
            { "id": "46", "key": " >:o", "value": "46.png" },
            { "id": "47", "key": " :)>-", "value": "47.png" },
            { "id": "48", "key": " :-@", "value": "48.png" },
            { "id": "49", "key": " :o)", "value": "49.png" },
            { "id": "50", "key": " :ar!", "value": "50.png" },
            { "id": "51", "key": " :@", "value": "51.png" },
            { "id": "52", "key": " :-\"", "value": "52.png" },
            { "id": "53", "key": " o:-)", "value": "53.png" },
            { "id": "54", "key": " :-*", "value": "54.png" },
            { "id": "55", "key": " (x_x)", "value": "55.png" },
            { "id": "56", "key": " :)", "value": "56.png" },
            { "id": "57", "key": " %-(", "value": "57.png" },
            { "id": "58", "key": " (^-^)", "value": "58.png" },
            { "id": "59", "key": " :o3", "value": "59.png" },
            { "id": "60", "key": " (j)", "value": "60.png" },
            { "id": "61", "key": " :-t", "value": "61.png" },
            { "id": "62", "key": " o:)", "value": "62.png" },
            { "id": "63", "key": " []==[]", "value": "63.png" }];






var DeniedHTML = [
    { "key": "<iframe", "value": "&lt;iframe" },
    { "key": "</iframe>", "value": "&lt;/iframe&gt;" },
    { "key": "<frameset", "value": "&lt;frameset" },
    { "key": "</frameset>", "value": "&lt;/frameset&gt;" },
    { "key": "<script", "value": "&lt;script" },
    { "key": "</script>", "value": "&lt;/script&gt;" },
    { "key": "<", "value": "&lt;" }
//    { "key": "<m", "value": "&lt;m" },
//    { "key": "<p", "value": "&lt;p" },
//    { "key": "<s", "value": "&lt;s" },
//    { "key": "<d", "value": "&lt;d" },
//    { "key": "<h", "value": "&lt;h" },
//    { "key": "<b", "value": "&lt;b" },
//    { "key": "<t", "value": "&lt;t" },
//    { "key": "<t", "value": "&lt;t" },
//    { "key": "<n", "value": "&lt;n" },
//    { "key": "</in", "value": "&lt;/in" },
//    { "key": "</m", "value": "&lt;/m" },
//    { "key": "</p", "value": "&lt;/p" },
//    { "key": "</s", "value": "&lt;/s" },
//    { "key": "</d", "value": "&lt;/d" },
//    { "key": "</h", "value": "&lt;/h" },
//    { "key": "</b", "value": "&lt;/b" },
//    { "key": "</t", "value": "&lt;/t" },
//    { "key": "</t", "value": "&lt;/t" },
//    { "key": "</n", "value": "&lt;/n" }
];

function myReplace(str) {
    //var map = { "(": "\(", ")": "\)", "^": "\^", "&": "\&", "$": "\$", "*": "\*", "[": "\[", "]": "\]", "{": "\{", "}": "\}", "|": "\|", ",": "\,", ".": "\.", "<": "\<", ">": "\>", "`": "\`", "~": "\~", "?": "\?","\"":"\\\"" };
    var map = { "\\": "\\\\", "^": "\^", "$": "\$", ".": "\.", "|": "\|", "?": "\?", "*": "\*", "+": "\+", "(": "\(", ")": "\)", "[": "\[", "{": "\{", "]": "\]", "}": "\}", "'": "\'" };
    $.each(map, function (i, value) {
        var find = "\\" + i;
        var re = new RegExp(find, 'g');
        str = str.replace(re, "\\" + value);

    });
    return str;
}


//Dùng hàm này để lấy các Emoticons
function ReplaceString(string) {

    var str = " " + string;
    var a = "";
    $.each(database, function (i, value) {
        if (str.indexOf(value.key) >= 0) {
            var find = myReplace(value.key);
            var re = new RegExp(find, 'gi');
            str = str.replace(re, "<img class='img-emoticons' value='" + value.id + "' src= 'images/icon/" + value.value.toString() + "'>  ");
        }
    });
    return str;
}


function ChatString(str) {
    
    $.each(DeniedHTML, function (i, value) {
        if (str.toLowerCase().indexOf(value.key) >= 0) {
            var re = new RegExp(value.key, "gi");
            str = str.replace(re, value.value);
        }
    });

    return str;
}


//Thay đổi ký tự Chat dùng hàm này (phai remove ki tu dac biet song moi replace)
function EmoticionString(string) {

    var str = " " + string;
    var a = "";
    $.each(database, function (i, value) {
        if (str.indexOf(value.key) >= 0) {
            var find = myReplace(value.key);
            var re = new RegExp(find, 'gi');
            str = str.replace(re, " <img class='chat-emoticons' value='" + value.id + "' src= 'images/icon/" + value.value.toString() + "' style = 'height:25px;'>  ");
        }
    });
    return replaceURLWithHTMLLinks(str);
}
//thay the the a
function replaceURLWithHTMLLinks(text) {
	  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	  return text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
	}