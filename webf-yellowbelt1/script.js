var img = document.getElementById("nav-content-mid-left-img");

function imageChangeIn() {
  img.src = "img/succulents-2.jpg";
}

function imageChangeOut() {
  img.src = "img/succulents-1.jpg"
}

function accept() {
  document.getElementById("nav-cookie").remove();
}