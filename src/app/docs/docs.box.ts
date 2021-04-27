import { Box } from 'hyperbox-js';

export class DocsBox extends Box {
  static _BoxConfig = {
    name: 'docs-box'
  }

  display = () => `
    <div>
      <h1>Docs Box!</h1>
    </div>
  `;
}