/***************
ALL IMPORTS
****************/
/* header */
/* hero */
/* about */
import { aboutCardsData } from './data/aboutCardsData.js';
import { aboutCardsRender } from './components/aboutCardsRender/aboutCardsRender.js';
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
import { copyRightRender } from './components/copyRightRender/copyRightRender.js';
/* chat */

/***************
EXECUTION
****************/
/* header */
/* hero */
/* about */
aboutCardsRender('.testclass1', '.testclass2', aboutCardsData);

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
copyRightRender('.copyRight');
/* chat */