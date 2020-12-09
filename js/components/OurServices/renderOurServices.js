/**
 * Premium Features sekcija generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sarasas objektu aprassanciu kiekviena Premium Feature
 * @returns {*}
 */

 function renderOurServices(selector, data) {
    //  input validation

    // logic
const DOM = document.querySelector(selector);

let HTML = '';
for (let feature of data) {
   HTML += `<div class="col-4 col-sm-9 col-xs-12">
   <div class="block">
       <h3>${feature.title}</h3>
       <p>${feature.description}</div>
</div>` ;
}
DOM.innerHTML - HTML;
    // post logic validation

    // return

 }

 export { renderOurServices }
