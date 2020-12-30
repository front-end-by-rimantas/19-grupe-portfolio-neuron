/***************
ALL IMPORTS
****************/
/* header */
import { stickyMenu } from './components/Menu/menu.js'
/* hero */
/* about */
import { aboutCardsData } from './data/aboutCardsData.js';
import { aboutCardsRender } from './components/aboutCardsRender/aboutCardsRender.js';
/* about video */
/* counter */
import { counterAnimation } from "./components/counter/counterAnimation.js";
import { counterOnScroll } from "./components/counter/counterOnScroll.js";
/* services */
import { servicesCardsData } from './data/servicesCardsData.js';
import { servicesCardRender } from './components/servicesCardRender/servicesCardRender.js';
/* projects */ /*
import { Project } from "./components/projects/ProjectsRender.js";
import { projectData } from "./data/projectData.js";*/
import { projectSlide } from "./components/projects/ProjectsRender.js"
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
import { copyRightRender } from './components/copyRightRender/copyRightRender.js';
/* chat */


/***************
EXECUTION
****************/
const test = document.getElementById("wrap");
window.onload = function() {
    test.classList.add("wraptest")
}
/* header */
 stickyMenu();
/* hero */
/* about */
aboutCardsRender('.testclass1', '.testclass2', aboutCardsData);

/* about video */
/* counter */
// counterAnimation();
counterOnScroll();
/* services */
servicesCardRender('#serviceRender', servicesCardsData);
/* projects */
/*
const projectParams = {
    selector: '#project-block',
    data: projectData,
    maxProjects: 7,
}
new Project(projectParams);*/
projectSlide();
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
copyRightRender('.copyRight');
/* chat */