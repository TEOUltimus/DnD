




/*
     FILE ARCHIVED ON 18:45:56 Aug 27, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:03 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function tiltImage(control,xsize,xid,xix,deg) {
	if(BrowserDetect.browser != 'Opera') { 
		if(BrowserDetect.browser == 'Explorer') {
    		var divOuter2 = document.getElementById('tiltOuterWrapper_x_' + xid + '_' + xix);
	    		divOuter2.style.display = 'none';
			msieRotation(xsize,xid,xix,deg);
		} else {
            var divOuter = document.getElementById('tiltOuterWrapper_ie_' + xid + '_' + xix);
	    		divOuter.style.display = 'none';
	 	 	otherRotation(xsize,xid,xix,deg);
		}
	} else {
		var divOuter = document.getElementById('tiltOuterWrapper_ie_' + xid + '_' + xix);
			divOuter.style.display = 'none';
		var divOuter2 = document.getElementById('tiltOuterWrapper_x_' + xid + '_' + xix);
			divOuter2.style.display = 'none';
		var divOpera = document.getElementById('operaWrapper_' + xid + '_' + xix);
			divOpera.style.display = 'inline';
	} 
};

function otherRotation(xsize,xid,xix,deg)
{
 
	var divOuter = document.getElementById('tiltOuterWrapper_x_' + xid + '_' + xix);
 	
	var canvas = document.getElementById('tiltCanvas_x_' + xid + '_' + xix);
	var canvasContext = canvas.getContext('2d');

	var imageFull = document.getElementById('tiltImageFull_x_' + xid + '_' + xix);
    var imgW = imageFull.width;
    var imgH = imageFull.height;

	var imageShadow1 = document.getElementById('tiltImageShadow1_x_' + xid + '_' + xix);
	var imageShadow2 = document.getElementById('tiltImageShadow2_x_' + xid + '_' + xix);
	var imageShadow3 = document.getElementById('tiltImageShadow3_x_' + xid + '_' + xix);
	var imageShadow4 = document.getElementById('tiltImageShadow4_x_' + xid + '_' + xix);
	var imageShadow5 = document.getElementById('tiltImageShadow5_x_' + xid + '_' + xix);

  
var AngleD = deg;
var SideAh = imgH;
var newH = SideAh * (.99-Math.tan(AngleD)) ;
var newH = newH * (Math.cos(AngleD)); 
var SideAw = imgW;
var newW = SideAw * (.99-Math.tan(AngleD));
var newW = newW * (Math.cos(AngleD)); 

		canvas.setAttribute('width', imgW + 300);
		canvas.setAttribute('height', imgH +  100);


/*
 if (xix == '0') {
		canvas.setAttribute('width', imgW + 45);
		canvas.setAttribute('height', imgH + 27);
    }

    if (xix == '1') {
		canvas.setAttribute('width', imgW + 47);
		canvas.setAttribute('height', imgH + 40);
        }

    if (xix == '2') {
		canvas.setAttribute('width', imgW + 47);
		canvas.setAttribute('height', imgH + 44);
    }

    if (xix == '3') {
		canvas.setAttribute('width', imgW + 47);
		canvas.setAttribute('height', imgH + 44);
     } 

*/
		canvasContext.rotate(deg * Math.PI / 180);
 
        for (var s2=3;s2<imgW;s2++){
            var shadowLeft = (newH * 2)  + s2;
    	 	canvasContext.drawImage(imageShadow2, shadowLeft, imgH - 5);
        }

        for (var s4=3;s4<imgH;s4++){
            var shadowTop = s4;
    	 	canvasContext.drawImage(imageShadow4, imgW + (newH * 2) - 2   , shadowTop);
        }

	 	canvasContext.drawImage(imageShadow1, (newH * 2) , imgH - 5);
	 	canvasContext.drawImage(imageShadow3, imgW + (newH * 2) - 2 , imgH - 5);
		canvasContext.drawImage(imageShadow5, imgW + (newH * 2) - 2   , 2);
	 	
	 	canvasContext.drawImage(imageFull, newH * 2, 0);

        divOuter.style.width = imgW + (newH * 2) + 11 + 'px' ;
        divOuter.style.height = imgH + (newW * 2) + 12 + 'px' ; 
 
