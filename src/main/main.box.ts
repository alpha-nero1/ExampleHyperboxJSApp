import { Box, BoxOnDisplayed } from 'hyperbox-js';
import './main.box.less';

// Our main box!
export class MainBox extends Box implements BoxOnDisplayed {  
  static _BoxConfig = {
    name: 'main-box'
  }

  static _BoxInterface = {
    Vars: {
      boxText: '💎'
    }
  }

  protected firstLoad = false;

  boxOnDisplayed() {
    if (!this.firstLoad) {
      // NOTE: Highlights current issue of not cascading change detection.
      setTimeout(() => {
        console.log('aa set new text!');
        this.setBoxText('🥳');
      }, 500);
    }
    this.firstLoad = true;
  }

  display = () => {
    return `
      <navbar-box></navbar-box>
      <div class="main-content">
        <h1 class="title">HyperBox-JS</h1>
        <h2>Your neighbourhood friendly JS framework</h2>
        <h3>Create great web apps, fast!</h3>
        <div class="flex-row-space-around">
          <rotation-box></rotation-box>
        </div>
        <div>
          <h2>Useful Links</h2>
          <ul>
            <li>💎 <a href="https://www.npmjs.com/package/hyperbox-js" target="_blank">HyperBox-JS on npm</a></li>
            <li>⚡️ <a href="https://www.npmjs.com/package/hyperbox-js-cli" target="_blank">HyperBox-JS-CLI on npm</a></li>
          </ul>
        </div>
    `;
  }
}
