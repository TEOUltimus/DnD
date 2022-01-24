




/*
     FILE ARCHIVED ON 11:11:04 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:03 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
Event.observe(window, 'load', SetupJavaScriptPage);

var currentFocusedControl = null;
var textBoxes = null;

function SetCurrentControlFocus(event, control)
{
    currentFocusedControl = control;

    if (event.type == 'focus' && currentFocusedControl.type == 'text')
    {
        var inputBox = control;

        inputBox.selected = true;
    }
}

function SetCurrentControlBlur(event)
{
    currentFocusedControl = null;
}

function SetupJavaScriptPage()
{
    AssignTextBoxValues();
    SubscribeToTextBoxEvents();
}

function AssignTextBoxValues()
{
    if (textBoxHash != null)
    {
        textBoxHash.each(function(pair)
        {
            var textBox = $(pair.key);

            if (textBox.className == 'labelTextBox' && textBox.value == '' && textBox != currentFocusedControl)
            {
                textBox.value = pair.value;
                textBox.style.fontStyle = 'italic';
            }
        });
    }
}

function SubscribeToTextBoxEvents()
{
    /// <summary>
    /// This method registers for the focus and blur events on all text boxes
    /// that have a classname of 'textboxinput'.
    /// </summary>
    textBoxes = $$('.labelTextBox');
    
    for (var i = 0; i < textBoxes.length; i++)
    {
        Event.observe(textBoxes[i], 'focus', ResetTextBox);
        Event.observe(textBoxes[i], 'blur', ResetTextBox);

        textBoxes[i].selected = false;
    }
}

function ResetTextBox(event)
{
    /// <summary>
    /// This method resets the class of the input text box when it is selected.
    /// </summary>    	
	var inputBox = Event.element(event);

	ClearTextBoxClasses();

	if(event.type == 'focus')
	{
	    inputBox.selected = true;
	    
	    SetTextBoxValue(event.type, inputBox);
	}
}

function ClearTextBoxClasses()
{
    /// <summary>
    /// This method exists so that all of the dynamic text box classes are cleared
    /// when the focus event is fired. Basically, it fixes a problem in IE where on refresh
    /// a text box may already be selected and two text boxes can end up being highlighted.
    /// </summary>        
    for (var i = 0; i < textBoxes.length; i++)
    {
        var textBox = textBoxes[i];

        textBox.selected = false;

        SetTextBoxValue('blur', textBoxes[i]);
    }
}

function SetTextBoxValue(eventType, inputBox)
{
    var unfocusedValue = textBoxHash.get(inputBox.id);
    
    if (unfocusedValue != null)
    {
        if (eventType == 'focus' && inputBox.value == unfocusedValue)
        {
            inputBox.value = '';
            inputBox.style.fontStyle = 'normal';
        }
        else if (inputBox.value == '')
        {
            inputBox.value = unfocusedValue;
            inputBox.style.fontStyle = 'italic';
        }
    }
}