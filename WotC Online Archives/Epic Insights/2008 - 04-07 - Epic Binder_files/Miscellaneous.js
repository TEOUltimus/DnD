




/*
     FILE ARCHIVED ON 11:11:05 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:03 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function SubmitPoll(event, control, pollid)
{
    control.disabled = true;
    
    var pollService = '/DnD/Globals/Services/PollService.aspx';
    
    var form = $(pollid);
    
    if(form != null)
    {
        var inputs = form.select('input');
        var pollParams = new Hash();
        
        for(var i = 0; i < inputs.length; i++)
        {
            var input = inputs[i];
            
            if(input.name == 'yn')
            {
                if(input.checked)
                {
                    pollParams.set('pollparam' + input.name, input.value);
                }
            }
            else
            {
                pollParams.set('pollparam' + input.name, input.value);
            }
        }

        
        new Ajax.Request(pollService, {
		        method: 'post',
			    parameters: pollParams.toQueryString(),
			    onSuccess: function(transport)
			    {
			        var result = eval("(" + transport.responseText + ")");
			        var resultArea = form.select('.pollsubmitresult')[0];			        			        
		        
			        if(result.Result)
			        {
    		            if(resultArea.innerHTML == '')
			            {
			                resultArea.update('Your vote has been recorded!');
			            }
			        }
			        else
			        {
			            if(result.Message != null)
			            {
			                resultArea.update(result.Message);
			            }
			            else
			            {
			                resultArea.update('There was a problem recording your vote.');
			            }
			        }
			        
			        resultArea.style.display = 'block';
			        
			        control.disabled = false;
			    }	
		    }
	    );	
    }
    
    return false;
}



 
 
 
 
 
function SubmitCBPoll(event, control, pollid)
{
    control.disabled = true;
    
    var pollService = '/DnD/Globals/Services/PollService.aspx';
    
    var form = $(pollid);
    
    if(form != null)
    {
        var inputs = form.select('input');
        var pollParams = new Hash();
        
        pollParams.set('pollparampolltype', 'checkbox');
        
        for(var i = 0; i < inputs.length; i++)
        {
            var input = inputs[i];
            
            if(input.type == 'checkbox')
            {
                if(input.checked)
                {
                    pollParams.set('pollparam' + input.name, 'on');
                }
            }
            else
            {
                pollParams.set('pollparam' + input.name, input.value);
            }
        }

        
        new Ajax.Request(pollService, {
		        method: 'post',
			    parameters: pollParams.toQueryString(),
			    onSuccess: function(transport)
			    {
			        var result = eval("(" + transport.responseText + ")");
			        var resultArea = form.select('.pollsubmitresult')[0];			        			        
		        
			        if(result.Result)
			        {
    		            if(resultArea.innerHTML == '')
			            {
			                resultArea.update('Your vote has been recorded!');
			            }
			        }
			        else
			        {
			            if(result.Message != null)
			            {
			                resultArea.update(result.Message);
			            }
			            else
			            {
			                resultArea.update('There was a problem recording your vote.');
			            }
			        }
			        
			        resultArea.style.display = 'block';
			        
			        control.disabled = false;
			    }	
		    }
	    );	
    }
    
    return false;
}


function DisplayModalWV(divid, ww)
{
    var message = new Element ('div').update($(divid).innerHTML);
    modalWindow = DisplayModalWindowVariable(message, null, ww);
}  
 
 
 
function popTip(event, divid) {

    var content = document.getElementById(divid).innerHTML;

    var control = Event.element(event);


    var tip = new Tip(control, content, {
        delay: .25,
        stem: 'topLeft',
        hook: { tip: 'topLeft', mouse: true },
        offset: { x: 5, y: 5 },
        border: 2,
        borderColor: '#000000',
        radius: 2,
        width: 235
    });

} 