
function makePassword() {

    var length = prompt("Password length? (8-128)");

    if (length < 8 || length > 128) {
        alert("Needs to be 8-128 characters.");
        return "";
    }


    var useLower = confirm("Use lowercase?");
    var useUpper = confirm("Use uppercase?");
    var useNumbers = confirm("Use numbers?");
    var useSpecial = confirm("Use special characters?");


    if (!useLower && !useUpper && !useNumbers && !useSpecial) {
        alert("Pick at least one type.");
        return "";
    }


    var allChars = "";
    if (useLower) allChars += "abcdefghijklmnopqrstuvwxyz";
    if (useUpper) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) allChars += "0123456789";
    if (useSpecial) allChars += "!@#$%^&*";


    var pass = "";
    for (var i = 0; i < length; i++) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }


    return pass;
}


var button = document.querySelector("#generate");


function showPassword() {
    var newPassword = makePassword();
    document.querySelector("#password").value = newPassword;
}


button.addEventListener("click", showPassword);
