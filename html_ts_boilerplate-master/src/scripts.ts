
$(document).ready(function () {
    $("#userLen").hide()
    $("#userSymbols").hide()
    $("#emailValid").hide()
    $("#emailEmpty").hide()
    $("#passwordLen").hide()
    $("#passwordValid").hide()
    $("#successMessage").hide()
    
});


const validateUsernameLen = (element: string) => {
    let username = $(element).val()
    if (
        username === "" ||
        username.length < 3 ||
        username.length > 50
        ) 
    {
        return false
    } else {
        return true
    }
}

const validateUsernameSymbols = (element: string) => {
    let username = $(element).val()
    let letters = /^[A-Za-z]+$/
    if (username.match(letters)) {
        return true
    } else {
        return false
    }
}    

const emailEmpty = (element: string) => {
    let email = $(element).val()
    if ( email === "") {
        return false
    } else {
        return true
    }
}

const validateEmail = (element: string) => {
    let email = $(element).val()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    } else {
        return false
    }
}   

const passwordLen = (element: string) => {
    let password = $(element).val()
    if (password === "" || password.length < 8) {
        return false
    } else {
        return true
    }
}

const passwordValid = (element: string) => {
    let password = $(element).val()
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
    if (regex.test(password)) {
        return true
    } else {
        return false
    }
}


$('#form').submit(function( event ) {
    if (validateUsernameLen('#userName') === false) {
        event.preventDefault();
        $("#emailEmpty").hide()
        $("#emailValid").hide()
        $("#passwordValid").hide()
        $("#passwordLen").hide()
        $("#userSymbols").hide()
        $("#userLen").show()

    } else if (validateUsernameSymbols('#userName') === false) {
        event.preventDefault();
        $("#userLen").hide()
        $("#emailEmpty").hide()
        $("#emailValid").hide()
        $("#passwordValid").hide()
        $("#passwordLen").hide()
        $("#userSymbols").show()

    } else if (validateEmail('#email') === false) {
        event.preventDefault();
        $("#emailEmpty").hide()
        $("#userLen").hide()
        $("#userSymbols").hide()
        $("#passwordValid").hide()
        $("#passwordLen").hide()
        $("#emailValid").show()

    }  else if (emailEmpty('#email') === false) {
        event.preventDefault();
        $("#emailEmpty").show()
        $("#userLen").hide()
        $("#emailValid").hide()
        $("#passwordValid").hide()
        $("#passwordLen").hide()
        $("#userSymbols").hide()   

    }  else if (passwordLen("#password") === false) {
        event.preventDefault();
        $("#emailEmpty").hide()
        $("#userLen").hide()
        $("#emailValid").hide()
        $("#userSymbols").hide()
        $("#passwordValid").hide()
        $("#passwordLen").show()  

    }   else if (passwordValid("#password") === false) {
        event.preventDefault();
        $("#emailEmpty").hide()
        $("#userLen").hide()
        $("#emailValid").hide()
        $("#userSymbols").hide()
        $("#passwordLen").hide()    
        $("#passwordValid").show()

    }  else {
        event.preventDefault();
        $("#successMessage").show()
    } 
    
});
    
export default validateUsernameLen