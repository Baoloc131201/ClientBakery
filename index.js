var btnBackToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnBackToTop.style.display = "flex";
    } else {
        btnBackToTop.style.display = "none";
    }
});

var menuItems = document.getElementsByClassName("menu-item");
Array.from(menuItems).forEach((item, index) => {
    item.addEventListener("click", (e) => {
        var currentMenu = document.querySelector(".menu-item.active");
        currentMenu.classList.remove("active");
        item.classList.add("active");
    })
})

var foodMenuList = document.querySelector(".food-item-wrap");

var foodCategory = document.querySelector(".food-category");

var categories = foodCategory.querySelectorAll("button");

Array.from(categories).forEach((item, index) => {
    item.addEventListener("click", (e) => {
        var buttonActive = foodCategory.querySelector("button.active");
        buttonActive.classList.remove("active");
        item.classList.add("active");
        foodMenuList.classList = "food-item-wrap " + item.getAttribute("data-food-type");
    })
});

var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) };

var eltoShow = document.querySelectorAll(".play-on-scroll");

isElInViewPort = (el) => {
    var rect = el.getBoundingClientRect();

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight ||
            document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    eltoShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add("start");
        } else {
            item.classList.remove("start");
        }
    })
    scroll(loop);
}

loop();

let bottomNavItems = document.querySelectorAll(".mb-nav-item");
let bottomMove = document.querySelector(".mb-move-item");
bottomNavItems.forEach((item, index) => {
    item.addEventListener("click", function(e) {
        const CurrentItem = document.querySelector(".mb-nav-item.active");
        CurrentItem.classList.remove("active");
        item.classList.add("active");
        bottomMove.style.left = index * 25 + "%";
    })
})