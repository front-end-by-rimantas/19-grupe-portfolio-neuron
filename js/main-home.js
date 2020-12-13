/***************
ALL IMPORTS
****************/
/* header */
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
/* chat */

import { Counter } from "./Counter";

/***************
EXECUTION
****************/
/* header */
/* hero */
/* about */
/* about video */
/* counter */
function renderCounter(selector) {
    const DOM = document.querySelector(selector);
    const counter = new Counter;
    counter.render(); 
}
/* services */
/* projects */
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
/* chat */