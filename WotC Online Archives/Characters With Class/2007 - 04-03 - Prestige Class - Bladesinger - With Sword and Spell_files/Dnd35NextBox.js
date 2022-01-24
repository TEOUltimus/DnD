




/*
     FILE ARCHIVED ON 3:50:00 May 9, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:54:57 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

$(document).ready(function () {
	// insert the D&D Next Playtest box at the top of 3.5 Archive lists and the bottom of articles
	$.get('/dnd/Dnd35NextBox.htm', function (data) {
		// the footer varies among articles, but the archive pages always have this first type 
		var footer = $('table').has('img[src="/dnd/images/new/footer_new_1.jpg"]');
		if ($(footer).size() > 0) {
			var header = $('table').has('span[class="size5red"]:contains("Archive")');
			if ($(header).size() > 0) {
				$(header).next().after(data);
			}
			else {
				$(footer).filter(":last").before('<div style="width:610px; margin-left:20px;">' + data + '</div>');
			}
		}
	});
});
