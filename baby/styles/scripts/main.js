// Togle
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burgers");
    });
} ;

navSlide();


// clear form before unload

window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("form")) {
        from.reset();
    }
};