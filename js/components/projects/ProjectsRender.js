/*
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
/*
addEvents() {
    for(let i = 0; i < this.imagesDOM.length; i++) {
        const img = this.imagesDOM[i];
        img.addEventListener('click',() => {
            const margin = `margin-left: ${i*-34}%;`
            this.projectView.style.marginLeft = -34 * i + '%';
        })
    }
} */
/*********************************************************************** */ 
/*
}
export { Project } */
/******************************************************************************************** */
function projectSlide() {
let slides = document.querySelectorAll('.slide-single');
let slider = [];
let wrapper = document.querySelector('#slide')
let flag = true;
for(let i = 0; i < slides.length; i++) {
   slider[i] = slides[i].src;
   slides[i].remove();
}

let step = 0;
let onMove = true;
//let offset = 0;

function draw(offset) {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset*33 +'%';
    document.querySelector('#slide').appendChild(img);
    step++;
    if(step === slider.length) {
        step = 0;
    }
} 

function left() {
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    console.log()
    slides2[0].style.left = -33 + '%';
    setTimeout(function() {
    slides2[0].remove();
    }, 2000);
    
    for(let i = 1; i < slides2.length; i++) {
        slides2[i].style.left = offset2*33 + '%'; 
        offset2++;
    }
    setTimeout(function(){
       draw(3);
    }, 2000);
}
draw(0);draw(1);draw(2); draw(3);
 
   setInterval(function(){ if(flag){left()} }, 6000);

wrapper.addEventListener('mouseover', function(){
       flag = false;
})
wrapper.addEventListener('mouseout', function(){
    flag = true;
})
}
export {projectSlide}