let accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function (e) {
        let panel = e.target.nextElementSibling;
        let icon = e.target.children[0];
        e.target.classList.toggle("active");

        icon.classList.toggle("icon-plus");
        icon.classList.toggle("icon-minus");

        if (panel.style.height) {
            panel.style.height = '';
        } else {
            panel.style.height = panel.scrollHeight + "px";
        }
    })
}



var x = 1;
console.log(global)