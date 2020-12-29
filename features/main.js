/***************
ALL IMPORTS
****************/
/* header */
import { stickyMenu } from '../js/components/Menu/menu.js';
/* hero */
/* about */
/* about video */
/* counter */
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
import { copyRightRender } from '../js/components/copyRightRender/copyRightRender.js';
/* chat */


/***************
EXECUTION
****************/
const test = document.getElementById("wrap");
window.onload = function() {
    test.classList.add("wraptest")
}
/* header */
 stickyMenu();
/* hero */
/* about */
/* about video */
/* counter */
// counterAnimation();
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
copyRightRender('.copyRight');
/* chat */