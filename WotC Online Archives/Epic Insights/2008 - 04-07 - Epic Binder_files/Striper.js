




/*
     FILE ARCHIVED ON 11:11:00 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:03 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
// Splintered striper 1.3
// reworking of Zebra Tables and similar methods which works not only for tables and even/odd rows,
// but as a general DOM means of assigning any number of classes to children of a parent element.
// Patrick H. Lauke aka redux / www.splintered.co.uk
// Distributed under the Creative Commons Attribution-ShareAlike license - /web/20100812111100/http://creativecommons.org/licenses/by-sa/2.0/


/*
 * Summary:      Core experiment function that applies any number of classes to all child elements
 *               contained in all occurences of a parent element (either with or without a specific class)
 * Parameters:   parentElementTag - parent tag name
 *               parentElementClass - class assigned to the parent; if null, all parentElementTag elements will be affected
 *               childElementTag -  tag name of the child elements to apply the styles to
 *               styleClasses - comma separated list of any number of style classes (using 2 classes gives the classic "zebra" effect)
 * Return:       none
 */
function striper(parentElementTag, parentElementClass, childElementTag, styleClasses)
{
	var i=0,currentParent,currentChild;
	// capability and sanity check
	if ((document.getElementsByTagName)&&(parentElementTag)&&(childElementTag)&&(styleClasses)) {
		// turn the comma separate list of classes into an array
		var styles = styleClasses.split(',');
		// get an array of all parent tags
		var parentItems = document.getElementsByTagName(parentElementTag);
		// loop through all parent elements
		while (currentParent = parentItems[i++]) {
			// if parentElementClass was null, or if the current parent's class matches the specified class
			if ((parentElementClass == null)||(currentParent.className == parentElementClass)) {
				var j=0,k=0;
				// get all child elements in the current parent element
				var childItems = currentParent.getElementsByTagName(childElementTag);
				// loop through all child elements
				while (currentChild = childItems[j++]) {
					// based on the current element and the number of styles in the array, work out which class to apply
					k = (j+(styles.length-1)) % styles.length;
					// add the class to the child element - if any other classes were already present, they're kept intact
					currentChild.className = currentChild.className+" "+styles[k];
				}
			}
		}
	}
}


function StriperLoad() 
{
    striper('tbody','dmtable','tr','odd,even');     
    striper('tbody','phtable','tr','odd,even');
}