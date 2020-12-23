import { counterAnimation } from "./counterAnimation.js";

function counterOnScroll() {
    
    addEventListener('scroll', () => {
        const counters = document.querySelectorAll('.counter');
        const screenBottom = innerHeight + scrollY;
        
        counters.forEach(counter => {
            const counterBottom = counter.offsetHeight + counter.offsetTop;
            console.log(counterBottom);
        if (screenBottom >= counterBottom) {
            counterAnimation();
        }
    })
})
};

export { counterOnScroll }