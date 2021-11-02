// inisialisasi variabel 
const title = document.getElementById("title");
const category = document.getElementById("category");
const content = document.getElementById("content");
const btnSubmit = document.getElementById("btn-submit");
const arrThumbnailArticel = [1, 2, 3, 4, 5, 6, 7, 8];
const wadahThumbnail = document.getElementById("wadah-thumbnail");

// action
window.addEventListener("DOMContentLoaded", () => {
    cekLogin();
    showSummernote();
    showCategory();
    showThumbnail();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addNewArticel();
})

// function
function cekLogin() {
    const statusLogin = window.localStorage.getItem("login");
    if (statusLogin == null || statusLogin != "true") {
        window.location.href = "../login.html";

    }
}

function getDateNow() {
    const date = new Date();
    const Y = date.getFullYear();
    const m = date.getMonth() + 1;
    let d = date.getDate();
    if (d < 10) {
        d = "0" + d;
    }
    return `${Y}-${m}-${d}`;
}

function randomId() {
    let r = Math.random().toString(36).substring(8);
    return r;
}

function addNewArticel() {
    const ttl = title.value;
    const ctg = category.value;
    const cntn = content.value;
    const datenow = getDateNow();
    const thumb = document.querySelector('input[name="thumbnail"]:checked').value;
    const newArticel = {
        id: randomId(),
        title: ttl,
        category: ctg,
        created_at: getDateNow(),
        image: thumb,
        content: cntn
    }
    const allArticel = JSON.parse(window.localStorage.getItem("articel"));
    allArticel.push(newArticel);
    window.localStorage.setItem('articel', JSON.stringify(allArticel));
    alert("berhsil");

}

function showSummernote() {
    $('#content').summernote({
        height: 150,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear', 'fontsize']],
            ['color', ['color']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['view', ['fullscreen', 'codeview', 'redo']],
        ]
    });
}

function showCategory() {
    const allCategory = JSON.parse(window.localStorage.getItem("category"));
    category.innerHTML = categoryTemplate(allCategory.sort());
}

function showThumbnail() {
    wadahThumbnail.innerHTML = thumbnailTemplate(arrThumbnailArticel);
}

function categoryTemplate(data) {
    let tmplt = "";
    data.forEach((e) => {
        tmplt += `
        <option value="${e}"">${e}</option>
        `;
    });
    return tmplt;
}

function thumbnailTemplate(data) {
    let tmplt = `
    <div class="col-md-3 col-sm-4">
    <label class="imagecheck mb-4">
      <input name="thumbnail" type="radio" value="default.jpg" class="imagecheck-input"
        checked />
      <figure class="imagecheck-figure">
        <img src="../assets/img/articel/default.jpg" alt="}" class="imagecheck-image">
      </figure>
    </label>
  </div>
    `;
    data.forEach((e) => {
        tmplt += `
        <div class="col-md-3 col-sm-4">
        <label class="imagecheck mb-4">
          <input name="thumbnail" type="radio" value="${e}.jpg" class="imagecheck-input" />
          <figure class="imagecheck-figure">
            <img src="../assets/img/articel/${e}.jpg" alt="}" class="imagecheck-image">
          </figure>
        </label>
      </div>
        `;
    });
    return tmplt;
}