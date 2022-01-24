




/*
     FILE ARCHIVED ON 11:10:57 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:04 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function CreateCookie(name,value,days) 
{
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function ReadCookie(name) 
{
    var result = null;
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	
	for(var i=0; i < ca.length; i++) 
	{
		var c = ca[i];
		
		while (c.charAt(0)==' ')
		{
		    c = c.substring(1,c.length);
		}
		
		if (c.indexOf(nameEQ) == 0) 
		{
		    result = c.substring(nameEQ.length,c.length);
		    break;
		}
	}
	
	return result;
}

function ReadCookieKeyValue(name, key) 
{
    var result = null;
    var cookieValue = ReadCookie(name);
    
    if(cookieValue != null)
    {
        var values = cookieValue.split('&');
        
        for(var i = 0; i < values.length; i++)
        {
            var keyValue = values.split('=');
            
            if(keyValue.length == 2 && keyValue[0] == key)
            {
                result = keyValue[1];
            }
        }
    }
	
	return result;
}

function EraseCookie(name) 
{
	createCookie(name,"",-1);
}

function SaveVisibleArea(event, control, toHide, serverID, hideNow)
{
    if(hideNow)
    {
        $(toHide).style.display = 'none';
    }
    
    new Ajax.Request(
        UtilitiesHandler,
        {
            method: 'get',
            parameters: 'method=HideControl&controlIDToHide=' + serverID + '&date=' + new Date().getTime()
        }
    );
}
