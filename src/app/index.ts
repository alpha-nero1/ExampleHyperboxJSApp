import { BoxCluster } from 'hyperbox-js';
import { HyperBoxCore } from 'hyperbox-js';
import { RotationBox } from './rotation/rotation.box';
import { MainBox } from './main/main.box';
import { NavbarBox } from './navbar/navbar.box';
import { EmojiBox } from './emoji-box/emoji.box';

// Create your first cluster...
const cluster = new BoxCluster([
  MainBox,
  RotationBox,
  NavbarBox,
  EmojiBox
])
// Initialise the application...
HyperBoxCore.Init();
