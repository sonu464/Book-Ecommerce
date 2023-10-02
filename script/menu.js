const arrows = document.querySelectorAll(".arrow");
const moreOp = document.querySelectorAll(".moreop");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const clickedBtn = arrow.getAttribute("data-target");
    moreOp.forEach((option) => {
      const arrowChild = arrow.lastElementChild;
      if (option.id === clickedBtn) {
        option.classList.toggle("show");
        arrowChild.innerText = option.classList.contains("show") ? "↓" : ">";
      } else {
        option.classList.remove("show");
        const currentBtn = document.querySelectorAll(".arrow");
        currentBtn.forEach((preArrow) => {
          if (preArrow !== arrow) {
            const otherArrow = preArrow.lastElementChild;
            otherArrow.innerText = ">";
          }
        });
      }
    });
  });
});
