/**
 * Funkcija kuri generuoja korteliu turini About kairei ir desinei sekcijai
 * @param {string} selector1 CSS like selektorius, kaip rasti norima vieta turinio generavimui
 * @param {*string} selector2 CSS like selektorius, kaip rasti norima vieta turinio generavimui
 * @param {Object} aboutCardsData Sarasas objektu aprassanciu kiekviena About Cards data
 * @returns {*}
 */
function aboutCardsRender(selector1, selector2, aboutCardsData) {
    //logic
    const DOM1 = document.querySelector(selector1);
    const DOM2 = document.querySelector(selector2);
    let HTML1 = '';
    let HTML2 = '';
    // console.log(DOM1, DOM2)
    const aboutCount = aboutCardsData.data.length;  //
    for(let i = 0; i < aboutCount/2; i++) {
        const aboutCard = aboutCardsData.data[i]; // 
        HTML1 += `<div class="block">
                    <img src="${aboutCard.img}" alt="brain1">
                    <h3>${aboutCard.title}</h3>
                    <p class="margin-0">${aboutCard.text}</p>
                </div>`
            }
            for(let i = aboutCount/2; i < aboutCount; i++) {
                const aboutCard = aboutCardsData.data[i];
                HTML2 += `
                <div class="block">
                <img src="${aboutCard.img}" alt="brain1">
                <h3>${aboutCard.title}</h3>
                <p class="margin-0">${aboutCard.text}</p>
                
                </div>`
            }
            // DOM1.innerHTML = HTML1;
            // DOM2.innerHTML = HTML2;
        }
export { aboutCardsRender }