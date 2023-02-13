import {makeProject} from '@motion-canvas/core/lib';

import drawCircle from './scenes/drawCircle?scene';

export default makeProject({
  scenes: [drawCircle],
  background: '#141414',
});
