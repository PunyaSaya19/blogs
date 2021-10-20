// inisialisasi variabel
const my_navbar = document.getElementById("my-navbar");
const cek_artikel = window.localStorage.getItem("articel");
// action
window.onscroll = () => {
  if(window.pageYOffset > 0){
    my_navbar.classList.add("bg-navbar");
  }else{
    my_navbar.classList.remove("bg-navbar");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  if(cek_artikel == null){
    createFirstArticel();
  }
  showAllArticel();
})

// functions
function randomId()
{
  let r = Math.random().toString(36).substring(8);
  return r;
}
function getDateNow()
{
  const date = new Date();
  const Y = date.getFullYear();
  const m = date.getMonth() + 1;
  let d = date.getDate();
  if(d < 10){
    d = "0" + d;
  }
  return `${Y}-${m}-${d}`;
}
function createFirstArticel() 
{
  const data = {
    id : randomId(),
    title : "Welcome To PunyaSaya Blogs",
    category : "other",
    created_at : getDateNow(),
    content : "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus vero, voluptate iusto quod qui, aspernatur distinctio, praesentium totam ea quaerat laborum eum facere at!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias repellat dolorem consectetur corrupti. Temporibus incidunt reiciendis, sed, quidem ut natus excepturi numquam facilis beatae maiores minus autem nulla explicabo.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad!</p>"
  }
  window.localStorage.setItem("articel", JSON.stringify(data));
}
function showAllArticel()
{
  const articel = window.localStorage.getItem("articel");
  const newDt = {
    nama : "budi",
    umur : 90
  }
  articel.push(newDt);
  console.log(JSON.parse(articel));
}
