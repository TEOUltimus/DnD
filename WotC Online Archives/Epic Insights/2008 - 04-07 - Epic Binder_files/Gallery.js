




/*
     FILE ARCHIVED ON 11:11:08 Aug 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:05 Jul 30, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function SwitchPages(nextPage, galleryId, articleName, fileName, galleryName, pagingContainerID, javascriptPostfix, numberPerPage, displayText)
{
    var nextGalleryPlaceHolderID = 'NextImages' + javascriptPostfix;

    var gallery = $(galleryId);
    var currentPage = gallery.parentNode.currentPage;
    
    var nextGalleryPlaceHolder = $(nextGalleryPlaceHolderID);
    var pagingContainer = $(pagingContainerID);

    if(gallery != null && nextGalleryPlaceHolder != null)
    {
        if(currentPage != nextPage)
        {
            nextGalleryPlaceHolder.update(gallery.innerHTML);
            nextGalleryPlaceHolder.insert(new Element('div', {'class': 'clear'}).addClassName('clear'));
            nextGalleryPlaceHolder.style.visibility = 'visible';
            
            if(currentPage == null || currentPage < nextPage)
            {
                nextGalleryPlaceHolder.style.left = '0px';
            
                new Effect.Move(gallery, {x: -677, y: 0, mode: 'relative' });
                new Effect.Move(nextGalleryPlaceHolder, { x: -677, y: 0, mode: 'relative', afterFinish: function() { UpdateGallery(nextPage, nextGalleryPlaceHolder, gallery, articleName, fileName, galleryName, pagingContainer, javascriptPostfix, numberPerPage, displayText); } });
            }
            else
            {
                nextGalleryPlaceHolder.style.left = '-1354px';
                
                new Effect.Move(gallery, {x: 677, y: 0, mode: 'relative' });
                new Effect.Move(nextGalleryPlaceHolder, { x: 677, y: 0, mode: 'relative', afterFinish: function() { UpdateGallery(nextPage, nextGalleryPlaceHolder, gallery, articleName, fileName, galleryName, pagingContainer, javascriptPostfix, numberPerPage, displayText); } });
            }
        }
        
        gallery.parentNode.currentPage = nextPage;
    }
    
    return false;
}

function UpdateGallery(nextPage, placeHolder, previousGallery, articleName, fileName, galleryName, pagingContainer, javascriptPostfix, numberPerPage, displayText)
{
    var nextGalleryPlaceHolderID = 'NextImages' + javascriptPostfix;
    var nextGalleryPlaceHolderChildID = 'NextImagesPlaceHolder' + javascriptPostfix;
    
    new Ajax.Request('/DnD/Globals/Services/Gallery.ashx', {
            method: 'get',
            parameters: { displayText:displayText, perPage:numberPerPage, javascriptPostFix: javascriptPostfix, page: nextPage, articleName: articleName, fileName: fileName, galleryName: galleryName, cacheBust: new Date().getTime() },
            onSuccess:  function(transport) {
                var result = eval('(' + transport.responseText + ')');
                
                if(result.OperationResult)
                {
                    var dataArray = result.Data;
                    var galleryId = previousGallery.id;
                    
                    window[javascriptPostfix + 'ImageSet'] = dataArray[2];
                                        
                    pagingContainer.update(dataArray[0]);
                   
                    previousGallery.remove();
                    placeHolder.update(dataArray[1]);  
                    placeHolder.style.left = '0px';                    
                    placeHolder.className = 'GalleryImages';
                    
                    var newPlaceHolder = new Element('div', { id: nextGalleryPlaceHolderID, 'class': 'GalleryImagesPlaceHolder' }).addClassName('GalleryImagesPlaceHolder');                 
                    
                    newPlaceHolder.style.visibility = 'hidden';
                    
                    placeHolder.id = galleryId;
                    
                    $(placeHolder.parentNode).insert(newPlaceHolder);
                }
            }
    });
}