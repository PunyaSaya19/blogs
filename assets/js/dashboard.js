// inisialisasi variabel 
const iCategory = document.getElementById('input-category');
const listCategory = document.getElementById('list-category');
const divTotalCategory = document.getElementById("div-total-category");
const divTotalArticel = document.getElementById("div-total-articel");
const wadahTabel = document.getElementById("wadah-tabel");

// action
window.addEventListener("DOMContentLoaded", () => {
    cekLogin();
    showListCategory();
    showListArticel();
    showTotalArticel()
    showTotalcategory();
});

// function
function cekLogin() {
    const statusLogin = window.localStorage.getItem("login");
    if (statusLogin == null || statusLogin != "true") {
        window.location.href = "../login.html";

    }
}

function showTotalcategory() {
    const allCategory = JSON.parse(window.localStorage.getItem('category'));
    divTotalCategory.innerText = allCategory.length;
}

function showTotalArticel() {
    const allArticel = JSON.parse(window.localStorage.getItem('articel'));
    divTotalArticel.innerText = allArticel.length;
}

function showNotify(msg, color = "green", icon = "fas fa-check") {
    iziToast.show({
        title: msg,
        color: color,
        icon: icon,
        position: "topRight",
    });
}

function addCategory() {
    if (iCategory.value == "") {
        // alert("Please Fill Category Input");
        showNotify("Please Fill Category Input", 'yellow', "fas fa-exclamation-triangle")
        return false;
    }
    const allCategory = JSON.parse(window.localStorage.getItem('category'));
    if (allCategory.includes(iCategory.value.toLowerCase())) {
        showNotify("This category already exists", 'yellow', "fas fa-exclamation-triangle")
        return false;
    }
    allCategory.push(iCategory.value.toLowerCase());
    window.localStorage.setItem("category", JSON.stringify(allCategory));
    iCategory.value = "";
    showNotify("New Category Has Been Add");
    showListCategory();
    showTotalcategory();
}

function showListCategory() {
    const allCategory = JSON.parse(window.localStorage.getItem("category"));
    listCategory.innerHTML = "";
    listCategory.innerHTML = categoryTemplate(allCategory.sort());
}

function showListArticel() {
    const allArticel = JSON.parse(window.localStorage.getItem("articel"));
    wadahTabel.innerHTML = "";
    wadahTabel.innerHTML = articelTemplate(allArticel.sort());
    $('#tables').DataTable();
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

function articelTemplate(data) {
    let no = 1;
    let tmplt = `
    <table class="table table-striped" id="tables">
            <thead>
                <tr>
                <th class="text-center">
                    #
                </th>
                <th>Title</th>
                <th>Category</th>
                <th>Created At</th>
                </tr>
            </thead>

            <tbody>
    `;
    data.forEach((e) => {
        tmplt += `
                <tr>
                <td>
                    ${no++}
                </td>
                <td>
                    ${e.title}
                    <div class="table-links">
                    <a href="../detail.html" onclick="detailArticel(this)" data-id="${e.id}">View</a>
                    <div class="bullet"></div>
                    <a href="#" data-toggle="modal" data-target="#modalEdit" data-idArticel="${e.id}"
                        onclick="isiModalEdit(this)">Edit</a>
                    <div class="bullet"></div>
                    <span style="cursor: pointer" class="text-danger" data-idArticel="${e.id}"
                        onclick="deleteArticel(this)">Trash</span>
                    </div>
                </td>
                <td>
                    <span class="text-primary">
                    #${e.category}
                    </span>
                </td>
                <td>
                    ${convertDate(e.created_at)}
                </td>
                </tr>
        `;
    });
    tmplt += `
        </tbody>
    </table>
    `;
    return tmplt;
}

function removeCategory(e) {
    const confirms = confirm('yakin??');
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
    showNotify("Category Has Been Deleted");
    showListCategory();
    showTotalcategory();
}

function detailArticel(e) {
    const id = e.getAttribute("data-id");
    window.localStorage.setItem("id-detail-articel", id);
    //window.location.href = "detail.html";
}

function convertDate(data) {
    const arr = data.split("-");
    const arrBlnIndo = [
        "Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    let bln = parseInt(arr[1]) - 1;
    bln = arrBlnIndo[bln];
    return `${arr[2]} ${bln} ${arr[0]}`;
}

function deleteArticel(e) {
    const cnfr = confirm("Yakin??");
    if (!cnfr) {
        return false;
    }
    const id = e.getAttribute("data-idArticel");
    const allArticel = JSON.parse(window.localStorage.getItem("articel"));
    let newArticel = [];
    allArticel.forEach((el) => {
        if (el.id != id) {
            newArticel.push(el)
        }
    });
    window.localStorage.setItem("articel", JSON.stringify(newArticel));
    showNotify("Success Delete Articel!!");
    showListArticel();
}