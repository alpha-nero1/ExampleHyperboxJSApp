import { Box, BoxOnDisplayed, NavigatorBox, NavRoutes } from 'hyperbox-js';
import { DocsBox } from '../docs/docs.box';
import { HomeBox } from '../home/home.box';
import { TutorialBox } from '../tutorial/tutorial.box';
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

  boxOnDisplayed = () => {
    this.setupNavigator();
  }

  private setupNavigator = () => {
    const routes: NavRoutes = {
      'docs': { box: DocsBox },
      'tutorial': { box: TutorialBox },
      'home': { box: HomeBox }
    }
    const nav = (document.getElementById('main-navigator') as any as NavigatorBox);
    if (!nav) return;
    nav.setRoutes(routes);
    nav.gotoRoute('docs', {});
  }

  display = (context) => {
    return `
      <navbar-box></navbar-box>
      <div class="main-content">
        <navigator-box id="main-navigator"></navigator-box>
      </div>
    `;
  }
}
