class Card {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.maxItems = params.maxItems || 3;
        this.cloneCount = params.cloneCount || 4;
        this.visibilityStrategy = params.visibilityStrategy || 'random';

        this.init();
    }

    init() {
        this.render();
        this.reload();
    }

    reload() {

    }

    generateBlogCards() {
        let HTML = '';
        const itemWidth = 100 / (this.data.data.length + 2 * this.cloneCount);
        const dataCopy = [this.data.data[1], this.data.data[2], ...this.data.data, this.data.data[1], this.data.data[2]];
        
        // const count = this.data.maxLimit || this.data.data.length;
        for (let card of dataCopy) {
            HTML += `<div class="blog-card" style="width: ${itemWidth/3}%;">
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
        const itemWidth = 100 / (this.data.data.length + 2 * this.cloneCount);
        const DOM = document.querySelector(this.selector);
        let HTML = '';
        HTML += `<div class="view">
            <div class="list" style="width: ${listWidth}%; margin-left: -66%;">
                ${this.generateBlogCards()}
                    </div>
                    </div>`
        DOM.innerHTML = HTML;
    }
}

export { Card }