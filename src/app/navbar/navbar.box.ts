import { Box } from 'hyperbox-js';
import './navbar.box.less';

export class NavbarBox extends Box {
  static _BoxConfig = {
    name: 'navbar-box'
  }

  display = () => `
    <div class="flex-row-space-between navbar-content">
      <div class="flex-row">
        <div>
          <h2>Docs @HyperBox-JS</h2>
        </div>
        <div style="width: 4rem;"></div>
        <div class="flex-row-space-around">
          <button class="main-text-button-lg">Docs</button>
          <button class="main-text-button-lg">Tutorial</button>
        </div>
      </div>
      <div class="flex-row-center">
        <a target="_blank" href="https://www.npmjs.com/package/hyperbox-js">Github</a>
      </div>
    </div>
  `
}