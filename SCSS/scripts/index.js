

document.getElementById("submit-button").addEventListener("click", function() {
    const reason = document.getElementById("leave-reason").value;

    const message = document.getElementById("status-message");

    if(reason == "") {
        message.textContent = "Failed! please fill the form";
        message.className = "error-status"
    }
    else {
        message.textContent = "Success!";
        message.className = "success-status"
    }
});