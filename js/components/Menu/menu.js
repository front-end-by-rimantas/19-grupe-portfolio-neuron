// when a user scrolls down execute sticky
window.onscroll = function() {stickyMenu()};

// find the menu
var menu = document.getElementById("menu");

//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
    if (window.pageXOffset >= sticky) {
        menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky")
    }
}
export { stickyMenu }