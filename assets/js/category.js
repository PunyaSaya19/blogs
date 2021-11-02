const categoryName = document.getElementById('category');
const listArticels = document.getElementById('list-articels');
const nameCategory = window.localStorage.getItem('detail-category');


// action
window.addEventListener("DOMContentLoaded", () => {
  showCategoryName();
  showAllArticel();
});


// function
function showCategoryName() {
  categoryName.innerText = nameCategory;
}

function showAllArticel() {
  const allArticels = JSON.parse(window.localStorage.getItem('articel'));
  let arrArticel = [];
  allArticels.forEach((e) => {
    if (e.category == nameCategory) {
      arrArticel.push(e);
    }
  });
  listArticels.innerHTML = myTemplate(arrArticel.reverse());
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
                      <div class="article-image" data-background="assets/img/articel/${d.image}">
                      </div>
                      -->
                      <img src="assets/img/articel/${d.image}" class="w-100">
                    </div>
                    <div class="article-details">
                      <div class="article-title">
                        <h2>
                          <a href="detail.html" onclick="detailArticel(this)" data-id="${d.id}">
                            ${d.title}
                          </a>
                        </h2>
                      </div>
                      <div class="article-category">
                        <p class="mt-0 my-tgl-blog">
                         ${dateInIndo}
                        </p>
                     </div>
                      <p>
                        ${content}
                      </p>
                      <div class="article-cta">
                        <a href="detail.html" onclick="detailArticel(this)" data-id="${d.id}">Read More <i class="fas fa-chevron-right"></i></a>
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
  //window.location.href = "detail.html";
}