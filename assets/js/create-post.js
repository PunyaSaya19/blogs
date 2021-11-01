// inisialisasi variabel 


// action
window.addEventListener("DOMContentLoaded", () => {
    cekLogin();
});

// function
function cekLogin() {
    const statusLogin = window.localStorage.getItem("login");
    if (statusLogin == null || statusLogin != "true") {
        window.location.href = "../login.html";

    }
}