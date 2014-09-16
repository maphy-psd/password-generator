function genpw(id,plen,arg1,arg2,arg3,arg4,arg5){
    obj=document.getElementById(id);
    arg1=document.getElementById(arg1);
    arg2=document.getElementById(arg2);
    arg3=document.getElementById(arg3);
    arg4=document.getElementById(arg4);
    arg5=document.getElementById(arg5);
    obj.value=GeneratePassword(plen,arg1.checked,arg2.checked,arg3.checked,arg4.checked,arg5.value);
}

function GeneratePassword(length,arg1,arg2,arg3,arg4,arg5) {
    var res = '';
    var str='';
    var str1='qwertyuioplkjhgfdsazxcvbnm';
    var str2='QWERTYUIOPLKJHGFDSAZXCVBNM';
    var str3='1234567890';
//    var str4='!@#$%^&*.,';
    var str4= arg5

    if(arg1){ str=str+str1; }
    if(arg2){ str=str+str2; }
    if(arg3){ str=str+str3; }
    if(arg4){ str=str+str4; }

    for (i=0; i < length; i++) {
        j = getRandomNum(str.length);
        res = res + str.charAt(j);
    }
    return res;
}

function getRandomNum(cnt) {
    // between 0 - 1
    var rndNum = Math.random()
    rndNum = parseInt(rndNum * cnt);
    return rndNum;
}

