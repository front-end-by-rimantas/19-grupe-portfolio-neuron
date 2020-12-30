function smallBlocksRender(selector1, selector2, smallBlocks) {
    //logic
    const DOM1 = document.querySelector(selector1);
    const DOM2 = document.querySelector(selector2);
    let HTML1 = '';
    let HTML2 = '';
    const count = smallBlocks.data1.length;  //
    for(let i = 0; i < count; i++) {
        const smallBlock = smallBlocks.data1[i]; // 
        HTML1 += `<div class="small-block">
        <img src="../img/${smallBlocks.imgFolder}/${smallBlock.img}" alt="Ikona">
        <h4>${smallBlock.title}</h4>
        </div>`
    }
    for(let i = 0; i < count; i++) {
        const smallBlock = smallBlocks.data2[i];
        HTML2 += `<div class="small-block">
        <img src="../img/${smallBlocks.imgFolder}/${smallBlock.img}" alt="Ikona">
        <h4>${smallBlock.title}</h4>
        </div>`
    }
    DOM1.innerHTML = HTML1;
    DOM2.innerHTML = HTML2;
}
export { smallBlocksRender }