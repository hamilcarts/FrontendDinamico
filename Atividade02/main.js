const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const resultDiv = document.querySelector('#result');
const userData = {};

nameInput.addEventListener('input', () => {
    userData.name = nameInput.value;
    console.log(userData);
    printUserData();
});

emailInput.addEventListener('input', () => {
    userData.email = emailInput.value;
    console.log(userData);
    printUserData();
});

userNameInput.addEventListener('input', () => {
    userData.name = userNameInput.value;
    console.log(userData);
    printUserData();
});

passwordInput.addEventListener('input', () => {
    userData.password = passwordInput.value;
    console.log(userData);
    printUserData();
});

confirmPasswordInput.addEventListener('input', () => {
    userData.confirmPassword = confirmPasswordInput.value;
    console.log(userData);
    printUserData();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulário enviado!');
});

function printUserData() {
    if(resultDiv){
    resultDiv.textContent = JSON.stringify(userData);
    }
}


function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.indexOf("@") == -1) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }
    return true;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }
    return true;
}

function validateUser() {
    if (users.indexOf(username) !== -1) {
        alert("Nome de usuário já foi utilizado!");
        return;
    }
}

window.addEventListener("load", function () {
    var users = [];
    var emails = [];

    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var username = document.getElementById("username").value;

        if (emails.indexOf(email) !== -1) {
            alert("Email já foi utilizado!");
            return;
        }

        if (users.indexOf(username) !== -1) {
            alert("Nome de usuário já foi utilizado!");
            return;
        }
        
        if (validateEmail() && validatePassword() && validateUser) {
            
            users.push(username);
            emails.push(email);

            var result = document.createElement("div");
            result.id = "result";
            result.innerHTML = "<p>Nome: " + name + "</p>" +
                "<p>E-mail: " + email + "</p>" +
                "<p>Senha: " + password + "</p>" +
                "<p>Nome de usuário: " + username + "</p>";
            var container = document.getElementById("container");
            container.appendChild(result);
        }
    });
});