/**
 * Funkcija kuri generuoja turini CopyRight sekcijai ir istato einamuosius metus
 * @param {string} selector CSS like selektorius, kaip rasti norima vieta turinio generavimui
 * @returns {*}
 */
function copyRightRender(selector) {
    // input validation
    // logic
        const DOM = document.querySelector(selector);
        let year = new Date().getFullYear()
        let HTML = `<p>&copy Copyrights ${year} <a href="https://front-end-by-rimantas.github.io/19-grupe-portfolio-neuron/">Awesome Neuron&trade;</a>
        & <a href="https://github.com/belauzas">Mr.Belovas</a></p>`;
    //output validation
        DOM.innerHTML = HTML;
    }
    export { copyRightRender }