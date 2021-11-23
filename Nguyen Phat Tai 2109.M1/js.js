function checkLogin(){
    var first = formLOG.txtFirst.value;
    var last = formLOG.txtLast.value;
    var email = formLOG.txtMail.value;
    var tel = formLOG.phone.value;
    if(first == ""){
        alert("First name must not be blank!");
        return false;
    }

    if(last == ""){
        alert("Last name must not be blank!");
        return false;
    }

    if(email == ""){
        alert("Email must not be blank!");
        return false;
    }

    if(tel == ""){
        alert("Telephone must not be blank!");
        return false;
    }

    else{
        alert("Congratulation! Your information has been sent successfully!");
    }
}