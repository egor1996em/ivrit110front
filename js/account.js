$(document).ready(function () {

    $('#profile').click(function () {
        changePartitalName('Мой профиль');
    });

    $('#data').click(function () {
        changePartitalName('Изменение данных');
    });

    $('#courses').click(function () {
        changePartitalName('Мой курсы');
    });

});


function changePartitalName(newName){
    var partital_name = $('#partial_name');
    partital_name.fadeOut(80);
    partital_name.hide();
    partital_name.text(newName);
    partital_name.fadeIn(700);
}