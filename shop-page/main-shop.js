/***************
ALL IMPORTS
****************/
/* header */
import { stickyMenu } from '../js/components/Menu/menu.js'
/* hero */

/* footer */
import { copyRightRender } from '../js/components/copyRightRender/copyRightRender.js';
/* chat */
// shop
import { shopCardData } from "../js/data/shopCardsData.js";
import { shopCardsRender } from "../js/components/shopCardsRender/shopCardRender.js";

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


/* footer */
copyRightRender('.copyRight');
/* chat */
/* shop */
shopCardsRender('.shopCard', shopCardData);