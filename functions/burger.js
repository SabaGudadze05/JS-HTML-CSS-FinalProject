let headerNav = document.querySelector("#header_nav");

export function burgerToggle() {
    headerNav.classList.toggle("show");
    burger.classList.toggle("rotate");
    // x.classList.toggle("none");
    document.addEventListener("click", (e) => {
        if (e.target !== burger && e.target !== headerNav && e.target) {
            headerNav.classList.remove("show");
            burger.classList.remove("rotate");
        }
    });
}
