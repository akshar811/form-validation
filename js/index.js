document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let email = document.getElementById("email").value;

    if (name.length > 0) {
        console.log(name);
    }
    else {
        alert("Please enter your name");
    }
    if (email == "") {
        alert("email can't be blank");
    }
    else {
            console.log(email);
        }

    if (password.length > 8 ) {
        console.log(password);
    }
    else {
        alert("Password must be al least 8 characters long.");
    }

    if (password == repassword) {
        console.log(repassword);
    }
    else {
        alert("Password not matched")
    }

})