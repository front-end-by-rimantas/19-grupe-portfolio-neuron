function blockRender(selector, blockData) {
    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
    const count = blockData.data.length;  //
    for(let i = 0; i < count; i++) {
        const block = blockData.data[i]; // 
        HTML += `<div class="col-4 col-md-6 col-sm-12 col-xs-12">
        <div class="block">
        <img class="fea" src="../img/${blockData.imgFolder}/${block.img}" alt="Ikona">
        <h3>${block.title}</h3> 
        <p>${block.text}</p>
        </div>
        </div>`
    }
    DOM.innerHTML = HTML;
}
export { blockRender }