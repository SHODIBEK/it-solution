import helpers from "../helpers";

const togglePopupWindows = (target) => {
	openPopupWindows(target)
	closePopupWindows(target)
};

const openPopupWindows = (target) => {
	if (target.closest("[data-type]")) {
		const popup = document.querySelector(
			`[data-popup="${target.closest("[data-type]").dataset.type}"]`
		);

		if (document.querySelector(".is-open")) {
			document.querySelectorAll(".is-open").forEach((modal) => {
				modal.classList.remove("is-open");
			});
		}

		popup.classList.add("is-open");
		helpers.lockScroll(true, helpers.$body.find('.modal'), 'header');
	}
}

const closePopupWindows = (target) => {
	if ( target.classList.contains("_overlay-bg") || target.closest(".button-close")) {
		const popup = target.closest("._overlay-bg");

		helpers.lockScroll(false, helpers.$body.find('.modal'), 'header')

		popup.classList.remove("is-open");
	}
}


export {
	openPopupWindows,
	closePopupWindows,
	togglePopupWindows
};
