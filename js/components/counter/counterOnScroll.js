import { counterAnimation } from "./counterAnimation.js";

function counterOnScroll() {
    let elements = document.querySelectorAll('.counter');
    const count = elements.length;

    const animated = Array(count).fill(false);

    window.addEventListener('scroll', function () {
        for (let i = 0; i < elements.length; i++) {
            let position = elements[i].getBoundingClientRect();
            let counter = elements[i].querySelector('.counter');
            if (position.bottom <= window.innerHeight && !animated[i]) {
                animated[i] = true;
                counterAnimation(counter);
            }
        }
        
        // const counters = document.querySelectorAll('.counter');
        // const screenBottom = innerHeight + scrollY;
        
        // counters.forEach(counter => {
        //     const counterBottom = counter.offsetHeight + counter.offsetTop;
        //     console.log(counterBottom);
        // if (screenBottom >= counterBottom) {
        //     counterAnimation();
        // }
    })
};

export { counterOnScroll }