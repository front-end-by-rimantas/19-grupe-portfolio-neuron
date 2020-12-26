class Project {
    constructor(params) {
        this.selector = params.selector || 'body;'
        this.data = params.data || [];
        this.maxProjects = params.maxProjects || 5;
        this.init();
    }
    init() {
        //inputo parametru validacijos vieta
        this.render();
    }
    isValidSelector() {
        return true;
    }
    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        const HTML = `<div class="view-project">
        <div class="proj">
            <img class="project" src="./img/project/1pr.jpg" alt="Control center">  <!-- korteliu css atskira uzduotis --> 
        </div>
        <div class="proj">
            <img class="project" src="./img/project/2pr.jpg" alt="Control center">
        </div>
        <div class="proj">
            <img class="project" src="./img/project/3pr.jpg" alt="Robot">
        </div>`;
        const DOM = document.querySelector(this.selector);
        DOM.innerHTML = HTML;
    }
}
export { Project }