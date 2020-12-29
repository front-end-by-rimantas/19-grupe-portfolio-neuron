/**
 * Funkcija kuri generuoja korteliu turini Services sekcijai
 * @param {string} selector CSS like selektorius, kaip rasti norima vieta turinio generavimui
 * @param {Object} servicesCardData Sarasas objektu aprassanciu kiekviena About Cards data
 * @returns {*}
 */
function servicesCardRender(selector, servicesCardData) {
    const DOM = document.querySelector(selector)
    let HTML = `<div class="row">
                    <h2 class="col-12 center underline-title services">Our Core Services</h2>     
            </div>
            <div class="row">`;
    const servicesCount = servicesCardData.data.length;  //
    for(let i = 0; i < servicesCount; i++) {
        const servicesCard = servicesCardData.data[i]; // 
        HTML += `<div class="col-4 col-md-6 col-sm-9 col-xs-12">
                    <div class="block">
                    <img src="${servicesCard.img}" alt="services${i}">
                    <h3>${servicesCard.title}</h3> 
                    <p>${servicesCard.text}</p>
                    </div>
                    </div>`
    }
    console.log(HTML)
    DOM.innerHTML = HTML
}
export { servicesCardRender }