/* 
 
    if (xix == '0') {
        divOuter.style.width = imgW + 30;
        divOuter.style.height = imgH + 30;
    }

    if (xix == '1') {
        divOuter.style.width = imgW + 37;
        divOuter.style.height = imgH + 37;
        }

    if (xix == '2') {
        divOuter.style.width = imgW + 50;
        divOuter.style.height = imgH + 54;
    }

    if (xix == '3') {
        divOuter.style.width = imgW + 59;
        divOuter.style.height = imgH + 59;
     } 
 
*/

//     divOuter.style.width = imgW * 1.3;
//      divOuter.style.height = imgH * 1.19;

    divOuter.style.visibility = 'visible';
		
}
 
function msieRotation(xsize,xid,xix,deg)
{
 
	var divOuter = document.getElementById('tiltOuterWrapper_ie_' + xid + '_' + xix);
 	var divInner = document.getElementById('tiltInnerWrapper_ie_' + xid + '_' + xix);

 	var imgMain = document.getElementById('tiltImageFull_ie_' + xid + '_' + xix);
    var imgW = imgMain.width;
    var imgH = imgMain.height;

 	var droplg1div = document.getElementById('droplg1div_ie_' + xid + '_' + xix);
 	var droplg1main = document.getElementById('droplg1main_ie_' + xid + '_' + xix);
 	var droplg1right = document.getElementById('droplg1right_ie_' + xid + '_' + xix);
 	var droplg1bottom = document.getElementById('droplg1bottom_ie_' + xid + '_' + xix);
   
var AngleD = deg;

var SideAh = imgH;
var newH = SideAh * (.99-Math.tan(AngleD)) ;
var newH = newH * (Math.cos(AngleD)); 

var SideAw = imgW;
var newW = SideAw * (.99-Math.tan(AngleD));
var newW = newW * (Math.cos(AngleD)); 

        divOuter.style.width = imgW + (newH * 2)+ 10 ;
        divOuter.style.height = imgH + (newW * 2) + 15;
        
        divInner.style.width = imgW + (newH * 2) + 13;
        divInner.style.height = imgH + (newW * 2) + 10;

/*
    if (xix == '0') {
        divOuter.style.width = imgW + 30;
        divOuter.style.height = imgH + 30;
        divInner.style.width = imgW + 30;
        divInner.style.height = imgH + 30;
    }

    if (xix == '1') {
        divOuter.style.width = imgW + 37;
        divOuter.style.height = imgH + 37;
        divInner.style.width = imgW + 37;
        divInner.style.height = imgH + 37;
        }

    if (xix == '2') {
        divOuter.style.width = imgW + 50;
        divOuter.style.height = imgH + 54;
        divInner.style.width = imgW + 50;
        divInner.style.height = imgH + 54;
    }

    if (xix == '3') {
        divOuter.style.width = imgW + 59;
        divOuter.style.height = imgH + 54;
        divInner.style.width = imgW + 59;
        divInner.style.height = imgH + 54;
    }
*/


    droplg1div.style.width = imgW + 15;
    droplg1div.style.height = imgH;
    droplg1main.style.height = imgH;
    droplg1right.style.height = imgH;
    droplg1bottom.style.width = imgW + 15;

 
 
    var deg2rad = Math.PI * 2 / 360;
    var rad = deg * deg2rad;
    var costheta = Math.cos(rad);
    var sintheta = Math.sin(rad);
  	    divInner.filters.item(0).M11 = costheta;
  	    divInner.filters.item(0).M12 = -sintheta;
  	    divInner.filters.item(0).M21 = sintheta;
  	    divInner.filters.item(0).M22 = costheta;
 
 
    divOuter.style.visibility = 'visible';

}
  
 
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};

BrowserDetect.init(); 