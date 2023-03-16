function validate() {
    var text;
    if (document.myForm.name.value == "") {
        text = "Name cannot be empty";
        document.getElementById("demo").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.email.value == "") {
        text = "E-mail cannot be empty";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }
    var emailID = document.myForm.email.value;
    atposn = emailID.indexOf("@");

    dotposn = emailID.lastIndexOf(".");
    // console.log(atposn , dotposn);

    if (atposn < 1 || (dotposn - atposn < 2)) {
        text = "Please enter valid email ID";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.pass.value == "" || 
        document.myForm.pass.value.length <= 6) {
        text = "Please enter a valid 6-digit password";
        document.getElementById("demo").innerHTML = text;
        document.myForm.pass.focus();
        return false;
    }
    if (document.myForm.subject.value == "0") {
        text = "Please provide your area of expertise";
        document.getElementById("demo").innerHTML = text;
        return false;
    }
    return (true);
}