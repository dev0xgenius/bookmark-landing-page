import "../../node_modules/bootstrap/js/src/tab.js";
import "../../node_modules/bootstrap/js/src/collapse.js";

const ctaForm = document.getElementById("ctaForm");
ctaForm.onsubmit = function (evt) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const formData = new FormData(ctaForm);
  const formInputLabel = this.querySelector("label");
  let labelClasses = formInputLabel.classList;

  if (!emailRegex.test(formData.get("email"))) {
    evt.preventDefault();
    if (!labelClasses.contains("error"))
      labelClasses.add("error");

  } else if (labelClasses.contains("error")) {
    labelClasses.remove("error");
  }
  
  formInputLabel.classList = labelClasses;
};