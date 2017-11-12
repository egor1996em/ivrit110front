$().ready(function (e) {
    $('body').css("overflow-y","hidden");
    $(document).bind('touchmove', false);
    $('body').addClass("fixed");

    slideshowElements = getSlideshowElements();
    currentSlideshowElementIndex = 0;

    $('#scrollup').click(function () {
        slideshowScrollUp(slideshowElements);
    });

    $('#scrolldown').click(function () {
        slideshowScrollDown(slideshowElements);
        return false;
    });

});

function slideshowScrollUp(slideshowElements){
    if (currentSlideshowElementIndex == 0){
        return;
    }
    currentSlideshowElementIndex = (currentSlideshowElementIndex - 1) % slideshowElements.length;
    destination = $(slideshowElements[currentSlideshowElementIndex]).offset().top;

    $('html').animate( { scrollTop: destination }, 700 );

    return false;
}

function slideshowScrollDown(slideshowElements){
    if (currentSlideshowElementIndex == slideshowElements.length - 1){
        return;
    }
    currentSlideshowElementIndex = (currentSlideshowElementIndex + 1) % slideshowElements.length;
    destination = $(slideshowElements[currentSlideshowElementIndex]).offset().top;

    $('html').animate( { scrollTop: destination }, 700 );

    return false;
}

function getSlideshowElements(){
    slideshowElements = [];
    slideshowElements.push($('.header'));

    var slideshowElementsToAdd = $('.slideshow-element-wrapper');
    for(var i = 0 ; i < slideshowElementsToAdd.length; i++){
        slideshowElements.push(slideshowElementsToAdd[i]);
    }

    slideshowElements.push($('.footer'));

    return slideshowElements;
}

var currentSlideshowElementIndex;
var slideshowElements;