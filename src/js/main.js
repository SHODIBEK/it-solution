import "./vendor";
import "./helpers";
// import "./components/social";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import header from "./components/header";
// import lazyLoading from "./modules/lazyLoading";
// import scrollToAnchor from "./modules/scrollToAnchor";
import languageTrigger from "./components/lang";
import { togglePopupWindows, closePopupWindows } from "./modules/popup";
import accardionInit from "./components/accardion";

ieFix();
vhFix();
actualYear();
// scrollToAnchor.init();

header.init();
// lazyLoading.init();
languageTrigger();


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


// Удаление и вставка имени аватарки
const fileContainer = document.querySelector(".js-avatarName");
const fileInput = document.getElementById("file-image");
const removeBtn = document.querySelector(".js-remove");

if(fileInput) {
	fileInput.onchange = function (e) {
		var fileName = e.target.files[0].name;
	
		fileContainer.innerHTML = fileName;
	};
}
if(removeBtn) {
	removeBtn.addEventListener("click", function () {
		const picture = this.querySelector("picture");
		if (picture) {
			this.classList.add("no-image");
			picture.remove();
			fileContainer.innerHTML = "";
		}
	});
}

/**
* Удаление соц.сети
*/
const checkInput = () => {
	const clearInput = document.querySelector(".js-clear");
	const socialInput = document.querySelectorAll('[data-type="delete-link"]');
	let el;

	if(socialInput) {
		socialInput.forEach((element) => {
			element.addEventListener("click", ({ target }) => el = target);
		});
	}

	if(clearInput) {
		clearInput.addEventListener("click", ({target}) => {
			el.closest('.form__group').remove();
			
			closePopupWindows(target)
		});
	}
};

checkInput();

const addInputButton = document.querySelector(".js-addInput");
const socialBlock = document.querySelector(".js-blockSocial");

function addTextInput() {
	const x = document.createElement("INPUT");
	const div = document.createElement("div");
	const icon = document.createElement("img");
	const clearBtn = document.createElement("span");

	div.className = "form__group form__group-social";
	icon.className = "form__icon";
	x.classList = "form__input form__social";
	clearBtn.classList = "form__clear";

	icon.setAttribute("src", "./images/icons/other.svg");
	icon.setAttribute("width", "21");
	icon.setAttribute("height", "21");

	x.setAttribute("type", "text");
	x.setAttribute("name", `other[social]`);
	x.setAttribute("placeholder", "Insert a link to a social network");

	clearBtn.setAttribute('data-type', 'delete-link');

	div.appendChild(x);
	div.appendChild(icon);
	div.appendChild(clearBtn);
	socialBlock.appendChild(div);
	
	checkInput();
}

if(addInputButton) {
	addInputButton.addEventListener("click", () => {
		addTextInput();
	});
}

/* 
Accardion init
*/
accardionInit();

// $('form').submit(function(e) {
// 	e.preventDefault()
// 	console.log($(this).serializeArray())
// })