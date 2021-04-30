let dropdown = document.querySelector(".dropdown");
let dropdown_container = document.querySelector(".dropdown-container");

dropdown.addEventListener("click", function () {
    dropdown.classList.toggle("active");
    if (dropdown_container.style.height) {
        dropdown_container.style.height = "";
    } else {
        dropdown_container.style.height = dropdown_container.scrollHeight + "px";
    }
})




// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//   this.classList.toggle("active");
//   var dropdownContent = this.nextElementSibling;
//   if (dropdownContent.style.display === "block") {
//   dropdownContent.style.display = "none";
//   } else {
//   dropdownContent.style.display = "block";
//   }
//   });
// }