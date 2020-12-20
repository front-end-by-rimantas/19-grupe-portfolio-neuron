function blogRender(selector, blogData) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const count = blogData.maxLimit || blogData.data.length;
    for (let i = 0; i < count; i++) {
        const card = blogData.data[i];
        HTML += `<div class="col-4 col-sm-6 col-xs-12">
        <div class="blog-card">
            <div class="blog-card-top">
                <a href="#">
                    <img src="./img/${blogData.imgFolder}/${card.img}" alt="picture_blog_1b">
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
        </div>
    </div>`
    }
    DOM.innerHTML = HTML;
}

export { blogRender }