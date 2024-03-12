import initMenu from "../script/modules/header/init-page-menu.js"
import initFilter from "../script/modules/filter/init-filter.js"
import initSlider from "../script/modules/slider/init-slider.js"
import "./utils/prism.js"
import { iosVhFix } from "./utils/ios-vh-fix.js"
import "../scss/style.scss"


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix()

  window.addEventListener('load', () => {
    initMenu()
    window.location.pathname.slice(1) === 'data.html' ? initFilter() : false
    window.location.pathname.slice(1) === 'library.html' ? initSlider() : false
  });
});
