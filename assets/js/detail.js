const title = document.getElementById('blog-title');
const category = document.getElementById('blog-category');
const tgl = document.getElementById('blog-tgl');
const img = document.getElementById('blog-img');
const content = document.getElementById('blog-content');


// action
window.addEventListener("DOMContentLoaded", () => {
  showAllArticel();
});

// function
function showAllArticel() {
  const id_articel = window.localStorage.getItem('id-detail-articel');
  const articels = JSON.parse(window.localStorage.getItem('articel'));
  let articel = '';
  articels.forEach((e) => {
    if (e.id == id_articel) {
      articel = e;
    }
  })
  console.log(articel);
  title.innerHTML = articel.title;
  category.innerHTML = "#" + articel.category;
  category.setAttribute('data-category', articel.category);
  tgl.innerHTML = convertDate(articel.created_at);
  img.setAttribute('src', `assets/img/category/${articel.image}`);
  content.innerHTML = articel.content;
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

function detailCategory(e) {
  const category = e.getAttribute("data-category");
  window.localStorage.setItem("detail-category", category);
  //window.location.href = "detail.html";
}