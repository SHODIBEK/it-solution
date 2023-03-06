import "./vendor";
import "./helpers";
// import "./components/social";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
// import { actualYear } from "./modules/actualYear";
import header from "./components/header";
// import lazyLoading from "./modules/lazyLoading";
// import scrollToAnchor from "./modules/scrollToAnchor";
// import languageTrigger from "./components/lang";
import { togglePopupWindows, closePopupWindows } from "./modules/popup";
import accardionInit from "./components/accardion";
import AOS from 'aos';

ieFix();
vhFix();
// actualYear();
// scrollToAnchor.init();

header.init();
// lazyLoading.init();
// languageTrigger();

AOS.init({
	once: true,
	duration: 1200
});

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"
* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
document.addEventListener("click", ({ target }) => {
	togglePopupWindows(target)
});

/* 
Accardion init
*/
accardionInit();
