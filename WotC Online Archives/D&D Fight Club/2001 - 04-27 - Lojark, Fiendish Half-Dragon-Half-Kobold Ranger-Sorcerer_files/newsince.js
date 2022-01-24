




/*
     FILE ARCHIVED ON 19:26:39 Jun 11, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:07:32 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
<!--

now = new Date
expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)

lastVisit = new Date
lastVisit2 = new Date

// lastVisit2.setMonth(lastVisit2.getMonth()-1)

lastVisit = new Date(cookieVal("pageVisit"))
lastVisit2 = new Date(cookieVal("pageVisit2"))

    var targetdate = new Date(lastVisit);
	var now = new Date();
	var difference = parseInt(((now.getTime() - targetdate.getTime()) / 1000) + .999);
	var s = difference % 60;
	difference = parseInt(difference / 60);
	var m  = difference % 60;
	difference = parseInt((difference / 60) + .999);
	var h  = difference % 24;
	difference = parseInt( difference / 24);
	var d  = difference;

if (d >= 1) {
// alert(d)
	lastVisit2 = lastVisit
	lastVisit = now
}	

document.cookie = "pageVisit="+lastVisit+";expires=" + expireDate.toGMTString()
document.cookie = "pageVisit2="+lastVisit2+";expires=" + expireDate.toGMTString()

// alert(document.cookie)
 
 
 
function cookieVal(cookieName) {

  lastVisit3 = new Date
  lastVisit3 = new Date(lastVisit3.getTime() - (7 * 86400000));

//  lastVisit3.setMonth(lastVisit3.getMonth()-1)
  
  thisCookie = document.cookie.split("; ")
    for (i=0; i<thisCookie.length; i++) {
      if (cookieName == thisCookie[i].split("=")[0]) {
        return thisCookie[i].split("=")[1]
      }
    }
  return lastVisit3
}



function newCheck(yyy,mm,dd) {
  
    var targetdate = new Date(yyy,mm-1,dd);
	var now = new Date(lastVisit2);
	var difference = parseInt(((now.getTime() - targetdate.getTime()) / 1000) + .999);
	var s = difference % 60;
	difference = parseInt(difference / 60);
	var m  = difference % 60;
	difference = parseInt((difference / 60) + .999);
	var h  = difference % 24;
	difference = parseInt( difference / 24);
	var d  = difference;

	
   if (d <= 0) { 
   	   document.write("<span class='size1red1'>&nbsp;NEW&nbsp;</span>")
   }

}


 






//-->




