$(document).ready(function (e) {
    setBookPicture();

    $(window).resize(function (){
        setBookPicture();
    });
});

//id контейнера - назвние картинки учебника и его идентификация на странице
function setBookPicture(){
        var book = $('.book-page-container');
        var windowWidth = $(window).width();
        var directoryName = getDirectoryName(windowWidth);
        var URL;

        URL = createURLtoBookImage(directoryName, $(book).attr("id"));
        $(book).children('.book-cover').attr('style', 'background: url("' + URL + '") no-repeat; ' +
        'background-size: contain;');
}

function createURLtoBookImage(directoryName, filename) {
    var URL = 'images/books/' + directoryName + '/' + filename + '.png';

    return URL;
}

function getDirectoryName(windowWidth){
    var directoryName;
    if (windowWidth > 1199){
        directoryName = "large";
    } else if (windowWidth <= 1199 && windowWidth > 992) {
        directoryName = "big";
    }
    else if (windowWidth <= 992 && windowWidth > 768) {
        directoryName = "middle";
    } else if (windowWidth <= 768 && windowWidth > 544) {
        directoryName = "small";
    } else {
        directoryName = "extrasmall";
    }

    return directoryName;
}