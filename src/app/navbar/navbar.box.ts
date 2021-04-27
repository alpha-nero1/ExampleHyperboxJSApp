import { Box, BoxOnDestroyed, BoxOnDisplayed, NavigatorBox } from 'hyperbox-js';
import './navbar.box.less';

export class NavbarBox extends Box implements BoxOnDisplayed, BoxOnDestroyed {
  static _BoxConfig = {
    name: 'navbar-box'
  }

  private btns: HTMLElement[] = [];

  boxOnDisplayed() {
    this.btns.push(this.getBoxElementById('docs-btn'));
    this.btns.push(this.getBoxElementById('tute-btn'));
    this.btns.push(this.getBoxElementById('home-btn'))
    this.btns[0].addEventListener('click', this.docsBtnOnClick);
    this.btns[1].addEventListener('click', this.tutorialBtnOnClick);
    this.btns[2].addEventListener('click', this.homeBtnOnClick);
  }

  private docsBtnOnClick = () => {
    const nav = (document.getElementById('main-navigator') as any as NavigatorBox);
    if (!nav) return;
    nav.gotoRoute('docs', {});
  }

  private tutorialBtnOnClick = () => {
    const nav = (document.getElementById('main-navigator') as any as NavigatorBox);
    if (!nav) return;
    nav.gotoRoute('tutorial', {});
  }

  private homeBtnOnClick = () => {
    const nav = (document.getElementById('main-navigator') as any as NavigatorBox);
    if (!nav) return;
    nav.gotoRoute('home', {});
  }

  boxOnDestroyed() {
    this.btns[0].removeEventListener('click', this.docsBtnOnClick);
    this.btns[1].removeEventListener('click', this.tutorialBtnOnClick);
    this.btns[2].removeEventListener('click', this.homeBtnOnClick);
  }

  display = () => `
    <div class="flex-row-space-between navbar-content">
      <div class="flex-row">
        <div>
          <button id=${`${this.id}-home-btn`} class="main-text-button-lg">Docs @HyperBox-JS</button>
        </div>
        <div style="width: 4rem;"></div>
        <div class="flex-row-space-around">
          <button id=${`${this.id}-docs-btn`} class="main-text-button-lg">Docs</button>
          <button id=${`${this.id}-tute-btn`} class="main-text-button-lg">Tutorial</button>
        </div>
      </div>
      <div class="flex-row-center">
        <a target="_blank" href="https://www.npmjs.com/package/hyperbox-js">Github</a>
      </div>
    </div>
  `
}