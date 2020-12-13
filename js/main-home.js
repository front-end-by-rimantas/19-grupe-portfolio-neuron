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


/***************
EXECUTION
****************/
/* header */
/* hero */
/* about */
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
/* chat */