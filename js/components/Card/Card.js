class Card {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.maxItems = params.maxItems || 3;
        this.cloneCount = params.cloneCount || 4;
        this.visibilityStrategy = params.visibilityStrategy || 'random';
        this.itemsPerView = params.itemsPerView || 3;

        this.animationDuration = 1000;
        this.isAnimating = false;

        this.init();
    }

    init() {
        this.render();
        // this.slide();
        this.autoSlide();
    }

    generateBlogCards() {
        let HTML = '';
        const itemWidth = 100 / (this.data.data.length + 2 * this.cloneCount);
        const dataCopy = [this.data.data[1], this.data.data[2], ...this.data.data, this.data.data[1], this.data.data[2]];
        
        // const count = this.data.maxLimit || this.data.data.length;
        for (let card of dataCopy) {
            HTML += `<div class="blog-card" style="width: ${itemWidth/this.itemsPerView}%;">
            <div class="blog-card-top">
                <a href="#">
                    <img src="./img/${this.data.imgFolder}/${card.img}" alt="picture_blog_1b">
                </a>
            </div>
            <div class="blog-card-bottom">
                <ul class="blog-info">
                    <li>
                        <i class="${card.icon1}"></i>
                        ${card.date}
                    </li>
                    <li>
                        <i class="${card.icon2}"></i>
                        ${card.name}
                    </li>
                    <li>
                        <span>${card.number}</span>
                        ${card.type}
                    </li>
                </ul>
                <div class="blog-describ">
                    <h3>
                        <a href="#">${card.title}</a>
                    </h3>
                    <p>${card.desc}
                    </p>
                    <div class="btn-row">
                        <a href="" class="btn btn-oval-standart btn-hover-side">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>`
    }
    return HTML;
}

    render() {
        const listWidth = (this.data.data.length + 2 * this.cloneCount) * 100;
        // const itemWidth = 100 / (this.data.data.length + 2 * this.cloneCount);
        const DOM = document.querySelector(this.selector);
        let HTML = '';
        HTML += `<div class="view">
            <div class="list" style="width: ${listWidth}%; margin-left: -66%;">
                ${this.generateBlogCards()}
                    </div>
                    </div>`
        DOM.innerHTML = HTML;
    }

    // teleport() {
    //     setTimeout(() => {
    //         this.isAnimating = false;

    //         if (marginLeft === 166%) {
    //             const listDOM = document.querySelector('.list');
    //             listDOM.classList.add('teleport');
    //             listDOM.style.marginLeft = -66 + '%';
    //             setTimeout(() => {
    //                 listDOM.classList.remove('teleport');
    //             }, 50);
                
    //         }

    //     }, this.animationDuration);
    // }

    slide() {
        const blogDOMs = document.querySelectorAll('.blog-card');
        const initialPosition = -66;
        const inc = 33;
        if (!this.isAnimating) {
            setInterval(() => {
                blogDOMs[2].style.marginLeft = (initialPosition + inc) + "%";
                initialPosition = blogDOMs[2].style.marginLeft;
            }, 5000);
    }
}

    autoSlide() {
        setInterval(() => {
        const count = 5;
        let i = 2;
        for (i; i <= count; i++) {
        const blogDOMs = document.querySelectorAll('.blog-card');
        const initialPosition = -66;
        const inc = 33;
            blogDOMs[i].style.marginLeft = (initialPosition + inc) + "%";
        }
    }, 10000);

}
}

export { Card }