let nav = document.querySelector(".navbar");
let nav_brand = document.querySelector(".navbar-brand");
let numberScrollTopNow = 0;
let numberScrollTopBefore = 0;
window.addEventListener("scroll", function () {
    numberScrollTopBefore = numberScrollTopNow;
    numberScrollTopNow = document.documentElement.scrollTop;
    console.log("now", numberScrollTopNow)
    console.log("before", numberScrollTopBefore);
    if (document.documentElement.scrollTop >= 50) {
        nav.classList.remove("py-3")
        nav.classList.add("padding-nav");
        nav_brand.classList.add("navbar-brand-small");
    }
    // if (numberScrollTopBefore > numberScrollTopNow) {
    //     nav.classList.remove("padding-nav");
    //     nav.classList.add("py-3")
    // }
    if (numberScrollTopNow === 0) {
        nav.classList.remove("padding-nav");
        nav_brand.classList.remove("navbar-brand-small");
        nav.classList.add("py-3")
    }
})
