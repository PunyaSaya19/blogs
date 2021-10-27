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
    tgl.innerHTML = articel.created_at;
    img.setAttribute('src', `assets/img/category/${articel.image}`);
    content.innerHTML = articel.content;
}