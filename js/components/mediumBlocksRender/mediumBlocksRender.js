function mediumBlocksRender(selector1, selector2, mediumBlocks) {
    //logic
    const DOM1 = document.querySelector(selector1);
    const DOM2 = document.querySelector(selector2);
    let HTML1 = '';
    let HTML2 = '';
    const count = mediumBlocks.data1.length;  //
    for(let i = 0; i < count; i++) {
        const mediumBlock = mediumBlocks.data1[i]; // 
        HTML1 += `<div class="medium-block">
        <img src="../img/${mediumBlocks.imgFolder}/${mediumBlock.img}" alt="Ikona">
        <h3>${mediumBlock.title}</h3>
        <p>${mediumBlock.text}</p>
        </div>`
    }
    for(let i = 0; i < count; i++) {
        const mediumBlock = mediumBlocks.data2[i];
        HTML2 += `<div class="medium-block">
        <img src="../img/${mediumBlocks.imgFolder}/${mediumBlock.img}" alt="Ikona">
        <h3>${mediumBlock.title}</h3>
        <p>${mediumBlock.text}</p>
        </div>`
    }
    DOM1.innerHTML = HTML1;
    DOM2.innerHTML = HTML2;
}
export { mediumBlocksRender }