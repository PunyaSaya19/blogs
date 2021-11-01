// inisialisasi variabel 
const iCategory = document.getElementById('input-category');
const listCategory = document.getElementById('list-category');

// action
window.addEventListener("DOMContentLoaded", () => {
    cekLogin();
    showListCategory();
});

// function
function cekLogin() {
    const statusLogin = window.localStorage.getItem("login");
    if (statusLogin == null || statusLogin != "true") {
        window.location.href = "../login.html";

    }
}

function addCategory() {
    if (iCategory.value == "") {
        alert("Please Fill Category Input");
        return false;
    }
}

function showListCategory() {
    const allCategory = JSON.parse(window.localStorage.getItem("category"));
    listCategory.innerHTML = "";
    listCategory.innerHTML = categoryTemplate(allCategory.sort());
}

function categoryTemplate(data) {
    let tmplt = "";
    data.forEach((e) => {
        tmplt += `
        <button type="button" class="btn btn-outline-primary rounded-pill m-1">
            #${e} <span class="badge badge-danger" data-category="${e}" onclick="removeCategory(this)"><i class="fas fa-times"></i></span>
        </button>
        `;
    });
    return tmplt;
}

function removeCategory(e) {
    const confirms = confirm('yalkin??');
    if (!confirms) {
        return false;
    }
    const categoryName = e.getAttribute('data-category');
    let newCategory = [];
    const allCategory = JSON.parse(window.localStorage.getItem("category"));
    allCategory.forEach((e) => {
        if (e != categoryName) {
            newCategory.push(e);
        }
    });
    // console.log(newCategory)
    window.localStorage.setItem('category', JSON.stringify(newCategory));
    showListCategory();
}