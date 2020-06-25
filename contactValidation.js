

 function actionForm()
    {
    if (document.getElementById('fname').value == "") {
        alert("Warning! First name field cannot be blank.");
        document.getElementById('name').style.border = "3px solid red";
        regname.focus();
        return false;
    }

    if (document.getElementById('lname').value == "") {
        alert("Warning! Last name field cannot be blank.");
        document.getElementById('name').style.border = "3px solid red";
        regname.focus();
        return false;
    }
    
    if (document.getElementById('email').value == "") {
        window.alert("Warning! Email field cannot be blank.");
        document.getElementById('email').style.border = "3px solid red";
        regemail.focus();
        return false;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    
    if (document.getElementById('message').value == "") {
        alert("Warning! Message field cannot be blank.");
        document.getElementById('message').style.border = "3px solid red";
        message.focus();
        return false;
    }
    
    return true;
}
  
