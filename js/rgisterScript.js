// Simulated user data in place of an actual SQL database
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function registerUser() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const emailid = document.getElementById('emailid').value;
    const userid = document.getElementById('userid').value;
    const org_name = document.getElementById('org_name').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            message.textContent = "Login successful!";
            return false; // Prevent form submission
        }
    }

    
}

