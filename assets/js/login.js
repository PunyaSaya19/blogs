// email and password login
const email = 'punyasaya@official.com';
const pass = 'punyasaya';

// variabels 
const iEmail = document.getElementById('email');
const iPass = document.getElementById('password');
const btnSubmit = document.getElementById('btn-submit');
const loginFeedback = document.getElementById('login-feedback');

// action 
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (iEmail.value == "" || iPass.value == "") {
        loginFeedback.innerHTML = "";
        loginFeedback.innerHTML = `
             <div class="alert alert-warning" role="alert">
                Harap Untuk Mengisi Email dan Password!!
             </div>
        `;
        return false;
    }
    if (iEmail.value != email || iPass.value != pass) {
        loginFeedback.innerHTML = "";
        loginFeedback.innerHTML = `
             <div class="alert alert-danger" role="alert">
                Oupsss.. Email atau Password SALAH!!!
             </div>
        `;
        return false;
    }
    window.localStorage.setItem('login', 'true');
    window.location.href = "admin/dashboard.html";
})

window.addEventListener("DOMContentLoaded", () => {
    const stslgn = window.localStorage.getItem("login");
    if (stslgn == "true") {
        window.location.href = "admin/dashboard.html"
    }
})