




/*
     FILE ARCHIVED ON 11:11:07 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:04 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/


function DisplayModalWindow(content, dialogClosed)
{
    var background = new Element('div', { 'id': 'ModalBoxBackground', 'style': 'display:block;' });
    var modalContainer = new Element('div', { 'class': 'ModalContainer', 'style': 'display:none;' }).addClassName('ModalContainer');
    var modalClose = new Element('a', { 'href': 'javascript:void(0);', 'class': 'ModalClose' }).addClassName('ModalClose');
    var modalTop = new Element('div', { 'class': 'Modaltop' }).addClassName('Modaltop');
    var modalTopLeft = new Element('div', { 'class': 'ModalTopLeft' }).addClassName('ModalTopLeft').update('&nbsp;');
    var modalTopMiddle = new Element('div', { 'class': 'ModalTopMiddle' }).addClassName('ModalTopMiddle');
    var modalTopRight = new Element('div', { 'class': 'ModalTopRight' }).addClassName('ModalTopRight').update('&nbsp;');
    var modalCenter = new Element('div', { 'class': 'ModalCenter' }).addClassName('ModalCenter');
    var modalCenterRight = new Element('div', { 'class': 'ModalCenterRight' }).addClassName('ModalCenterRight');
    var modalContent = new Element('div', { 'class': 'ModalContent' }).addClassName('ModalContent');
    var modalBottom = new Element('div', { 'class': 'ModalBottom' }).addClassName('ModalBottom');
    var modalBottomLeft = new Element('div', { 'class': 'ModalBottomLeft' }).addClassName('ModalBottomLeft').update('&nbsp;');
    var modalBottomMiddle = new Element('div', { 'class': 'ModalBottomMiddle' }).addClassName('ModalBottomMiddle');
    var modalBottomRight = new Element('div', { 'class': 'ModalBottomRight' }).addClassName('ModalBottomRight').update('&nbsp;');
    var closeDelegate = function() { 
        modalContainer.fade({ duration:.3, afterFinish: function() { 
                content.remove();
                
                background.style.display = 'none'; 
                
                if(dialogClosed != null)
                {
                    dialogClosed(false); 
                }
            }
        })
    };
    
    modalContainer.insert(modalClose);
    modalContainer.insert(modalTop);
    modalContainer.insert(modalCenter);
    modalContainer.insert(modalBottom);
    
    modalTop.insert(modalTopLeft);
    modalTop.insert(modalTopMiddle);
    modalTop.insert(modalTopRight);
    
    modalCenter.insert(modalCenterRight);
    
    modalCenterRight.insert(modalContent);
    
    modalContent.update(content);
    modalContent.insert(new Element('div', { 'style': 'height:1px; font-size:1px; line-height:1px; display:block;' }));
    
    modalBottom.insert(modalBottomLeft);
    modalBottom.insert(modalBottomMiddle);
    modalBottom.insert(modalBottomRight);
    
    background.update(modalContainer);
    
    modalContainer.appear({ duration: .3 });
    
    modalClose.observe('click', closeDelegate);
    
    $$('body')[0].insert(background);


 

    
    return closeDelegate;
}

 







function DisplayModalWindowVariable(content, dialogClosed, ww)
{
 
    
    var background = new Element('div', { 'id': 'ModalBoxBackground', 'style': 'display:block;' });
    var modalContainer = new Element('div', { 'class': 'ModalContainer', 'style': 'display:none; width:' + ww + 'px; margin-left: -' + (ww * .5) + 'px;'}).addClassName('ModalContainer');
    var modalClose = new Element('a', { 'href': 'javascript:void(0);', 'class': 'ModalClose'}).addClassName('ModalClose');
    var modalTop = new Element('div', { 'class': 'Modaltop', 'style': 'width:' + ww + 'px;' }).addClassName('Modaltop');
    var modalTopLeft = new Element('div', { 'class': 'ModalTopLeft' }).addClassName('ModalTopLeft').update('&nbsp;');
    var modalTopMiddle = new Element('div', { 'class': 'ModalTopMiddle', 'style': 'width:' + (ww - 55) + 'px;'}).addClassName('ModalTopMiddle');
    var modalTopRight = new Element('div', { 'class': 'ModalTopRight' }).addClassName('ModalTopRight').update('&nbsp;');
    var modalCenter = new Element('div', { 'class': 'ModalCenter', 'style': 'width:' + ww + 'px;' }).addClassName('ModalCenter');
    var modalCenterRight = new Element('div', { 'class': 'ModalCenterRight' }).addClassName('ModalCenterRight');
    var modalContent = new Element('div', { 'class': 'ModalContent' }).addClassName('ModalContent');
    var modalBottom = new Element('div', { 'class': 'ModalBottom', 'style': 'width:' + ww + 'px;' }).addClassName('ModalBottom');
    var modalBottomLeft = new Element('div', { 'class': 'ModalBottomLeft' }).addClassName('ModalBottomLeft').update('&nbsp;');
    var modalBottomMiddle = new Element('div', { 'class': 'ModalBottomMiddle', 'style': 'width:' + (ww - 55) + 'px;'}).addClassName('ModalBottomMiddle');
    var modalBottomRight = new Element('div', { 'class': 'ModalBottomRight' }).addClassName('ModalBottomRight').update('&nbsp;');
    var closeDelegate = function() { 
        modalContainer.fade({ duration:.3, afterFinish: function() { 
                content.remove();
                
                background.style.display = 'none'; 
                
                if(dialogClosed != null)
                {
                    dialogClosed(false); 
                }
            }
        })
    };
    
    modalContainer.insert(modalClose);
    modalContainer.insert(modalTop);
    modalContainer.insert(modalCenter);
    modalContainer.insert(modalBottom);
    
    modalTop.insert(modalTopLeft);
    modalTop.insert(modalTopMiddle);
    modalTop.insert(modalTopRight);
    
    modalCenter.insert(modalCenterRight);
    
    modalCenterRight.insert(modalContent);
    
    modalContent.update(content);
    modalContent.insert(new Element('div', { 'style': 'height:1px; font-size:1px; line-height:1px; display:block;' }));
    
    modalBottom.insert(modalBottomLeft);
    modalBottom.insert(modalBottomMiddle);
    modalBottom.insert(modalBottomRight);
    
    background.update(modalContainer);
    
    modalContainer.appear({ duration: .3 });
    
    modalClose.observe('click', closeDelegate);
    
    $$('body')[0].insert(background);

 
    return closeDelegate;
}



