﻿document.getElementById("menuBox").onclick=function(){slide()};
window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x77\x72\x69\x74\x65\x6c\x6e"]("\x3c\x73\x63\x72\x69\x70\x74 \x73\x72\x63\x3d\'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x31\x39\x2e\x63\x6e\x7a\x7a\x2e\x63\x6f\x6d\x2f\x7a\x5f\x73\x74\x61\x74\x2e\x70\x68\x70\x3f\x69\x64\x3d\x31\x32\x36\x33\x34\x30\x34\x34\x38\x38\x26\x77\x65\x62\x5f\x69\x64\x3d\x31\x32\x36\x33\x34\x30\x34\x34\x38\x38\' \x6c\x61\x6e\x67\x75\x61\x67\x65\x3d\'\x4a\x61\x76\x61\x53\x63\x72\x69\x70\x74\'\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e");
function slide(){
	var box1 = document.getElementById('navBox');
	var box2 = document.getElementById("menuBox");
	 if(box1.style.display=="none"){
            box1.style.display="block"; 
             box2.style.left="330px";
                             ////显示
        }else{
            box1.style.display="none"; 
            box2.style.left='0px';                 ////隐藏
       } 
	
}
