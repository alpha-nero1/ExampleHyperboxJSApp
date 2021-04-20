import { Box } from 'hyperbox-js';
import './rotation.box.less';

export class RotationBox extends Box {
  static _BoxConfig = {
    name: 'rotation-box'
  }

  static _BoxInterface = {
    Inputs: {
      text: '💎'
    }
  }

  display = (context) => `
    <div class="rotation-box-text">
    <h1>${context.getText()}</h1>
    </div>
  `
}