document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    if (password === "212") {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "יָפֶה מְאֹד! הַמַּפְתֵּחַ נִמְצָא קָבוּר בָּאֲדָמָה מִתַּחַת לְכַדּוּר יָם לְיַד הָאוֹטוֹ שֶׁל אַבָּא וְאִמָּא שֶׁל עָמוֹס וְעִילַי!";
    } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "שְׁגִיאָה. נַסֵּה שֵׁנִית.";
    }
});
