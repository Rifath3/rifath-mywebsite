let users = [];

function showPage(page, button) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('exit').style.display = 'none';
    document.getElementById(page).style.display = 'block';

    let buttons = document.querySelectorAll('.menu button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function register() {
    let name = document.getElementById('name').value.trim();
    let department = document.getElementById('department').value.trim();
    let year = document.getElementById('year').value.trim();
    let section = document.getElementById('section').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    users.push({ Name: name, Department: department, Year: year, Section: section, Password: password });
    alert('Registration Successful!');

    showPage('login', document.querySelector(".menu button:nth-child(3)"));
}

function login() {
    let username = document.getElementById('login_username').value;
    let password = document.getElementById('login_password').value;

    let user = users.find(user => user.Name === username && user.Password === password);
    if (user) {
        alert('Login Successful!');
        showPage('home', document.querySelector(".menu button:nth-child(1)"));
    } else {
        alert('Invalid Credentials');
    }
}

function logout() {
    showPage('exit', document.querySelector(".menu button:nth-child(4)"));
}

function downloadExcel() {
    let ws = XLSX.utils.json_to_sheet(users);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
}
