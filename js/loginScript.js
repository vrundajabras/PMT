// Simulated user data in place of an actual SQL database
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            message.textContent = "Login successful!";
            return false; // Prevent form submission
        }
    }

    message.textContent = "Invalid username or password. Please try again.";
    return false; // Prevent form submission
}

