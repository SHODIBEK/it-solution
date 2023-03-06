const accardionInit = () => {
  const accordionBtns = document.querySelectorAll(".js-accardion");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-active");
  
      let content = this.querySelector('.js-accardionTrigger');

      if (this.classList.contains('is-active')) {
        content.style.display = 'table-cell'
      } else {
        content.style.display = 'none'
      }
  
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}

export default accardionInit;