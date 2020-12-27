import { isValidShopCard } from "./isValidShopCard.js";
/**
 * Funkcija kuri generuoja korteliu turini SHOP kortelems
 * @param {string} selector CSS like selektorius, kaip rasti norima vieta turinio generavimui
 * @param {Object} shopCardsData Sarasas objektu aprassanciu kiekviena shop Cards data
 * @returns {*}
 */
function shopCardsRender(selector3, shopCardData) {
    // input validation
     
    //logic
    const DOM = document.querySelector(selector3);

    if (!DOM) {
        console.error('ERROR: object failure')
    }
    let HTML = '';
    console.log(DOM)

    for (let item of shopCardData) {
             HTML += `<div class="product-card shop-block col-3 col-lg-4 col-md-6 col-sm-9 col-xs-12">
                    
             <img class="shop-img" src="../img/shop/${item.img}" alt="product-img">
             <h3>${item.title}</h3>
             <span class="shop-price">${item.price}</span>
             <div class="btn btn-oval-shop">
             <a href="#">Add to card</a>
             </div>
         </div>`;
    }
        DOM.innerHTML = HTML;
       
}
export { shopCardsRender }