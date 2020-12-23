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
import { counterOnScroll } from "./components/counter/counterOnScroll.js";
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
import { copyRightRender } from './components/copyRightRender/copyRightRender.js';
/* chat */


/***************
EXECUTION
****************/
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
/* contact */
/* footer */
copyRightRender('.copyRight');
/* chat */