const languageTrigger = () => {
	const lang = $(".js-languages");

	lang.on("click", (e) => {
		let target = $(e.currentTarget);

		target.toggleClass("is-active");
	});

	$(document).mouseup(function (e) {
		if (!lang.is(e.target) && lang.has(e.target).length === 0) {
			lang.removeClass("is-active");
		}
	});
};

export default languageTrigger;
