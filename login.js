async function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const response = await fetch("users.json");
    const users = await response.json(); let found = false;
    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === enteredUsername &&
            users[i].password === enteredPassword
        ) {
            found = true;
            break;
        }
    }
    if (found) {
        window.location.href = "dashboard.html";
    }
    else {
        document.getElementById("error").textContent =
            "❌Invalid username or password!❌";
    }
}