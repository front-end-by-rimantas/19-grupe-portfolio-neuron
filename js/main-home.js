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
/* projects */
import { Project } from "./components/projects/ProjectsRender.js";
import { projectData } from "./data/projectData.js";
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
/* projects */
//Default parametru priskirimas
const projectParams = {
    selector: '#project-block',
    data: projectData,
    maxProjects: 7,
    // Galimi kiti papildomi variantai, kaip rodykles, max elements ir so on...
}
new Project(projectParams);
/* news */
/* partners */
/* how */
/* blog */
/* contact */
/* footer */
copyRightRender('.copyRight');
/* chat */