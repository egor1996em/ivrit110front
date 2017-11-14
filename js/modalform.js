$(document).ready(function (event) {

    $('#login-form').click(function (event) {
        event.preventDefault();
       $('#overlay').fadeIn(500, function () {
           $('.modal_form').css('display', 'block');
           $('.modal_form').css('opacity', '1');
           $('.modal_form_element').css('display', 'block');
           $('.modal_form_element').css('opacity', '1');
       });
    });

    $('#login-form-icon').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(500, function () {
            $('.modal_form').css('display', 'block');
            $('.modal_form').css('opacity', '1');
            $('.modal_form_element').css('display', 'block');
            $('.modal_form_element').css('opacity', '1');
        });
    });

    $('.modal_close').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeOut(500, function () {
            $('.modal_form').css('opacity', '0');
            $('.modal_form_element').css('opacity', '0');
            $('.modal_form').css('display', 'none');
            $('.modal_form_element').css('display', 'none');
        });
    });

    $('#login').validate({
        submitHandler: function(form) {
            // do other things for a valid form
            form.submit();
        },

        rules:{
            login_input:{
                required: true
            },

            password_input:{
                required: true
            }
        },

        messages: {
            login_input: {
                required: '<span class="validation-msg">Необходимо указать имя пользователя</span>'
            },
            password_input:{
                required: '<span class="validation-msg">Необходимо ввести пароль</span>',
            }
        }
    });

});