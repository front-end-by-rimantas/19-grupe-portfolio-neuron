/***************
ALL IMPORTS
****************/
/* header */
import { stickyMenu } from '../js/components/Menu/menu.js';

/* footer */
import { copyRightRender } from '../js/components/copyRightRender/copyRightRender.js';
/* features page */
import { blockData } from '../js/data/blockData.js';
import { blockRender } from '../js/components/blockRender/blockRender.js';
import { smallBlocks } from '../js/data/smallBlocks.js';
import { smallBlocksRender } from '../js/components/smallBlocksRender/smallBlocksRender.js';
import { mediumBlocks } from '../js/data/mediumBlocks.js';
import { mediumBlocksRender } from '../js/components/mediumBlocksRender/mediumBlocksRender.js';

/***************
EXECUTION
****************/
const test = document.getElementById("wrap");
window.onload = function() {
    test.classList.add("wraptest")
}
/* header */
 stickyMenu();

/* footer */
copyRightRender('.copyRight');
/* features page */
blockRender('#blockRender', blockData);
smallBlocksRender('.small-blocks.left', '.small-blocks.right', smallBlocks);
mediumBlocksRender('.medium-blocks.one', '.medium-blocks.two', mediumBlocks);