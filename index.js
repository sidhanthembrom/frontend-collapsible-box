const boxes = document.querySelectorAll(".box");

const myArray = [
  {
    bottomElName: "top-bottom-section",
    radioBtnEl: "first-radio-btn",
    mainContainer: "top",
  },
  {
    bottomElName: "middle-bottom-section",
    radioBtnEl: "second-radio-btn",
    mainContainer: "middle",
  },
  {
    bottomElName: "bottom-bottom-section",
    radioBtnEl: "third-radio-btn",
    mainContainer: "bottom",
  },
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // opening the clicked section
    const section = document.querySelector(`.${myArray[index].bottomElName}`);
    const radioBtn = document.querySelector(`#${myArray[index].radioBtnEl}`);
    const mainContainer = document.querySelector(
      `.${myArray[index].mainContainer}`
    );

    section.style.display = "flex";
    radioBtn.checked = true;
    mainContainer.classList.remove("inactive");
    mainContainer.classList.add("active");

    //   closing all other sections
    myArray.forEach((item, i) => {
      if (i !== index) {
        const otherSection = document.querySelector(
          `.${myArray[i].bottomElName}`
        );
        const otherRadioBtn = document.querySelector(
          `#${myArray[i].radioBtnEl}`
        );
        const otherMainContainer = document.querySelector(
          `.${myArray[i].mainContainer}`
        );

        otherSection.style.display = "none";
        otherRadioBtn.checked = false;
        otherMainContainer.classList.add("inactive");
        otherMainContainer.classList.remove("active");
      }
    });
  });
});
