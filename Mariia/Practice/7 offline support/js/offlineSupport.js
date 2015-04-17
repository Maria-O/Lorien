/**
 * Created by Mariia_Obizna on 4/14/2015.
 */

var jsonSData = {
        "admin": {
            "password":"qwerty"
        },
        "user": {
            "password":"123312"
        }
    },
    readyForStorage = JSON.stringify(jsonSData);
localStorage.setItem("users", readyForStorage);


$(document).ready(function(){
    var login = $("#login"),
    currentLogin = sessionStorage.getItem("currentLogin"),
    inSessStor = sessionStorage.currentLogin || "There is no records in session storage",
    users = $.parseJSON(localStorage.users),
    password = $('#password'),
    fields = $(".text-inputs-wrapper").find('.field'),
    helpBtn = $("#help-btn");

    login.val(currentLogin);
    login.blur(function(){
        inSessStor =  $(this).val() == "" ? 'There is no records in session storage' :$(this).val();
        sessionStorage.setItem("currentLogin",$(this).val());
        $('.session-stor').find('.current').text(inSessStor);
    });

    $("#login-btn").on("click", function(e) {
        fields.each(function (i, val) {
            if (!$(val).val()) {
                $(this).addClass('error');
            }
        });
        if (!users[login.val()]) {
            fields.addClass('error');
        } else {
            if (users[login.val()].password == password.val()) {
                $(this).closest('.login-form').fadeOut();
                setTimeout(function () {
                    $(".secret-link").fadeIn();
                }, 600);
            } else {
                password.addClass('error');
            }
        }
    });

    $('.field').on('blur', function(){
        if ($(this).val()) {
            $(this).removeClass('error');
        } else {
            $(this).addClass('error');
        }
       });

    function updateHelpInfo() {
        var user="";
        $.map(users, function(val, i){
            user += '<p">Login: ' + i + ', Password: ' + val.password + '</p>';
        });
        $('.local-stor').find('.content').html(user);
        $('.session-stor').find('.content').html("<span class='current'>"+inSessStor+"</span>");
    }

    helpBtn.on("click", function() {
        updateHelpInfo();
        $('.help-info').fadeIn( 'fast');
    });

    $("#sign-btn").on("click", function(){
        var forStorage,
        isAllFilled = true;
        fields.removeClass('error');
        fields.each(function (i, val) {
            if (!$(val).val()) {
                $(this).addClass('error');
                isAllFilled = false;
            }
        });
        if (isAllFilled&&(!users[login.val()])) {
            users[login.val()] = {'password': password.val()};
            forStorage = JSON.stringify(users);
            localStorage.setItem("users",forStorage);
            updateHelpInfo();
        } else {
        password.addClass('error');
        }
    });
});
