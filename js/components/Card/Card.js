class Card {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.maxItems = params.maxItems || 3;
        this.cloneCount = params.cloneCount || 2;
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
        const count = this.data.maxLimit || this.data.data.length;
        for (let i = 0; i < count; i++) {
            const card = this.data.data[i];
            HTML += `<div class="blog-card" style="width: 20%;">
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
        const DOM = document.querySelector(this.selector);
        let HTML = '';
        HTML += `<div class="view">
            <div class="list" style="width: 500%;">
                ${this.generateBlogCards()}
                    </div>
                    </div>`
        DOM.innerHTML = HTML;
    }
}

export { Card }