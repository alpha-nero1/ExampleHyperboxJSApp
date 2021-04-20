import { Box } from 'hyperbox-js';
import './navbar.box.less';

export class NavbarBox extends Box {
  static _BoxConfig = {
    name: 'navbar-box'
  }

  display = () => `
    <div>
    </div>
  `
}