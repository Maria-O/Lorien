// Signin form
$("#authorization").on("submit", function(e){
    e.preventDefault();
    localStorage.setItem('email', $("#email").val());
    window.location.assign("success-signin.html");
    return false;
});

// Read from localStorage email
$("#email").attr("value", localStorage.getItem('email'));

// Change password and write to sessionStorage
$("#change").on("submit", function(){
    sessionStorage.setItem('password', $("#new-password").val());
});

// Save old password to sessionStorage
$("#change-password").on("click", function(){
    sessionStorage.setItem('password', $("#password").val());
});

// Set old password
$("#old-password").attr("placeholder",  sessionStorage.getItem('password'));