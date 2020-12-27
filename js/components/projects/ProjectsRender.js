class Project {
    constructor(params) {
        this.selector = params.selector || 'body;'
        this.data = params.data || [];
        this.maxProjects = params.maxProjects || 5;
        this.DOM = null;
        this.imagesDOM = null;
        this.projectView = null;
        this.init();
        this.activeIMG = 0;
    }
    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        //inputo parametru validacijos vieta
        //blogiems reikia priskirti default reiksme
        this.render();
        console.log(this.imagesDOM)
        this.addEvents();
    }
    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }
    isValidProject(item) {
        return true;
    }
    generateItems() {
        let HTML = '';
        for (let item of this.data) {
            if(!this.isValidProject(item)) {
                continue;
            }
            HTML += `<div class="proj" style="width: 6%";>
            <img class="project" draggable="true" src="${item.img}" alt="${item.alt}">
        </div>`
        }
        return HTML;
    }
    render() {
        const HTML = `<div class="projWrap"><div class="view-project" style="width: 500%";> 
        ${this.generateItems()} </div> </div>`
        const DOM = document.querySelector(this.selector);
        DOM.innerHTML = HTML;
        this.imagesDOM = document.querySelectorAll('.proj');
        this.projectView = document.querySelector('.view-project');
    };
/******************************************************************************************** */

addEvents() {
    for(let i = 0; i < this.imagesDOM.length; i++) {
        const img = this.imagesDOM[i];
        img.addEventListener('click',() => {
            const margin = `margin-left: ${i*-34}%;`
            this.projectView.style.marginLeft = -34 * i + '%';
        })
    }
}
/*********************************************************************** */
}
export { Project }