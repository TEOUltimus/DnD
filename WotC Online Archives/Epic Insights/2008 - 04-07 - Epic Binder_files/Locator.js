




/*
     FILE ARCHIVED ON 11:11:09 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:04 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function LocatorGo()
{
    var sLocatorTextBox = $(ClientIDs.LocatorTextBox).value; 
    var sLocatorStores = "/web/20100812111109/http://ww2.wizards.com/StoreAndEventLocator/Default.aspx?link=true&ReturnParamMapZoom=10&ReturnParamMapSearch=" + sLocatorTextBox + "&ReturnParamMode=buy&ReturnParamCheckedProducts=D%26D%3B&ReturnParamCheckedEvents=1%3A45%2C1%3A57%3B1%3A9%3B1%3A133%2C1%3A25%2C1%3A201%2C1%3A12%2C1%3A197%2C1%3A50%2C1%3A51%2C1%3A150%2C1%3A194%2C1%3A198%2C1%3A56%2C1%3A158%2C1%3A199%2C1%3A11%3B3%3A203%3B3%3A191%2C3%3A202%3B3%3A190%2C3%3A193%3B&ReturnParamCheckedEventBrands=3%3Ax%3B";
    var sLocatorEvents = "/web/20100812111109/http://ww2.wizards.com/StoreAndEventLocator/Default.aspx?link=true&ReturnParamMapZoom=10&ReturnParamMapSearch="  + sLocatorTextBox + "&ReturnParamMode=play&ReturnParamCheckedProducts=D%26D%3B&ReturnParamCheckedEvents=40%3A203%2C40%3A205%3B40%3A202%3B40%3A193%3B&ReturnParamCheckedEventBrands=40%3Ax%3B"
    var sLocatorEncounters = "/web/20100812111109/http://ww2.wizards.com/StoreAndEventLocator/Default.aspx?link=true&ReturnParamMapZoom=10&ReturnParamMapSearch="  + sLocatorTextBox + "&ReturnParamMode=play&ReturnParamCheckedProducts=D%26D%3B&ReturnParamCheckedEvents=40%3A218%3B&ReturnParamCheckedEventBrands=40%3Ax%3B"





    if($(ClientIDs.LocatorStores).checked)
    {
    	window.open(sLocatorStores,'','');
    } 
    if($(ClientIDs.LocatorEvents).checked)
    {
    	window.open(sLocatorEvents,'','');
    }
    if($(ClientIDs.LocatorEncounters).checked)
    {
    	window.open(sLocatorEncounters,'','');
    }

    return false;
}