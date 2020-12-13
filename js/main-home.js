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
/* services */
/* projects */
addEventListener('scroll', () {
    const screenBottom = innerHeight + scrollY;
    const sliderBottom = slider.offsetHeight + slider.offsetTop;
    if (screenBottom >= sliderBottom) {
        const slider = document.querySelector('.slider');
        function autoSlider() {
            slider.style.transform = 'translate(-20%)';
        }
        autoSlider();
        
        slider.addEventListener('transitionend', function() {
            slider.appendChild(slider.firstElementChild);
        
            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
            setTimeout(function() {
                slider.style.transition = 'all 2s';
    }
})
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
/* chat */