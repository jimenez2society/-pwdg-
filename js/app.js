//

import Toast from "./Toast.js";

let onPasswordGenerate = new Toast();
function showGeneratedPassword() {
  let password = generatePassword();
  document.querySelector(".generated-password--text").innerHTML = password;
}
function generatePassword() {
  return "TESTING";
}
function gatherPasswordRestriction() {}

document.querySelector(".logo").addEventListener("click", (e) => {
  onPasswordGenerate.activateSuccess("Generated password successfully");
});
document.querySelector(".toast--cancel").addEventListener("click", (e) => {
  onPasswordGenerate.deactivateToast();
});
