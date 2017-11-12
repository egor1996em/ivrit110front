$(document).ready(function (e) {
    setPicturesToBooks();
});

//id контейнера - назвние картинки учебника и его идентификация на странице
function setPicturesToBooks(){
    var booksOnPage = $('.book-page-container');

    for (var i = 0; i < booksOnPage.length; i++){
        var book = $(booksOnPage[i]);
        var windowWidth = $(window).width();
        var directoryName;
        var URL;
        //if (windowWidth > 1199){
            directoryName = "large";
            URL = createURLtoBookImage(directoryName, $(book).attr("id"));
            $(book).children('.book-cover').attr('style', 'background: url("' + URL + '") no-repeat; ' +
                'background-size: contain;');
        //}
    }

}

function createURLtoBookImage(directoryName, filename) {
    var URL = 'images/books/' + directoryName + '/' + filename + '.jpg';

    return URL;
}