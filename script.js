document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    if (password === "mysecretpassword") {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Welcome! Your secret text goes here.";
    } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
});
