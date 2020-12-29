/***************
ALL IMPORTS
****************/
/* header */
import { stickyMenu } from './components/Menu/menu.js'
/* hero */
/* about */
import { aboutCardsData } from './data/aboutCardsData.js';
import { aboutCardsRender } from './components/aboutCardsRender/aboutCardsRender.js';
/* about video */
/* counter */
import { counterAnimation } from "./components/counter/counterAnimation.js";
import { counterOnScroll } from "./components/counter/counterOnScroll.js";
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
import { Card } from "./components/Card/Card.js";
import { blogRender } from "./components/blogRender/blogRender.js";
import { blogData } from './data/blogData.js';
/* contact */
/* footer */
import { copyRightRender } from './components/copyRightRender/copyRightRender.js';
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
aboutCardsRender('.testclass1', '.testclass2', aboutCardsData);

/* about video */
/* counter */
// counterAnimation();
counterOnScroll();
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
// blogRender('#our-blog-block', blogData);
new Card({
    selector: '#our-blog-block', 
    data: blogData,
    maxItems: 7,
    cloneCount: 2,
    visibilityStrategy: 'last',
    itemsPerView: 3,
});
const mediaQuery = window.matchMedia('max-width: 680px');
if (mediaQuery.matches) {
    
}
/* contact */
/* footer */
copyRightRender('.copyRight');
/* chat */