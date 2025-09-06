let username, email,company,exe,tel,msg;

document.getElementById("testForm").addEventListener("submit", function(e) {
    e.preventDefault();
        username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    company = document.getElementById("company").value;
    exe = document.getElementById("Phone").value;
    tel = document.getElementById("Phone-number").value;
    msg = document.getElementById("message").value;

    console.log(company);
});

