
// when a user scrolls down execute sticky
window.onscroll = function() {stickyMenu()};

// find the menu
const menu = document.getElementById("menu");

const sticky = menu.offsetTop;


//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky")
    }
}
export { stickyMenu }