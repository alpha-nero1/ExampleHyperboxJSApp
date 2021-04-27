import { BoxCluster } from 'hyperbox-js';
import { NavigatorBox, DialogBox } from 'hyperbox-js';
import { HyperBoxCore } from 'hyperbox-js';
import { RotationBox } from './rotation/rotation.box';
import { MainBox } from './main/main.box';
import { NavbarBox } from './navbar/navbar.box';
import { EmojiBox } from './emoji-box/emoji.box';
import { DocsBox } from './docs/docs.box';
import { TutorialBox } from './tutorial/tutorial.box';
import { HomeBox } from './home/home.box';

// Create your first cluster...
const cluster = new BoxCluster([
  MainBox,
  RotationBox,
  NavbarBox,
  EmojiBox,
  NavigatorBox,
  DialogBox,
  DocsBox,
  TutorialBox,
  HomeBox
])
// Initialise the application...
HyperBoxCore.Init();
