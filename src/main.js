import { isTouchDevice } from "@scripts/helpers";
import { scrollAnimation } from "@scripts/scroll-animation";
import { Modal } from "@scripts/modal";
import { Slider } from "@scripts/slider";
import { Accordion } from "@scripts/accordion";
import { TeamSlider } from "@scripts/team-slider";
import { Cursor } from "@scripts/cursor";
import { Menu } from "@scripts/menu";

import "@styles/index.scss";

if (!isTouchDevice()) {
  new Cursor();
}

scrollAnimation();
new Modal();
new Slider();
new Accordion();
new TeamSlider();
new Menu();
