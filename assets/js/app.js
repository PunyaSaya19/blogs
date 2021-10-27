// inisialisasi variabel
const my_navbar = document.getElementById("my-navbar");
const cek_artikel = window.localStorage.getItem("articel");
const row_blog_content = document.getElementById("row-blog-content");
const recent_post = document.getElementById("recent-post");
const search_input = document.getElementById('search-field');
const blog_banner = document.getElementById("blog-banner");



// action
window.onscroll = () => {
  if (window.pageYOffset > 0) {
    my_navbar.classList.add("bg-navbar");
  } else {
    my_navbar.classList.remove("bg-navbar");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  if (cek_artikel == null) {
    createFirstArticel();
  }
  showAllArticel();
  showRecentPost();
})


// functions
function randomId() {
  let r = Math.random().toString(36).substring(8);
  return r;
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
function createFirstArticel() {
  const data = [
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 2",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 3",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 4",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 5",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 6",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 7",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 8",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
    {
      id: randomId(),
      title: "Welcome To PunyaSaya Blogs 9",
      category: "other",
      created_at: getDateNow(),
      image: "other.jpg",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
    },
  ];
  window.localStorage.setItem("articel", JSON.stringify(data));
}
function showAllArticel() {
  let articel = JSON.parse(window.localStorage.getItem("articel"));
  row_blog_content.innerHTML = "";
  row_blog_content.innerHTML = myTemplate(articel);
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
function myTemplate(data) {
  let tmplt = "";
  data.forEach((d) => {
    let content = d.content.substr(3, 75);
    content += "...";
    let dateInIndo = convertDate(d.created_at);
    tmplt += `
              <div class="col-12 col-md-4 col-lg-4">
                <article class="article article-style-b">
                  <div class="article-header">
                    <!--
                    <div class="article-image" data-background="assets/img/category/${d.image}">
                    </div>
                    -->
                    <img src="assets/img/category/${d.image}" class="w-100">
                  </div>
                  <div class="article-details">
                    <div class="article-title">
                      <h2>
                        <a href="#" onclick="detailArticel(this)" data-id="${d.id}">
                          ${d.title}
                        </a>
                      </h2>
                    </div>
                    <div class="article-category">
                      <a href="#" class="my-category">
                        #${d.category}
                      </a> 
                      <p class="mt-0 my-tgl-blog">
                       ${dateInIndo}
                      </p>
                   </div>
                    <p>
                      ${content}
                    </p>
                    <div class="article-cta">
                      <a href="#" onclick="detailArticel(this)" data-id="${d.id}">Read More <i class="fas fa-chevron-right"></i></a>
                    </div>
                  </div>
                </article>
              </div>
    `;
  });
  return tmplt;
}
function detailArticel(e) {
  const id = e.getAttribute("data-id");
  window.localStorage.setItem("id-detail-articel", id);
  window.location.href = "detail.html";
}
function showRecentPost() {
  let articel = JSON.parse(window.localStorage.getItem("articel"));
  articel = articel.reverse();
  recent_post.innerHTML = "";
  recent_post.innerHTML = recentTemplate(articel);
}
function recentTemplate(data) {
  let tmplt = ``;
  data.forEach((e, i) => {
    if (i < 5) {
      tmplt += `
          <li>
            <a href="#" onclick="detailArticel(this)" data-id="${e.id}">
              ${e.title}
            </a>
          </li>
      `;
    }
  })
  return tmplt;
}
function searchBlogs() {
  const search_query = search_input.value.toLowerCase();
  const all_articel = JSON.parse(window.localStorage.getItem('articel'));
  let articels = [];
  all_articel.forEach((e, i) => {
    let articel_title = e.title.toLowerCase();
    //console.log(articel_title.includes(search_query))
    if (articel_title.includes(search_query) == true) {
      articels.push(e);
    }
  });
  console.log(articels == null);
  row_blog_content.innerHTML = "";
  if (articels.length < 1) {
    row_blog_content.innerHTML = `
    <div class="col">
              <p class="text-center text-danger">
                Artikel Tidak Ditemukan!!
              </p>
            </div>
    `
  } else {
    row_blog_content.innerHTML = myTemplate(articels);
  }
  window.scrollTo(0, blog_banner.clientHeight);
}