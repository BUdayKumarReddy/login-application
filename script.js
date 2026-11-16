
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Demo credentials only
    if (email === "admin@gmail.com" && password === "Admin123") {
        message.style.color = "green";
        message.textContent = "Login successful! Welcome Admin.";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
});
