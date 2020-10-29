function getPassword() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?<>:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}