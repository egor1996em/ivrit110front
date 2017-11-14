$(document).ready(function () {

    $('#registration-form').validate({
        submitHandler: function(form) {
            // do other things for a valid form
            form.submit();
        },

        rules:{
            login_field:{
                required: true,
                symbols: true
            },

            password_field:{
                required: true,
                minlength: 8,
                symbols: true
            },

            repeat_passport_field:{
              required: true,
                equalTo: '#password-field'
            },

            mail_field:{
                required: true,
                email: true
            }
        },

        messages: {
            login_field: {
                required: '<span class="validation-msg">Необходимо указать имя пользователя</span>',
                symbols: '<span class="validation-msg">Имя пользователя содержит недопустимые символы</span>'
            },
            password_field:{
                required: '<span class="validation-msg">Необходимо ввести пароль</span>',
                minlength: jQuery.validator.format('<span class="validation-msg"> Пароль должен состоять минимум из {0} символов</span>'),
                symbols: '<span class="validation-msg">Пароль содержит недопустимые символы</span>'
            },
            repeat_passport_field: {
                required: '<span class="validation-msg">Необходимо повторно ввести пароль</span>',
                equalTo: "<span class=\"validation-msg\">Пароль и повтор пароля должны совпадать</span>"
            },
            mail_field:{
                required:'<span class="validation-msg">Необходимо указать email</span>',
                email: '<span class="validation-msg">Email должен быть похож на name@example.com</span>'
            }
        }

    });

    jQuery.validator.addMethod("symbols",
        function(value, element, param) {
            if (this.optional(element)) {
                return true;
            } else if (/[A-Z]/.test(value)) {
                return true;
            } else if (/[a-z]/.test(value)) {
                return true;
            } else if (/[0-9]/.test(value)) {
                return true;
            } else if (/[~!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)){
                return true;
            }
            return false;
        },
        "Contains unresolve symbols");

});