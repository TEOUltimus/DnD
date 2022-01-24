




/*
     FILE ARCHIVED ON 11:11:06 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:04 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var progressBarTimeOutID = null;

function CheckPasswordBox()
{
    var password = $(ClientIDs.UserPassword);
    
    setInterval(function() { FixLoginBox(password, 'UserPassword Selected'); }, 900);
}

function DisplayModalDownload()
{
    var userName = $(ClientIDs.UserName);
    var password = $(ClientIDs.UserPassword);
        
    var message = 'In order to download the file, you must be logged on with an account that has the required entitlement.';
                        
    DisplayUserNamePasswordModal(message, userName, password);
}

function DisplayModalDownloadMissingEntitlements()
{
    var message = 'Your account does not have the required entitlement for this download. Upgrade your Subscription today!';
                        
    DisplayMessageModal(message);
}

function FixLoginBox(control, className)
{
    if(control.value != '' && control.value != className)
    {
        control.className = className;
    }
}   

function FixLoginInputClassNameIfEmpty(event, userNameID, passwordID, userNameClassName, passwordClassName)
{
    var userName = $(userNameID);
    var password = $(passwordID);
    
    if(userName != null && userName.value != '' && userName.className != userNameClassName)
    {
        userName.className = userNameClassName;
    }
    
    if(password != null && password.value != '' && password.className != passwordClassName)
    {
        password.className = passwordClassName;
    }
}

function SwapLoginInputClassNameIfEmpty(control, className, id)
{
    var controlToUse = control;

    if(id != null)
    {
        controlToUse = $(id);
    }

    if (controlToUse.value == '') { controlToUse.className = className; }
}

function UpdateProgressBar(bar, percent)
{
    if(progressBarTimeOutID != null)
    {
        clearTimeout(progressBarTimeOutID);
    }
        
    var percentToUpdate = percent;
    
    if(percentToUpdate < 0)
    {
        percentToUpdate = 0;
    } 
    else if(percentToUpdate > 100)
    {
        percentToUpdate = 100;
    }
    
    bar.currentPercent = percentToUpdate;
    bar.style.width = percentToUpdate + '%';
    bar.cont = false;
}

function UpdateProgressBarWait(bar, start, percent, delay, whenComplete)
{
    if(bar.cont == null || bar.cont)
    {
        var nextWidth = start + percent;
        
        if(nextWidth < 100 && nextWidth > 0)
        {
            bar.currentPercent = nextWidth;
            bar.style.width = nextWidth + '%';
            
            progressBarTimeOutID = setTimeout(function() { UpdateProgressBarWait(bar, nextWidth, percent, delay, whenComplete); }, delay);
        }
        else if(whenComplete == null)
        {
            nextWidth = percent;
            
            bar.currentPercent = nextWidth;
            bar.style.width = nextWidth + '%';
            
            progressBarTimeOutID = setTimeout(function() { UpdateProgressBarWait(bar, nextWidth, percent, delay, whenComplete); }, delay);
        } 
        else 
        {
            bar.cont = false;
            
            if(whenComplete != null)
            {
                whenComplete();
            }
        }        
    }
}

function Login(event, control)
{
    var cont = true;
    
    if(event.type == 'keypress')
    {
        var keyCode = event.keyCode ? event.keyCode : event.which;  
        
        cont = (keyCode == Event.KEY_RETURN);
        
        control = $(ClientIDs.LoginButton);
    }
    
    if(cont)
    {        
        control.disabled = true;

        var result = false;

        var id = $(ClientIDs.ChallengeID).value;
        var challenge = $(ClientIDs.Challenge).value;
        var vector = $(ClientIDs.Vector).value;
        var userName = $(ClientIDs.UserName);
        var password = $(ClientIDs.UserPassword);
        var messageArea = $(ClientIDs.LoginMessageArea);
        var rememberMe = $(ClientIDs.RememberMe).checked;
        var message = null;        

        var progressBar = new Element('div', { 'class': 'LoginProgressBar' }).addClassName('LoginProgressBar');
        var progressBarBar = new Element('div', { 'class': 'Bar' }).addClassName('Bar');
        
        progressBar.insert(progressBarBar);
        
        if(userName.value.length > 0 && password.value.length > 0)
        {
            UpdateProgressBarWait(progressBarBar, 1, 2, 200, null);

            messageArea.innerLink = messageArea.innerHTML;
            messageArea.update(progressBar);
        
            var encryptedPassword = stringToHex(des(challenge, password.value, 1, 1, vector, 1));
            
            new Ajax.Request(UtilitiesHandler, {
                method: 'post',
                parameters: { method: 'Login', keyPosition: id, userName: userName.value, userPassword: encryptedPassword, rememberMe: rememberMe },
                onSuccess: function(transport)
                {
                    var opResult = eval('(' + transport.responseText + ')');

                    if (opResult.OperationResult)
                    {
                        result = true;

                        var redirectURL = GetQueryStringValue('ReturnUrl');

                        if (redirectURL != null)
                        {
                            window.location = unescape(redirectURL);
                        }
                        else
                        {
                            var split = opResult.Data.split(',');

                            $(ClientIDs.ChallengeID).value = split[0];
                            $(ClientIDs.Challenge).value = split[1];
                            
                            if(split.length >= 3)
                            {
                                redirectURL = split[3];
                            }

                            control.disabled = false;
                            
                            if(redirectURL != null)
                            {
                                clearTimeout(progressBarTimeOutID);    
                                UpdateProgressBarWait(progressBarBar, progressBarBar.currentPercent, 8, 0, function() { UpdateProgressBar(progressBarBar, 100); window.location = unescape(redirectURL); });
                            }
                        }
                    }
                    else if (opResult.Data != null)
                    {
                        var split = opResult.Data.split(',');

                        $(ClientIDs.ChallengeID).value = split[0];
                        $(ClientIDs.Challenge).value = split[1];
                        
                        clearTimeout(progressBarTimeOutID);
                        messageArea.update(messageArea.innerLink);

                        DisplayUserNamePasswordModal(opResult.Message, userName, password);

                        control.disabled = false;
                    }
                    else
                    {
                        clearTimeout(progressBarTimeOutID);
                        messageArea.update(messageArea.innerLink);
                        
                        var message = 'There was an error logging in; it is probably due to network difficulties. Please reload the page and try again. If that does not work, try again in a few minutes.';
                        
                        DisplayUserNamePasswordModal(message, userName, password);

                        control.disabled = false;
                    }
                },
                onFailure: function(transport)
                {
                    var opResult = eval('(' + transport.responseText + ')');
                    
                    clearTimeout(progressBarTimeOutID);
                    messageArea.update(messageArea.innerLink);
                    
                    var message = 'There was an error logging in; it is probably due to network difficulties. Please reload the page and try again. If that does not work, try again in a few minutes.';
                    
                    DisplayUserNamePasswordModal(message, userName, password);

                    control.disabled = false;
                }
            });
        }
        else
        {
            var message = 'Please supply your user name and password to sign in.';
            
            DisplayUserNamePasswordModal(message, userName, password);
            
            control.disabled = false;
        }
        
        return result;
    }
}

function DisplayMessageModal(message)
{
    var passwordRequired = new Element('div', { 'class': 'CredentialsRequiredMessage' }).addClassName('CredentialsRequiredMessage');
    var passwordRequiredMessage = new Element('div', { 'style': 'height:43px; line-height:25px;' }).update(message);
    var loginBoxControls = new Element('div', { 'class': 'CredentialsMessageControls' }).addClassName('CredentialsMessageControls');
    var loginBoxLogo = new Element('div', { 'class': 'LoginBoxLogo' }).addClassName('LoginBoxLogo');
    var clear = new Element('div', { 'class': 'clear' });

    passwordRequired.insert(new Element('img', { 'style': 'float:left; margin-right:5px;', 'src': '/DnD/Globals/Images/Logos/DnDInsider.png', 'alt': 'D&amp;D Insider'}));
    passwordRequired.insert(passwordRequiredMessage);
    passwordRequired.insert(new Element('div', { 'class': 'clear' }).addClassName('clear'));
    passwordRequired.insert(loginBoxControls);
    passwordRequired.insert(clear);

    window['RunBillboardSwitching'] = false;

    var closeDelegate = DisplayModalWindow(passwordRequired, function() { window['RunBillboardSwitching'] = true; });            
}

function DisplayUserNamePasswordModal(message, userName, password)
{
    var passwordRequired = new Element('div', { 'class': 'CredentialsRequiredMessage' }).addClassName('CredentialsRequiredMessage');
    var loginBoxControls = new Element('div', { 'class': 'CredentialsMessageControls' }).addClassName('CredentialsMessageControls');
    var loginBoxLogo = new Element('div', { 'class': 'LoginBoxLogo' }).addClassName('LoginBoxLogo');
    var loginBoxRight = new Element('div', { 'class': 'LoginBoxRight'}).addClassName('LoginBoxRight');
    var loginBoxUserName = new Element('div', { 'class': 'LoginBoxUserName'}).addClassName('LoginBoxUserName');
    var userName1 = new Element('input', { 'id': 'ModalBoxUserName', 'type': 'text', 'class': 'UserName' }).addClassName('UserName');
    var password1 = new Element('input', { 'id': 'ModalBoxPassword', 'type': 'password', 'class': 'UserPassword' }).addClassName('UserPassword');
    var buttonContainer = new Element('div', { 'class': 'CredentialsButtonContainer' }).addClassName('CredentialsButtonContainer');
    var okButton = new Element('input', { 'type': 'button', 'value': 'Sign In' });
    var cancelButton = new Element('input', { 'type': 'button', 'value': 'Subscribe' });
    
    if(userName.value.length > 0)
    {
        userName1.className = 'UserName Selected';
        userName1.value = userName.value;
    }
    
    if(password.value.length > 0)
    {
        password1.className = 'UserPassword Selected';
        password1.value = password.value;
    }    

    passwordRequired.update(message);
    passwordRequired.insert(new Element('div', { 'class': 'clear' }).addClassName('clear'));
    passwordRequired.insert(loginBoxControls);

    loginBoxControls.insert(loginBoxLogo);
    loginBoxControls.insert(loginBoxRight);
    loginBoxControls.insert(new Element('div', { 'class': 'clear' }).addClassName('clear'));

    buttonContainer.insert(cancelButton);
    buttonContainer.insert(okButton);            

    loginBoxControls.insert(buttonContainer);

    loginBoxLogo.insert(new Element('img', { 'src': '/DnD/Globals/Images/Logos/DnDInsider.png', 'alt': 'D&amp;D Insider'}));
    loginBoxLogo.insert($(ClientIDs.LoginMessageArea).innerHTML);
    
    loginBoxRight.insert(loginBoxUserName);
    loginBoxUserName.insert(userName1);
    loginBoxUserName.insert(password1);

    userName1.observe('focus', SwapLoginInputClassNameIfEmpty.bindAsEventListener(userName1, 'UserName Selected', 'ModalBoxUserName'));
    password1.observe('focus', SwapLoginInputClassNameIfEmpty.bindAsEventListener(password1, 'UserPassword Selected', 'ModalBoxPassword'));

    userName1.observe('blur', SwapLoginInputClassNameIfEmpty.bindAsEventListener(userName1, 'UserName', 'ModalBoxUserName'));
    password1.observe('blur', SwapLoginInputClassNameIfEmpty.bindAsEventListener(password1, 'UserPassword', 'ModalBoxPassword'));

    window['RunBillboardSwitching'] = false;

    var closeDelegate = DisplayModalWindow(passwordRequired, function() { window['RunBillboardSwitching'] = true; });            

    cancelButton.observe('click', function() { closeDelegate(); window.location = '/DnD/Subscription.aspx'; });           
    okButton.observe('click', function() {
        if(userName1.value.length > 0 && password1.value.length > 0)
        {
            closeDelegate();
            
            userName.className = 'UserName Selected';
            password.className = 'UserPassword Selected';
            
            userName.value = userName1.value;
            password.value = password1.value;
            
            Login(this, okButton);
         }           
    });
    
    userName1.observe('keypress', function(event) {
        var keyCode = event.keyCode ? event.keyCode : event.which;  
        
        cont = (keyCode == Event.KEY_RETURN);
        
        if(cont && userName1.value.length > 0 && password1.value.length > 0)
        {
            closeDelegate();
            
            userName.className = 'UserName Selected';
            password.className = 'UserPassword Selected';
            
            userName.value = userName1.value;
            password.value = password1.value;
            
            Login(this, userName1);
        }
    });
    
    password1.observe('keypress', function(event) {
        var keyCode = event.keyCode ? event.keyCode : event.which;  
        
        cont = (keyCode == Event.KEY_RETURN);
        
        if(cont && userName1.value.length > 0 && password1.value.length > 0)
        {
            closeDelegate();
            
            userName.className = 'UserName Selected';
            password.className = 'UserPassword Selected';
            
            userName.value = userName1.value;
            password.value = password1.value;
            
            Login(this, password1);
        }
    });
}

function GetQueryStringValue(variable) 
{
    var result = null;
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    
    for (var i=0;i<vars.length;i++) 
    {
        var pair = vars[i].split('=');
    
        if (pair[0].toLowerCase() == variable.toLowerCase()) 
        {
            result = pair[1];
        }
    }
    
    return result;
}