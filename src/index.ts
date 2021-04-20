import { BoxCluster } from 'hyperbox-js';
import { HyperBoxCore } from 'hyperbox-js';
import { RotationBox } from './rotation/rotation.box';
import { MainBox } from './main/main.box';
import { NavbarBox } from './navbar/navbar.box';

// Create your first cluster...
const cluster = new BoxCluster([
  MainBox,
  RotationBox,
  NavbarBox
])
// Initialise the application...
HyperBoxCore.Init();
