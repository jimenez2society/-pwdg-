//

import Toast from "./Toast.js";

let onPasswordGenerate = new Toast();

document.querySelector(".logo").addEventListener("click", (e) => {
  onPasswordGenerate.activateSuccess("Generated password successfully");
});
document.querySelector(".toast--cancel").addEventListener("click", (e) => {
  onPasswordGenerate.deactivateToast();
});
