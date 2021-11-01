const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", (e) => {
    const confirms = confirm('yalkin??');
    if (confirms) {
        window.localStorage.setItem('login', 'false');
        window.location.href = "../index.html";
    }

})