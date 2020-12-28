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
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});

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