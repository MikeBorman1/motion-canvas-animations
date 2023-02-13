import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all, loop} from '@motion-canvas/core/lib/flow';
import {createSignal} from '@motion-canvas/core/lib/signals';

export default makeScene2D(function* (view) {
  const circle = createRef<Circle>();
  const radius = 300;
  const pi = Math.PI                 
  const degrees = createSignal(0); 
  const x = createSignal(() => radius * Math.sin(Math.PI * 2 * degrees() / 360));
  const y = createSignal(() => radius * Math.cos(Math.PI * 2 * degrees() / 360));
  const BLUE = '#68ABDF';
  const startx = 0
  const starty = 0
  const linedegrees = createSignal(() => 360 - (degrees()-90))
  view.add(
    <Circle
      x={startx}
      y={starty}
      width={600}
      height={600}

      stroke={BLUE}
      startAngle={linedegrees}
      endAngle={90}
      lineWidth={4}
    />,
    );
  view.add(
    <Circle
      ref={circle}
      x={x}
      y={y}
      width={100}
      height={100}
      fill="#e13238"
      
    />
    );
  view.add(<Circle width={20} height={20} fill="#fff" />);
   

   
   yield* degrees(0,0).to(360,4)
   
});