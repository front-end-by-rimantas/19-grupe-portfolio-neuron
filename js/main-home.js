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
const speed = 500;

document.querySelectorAll('#counter').forEach(counter => {
    const counterNumber = +counter.getAttribute('countTo');

    const updateCount = setInterval(() => {
        const divConent = +counter.innerText;
        const increaseBy = counterNumber / speed;
        divConent < counterNumber ? 
        counter.innerHTML += Math.ceil(divConent + increaseBy) :
        clearInterval(updateCount);
    }, 1)
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