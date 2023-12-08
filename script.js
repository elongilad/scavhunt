document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    if (password === "212") {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Welcome spies! Find the secret code in the storage unit!";
    } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
});
