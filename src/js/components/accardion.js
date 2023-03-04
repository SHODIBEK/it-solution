const accardionInit = () => {
  const accordionBtns = document.querySelectorAll(".js-accardion");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-active");
  
      let content = this.querySelector('.js-accardionTrigger');
      console.log(content);

      if (this.classList.contains('is-active')) {
        content.style.display = 'table-cell'
      } else {
        content.style.display = 'none'
      }
  
      if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
      } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
      }
    };
  });
}

export default accardionInit;