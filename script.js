console.log('test');

const dropdownMenuButton = document.querySelector(".menu-icon");
const dropdownList = document.querySelector("nav ul");

dropdownMenuButton.addEventListener('click', function() {
  dropdownList.classList.toggle("show-dropdown");
  
});


function myFunction() {
  let list = document.getElementById("myDIV");
  if (list.style.visibility === "visible") {
    list.style.visibility = "hidden";
  } else {
    list.style.visibility = "visible";
  }
}




