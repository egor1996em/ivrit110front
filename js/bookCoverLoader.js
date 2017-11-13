$(document).ready(function (e) {
    setBookPicture();
});

//id контейнера - назвние картинки учебника и его идентификация на странице
function setBookPicture(){
        var book = $('.book-page-container');
        var windowWidth = $(window).width();
        var directoryName;
        var URL;
        if (windowWidth > 1199){
        directoryName = "large";
        }
        URL = createURLtoBookImage(directoryName, $(book).attr("id"));
        $(book).children('.book-cover').attr('style', 'background: url("' + URL + '") no-repeat; ' +
        'background-size: contain;');
}

function createURLtoBookImage(directoryName, filename) {
    var URL = 'images/books/' + directoryName + '/' + filename + '.jpg';

    return URL;
}