import { Box } from 'hyperbox-js';

export class TutorialBox extends Box {
  static _BoxConfig = {
    name: 'tutorial-box'
  }

  display = () => `
    <div>
      <h1>Tutorial Box!</h1>
    </div>
  `;
}