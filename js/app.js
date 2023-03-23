import Password from "./helpers/Password.js";
import { query } from "./lib/DomHelper.js";
import Toast from "./Toast.js";

let toast = new Toast();
let generateButton = query("#generateButton");
let genForm = query(".generator__form");
let ids = ["lowers", "uppers", "numeric", "specials"];
genForm.preventDefault();
generateButton.click(showGeneratedPassword);
function showGeneratedPassword() {
  let password = generatePassword();
  console.log(password);
  if (!password.errMsg) {
    query(".generated-password--text").addText(password);
    toast.activateSuccess("Generated password successfully");
    return;
  }
  toast.activateError(password.errMsg);
}
function generatePassword() {
  let trueOptions = ids.filter((id) => query(`#${id}`).isChecked());
  console.log(trueOptions);
  let length = Number(query("#length").getValue());
  let newPassword = new Password(trueOptions, length);
  return newPassword.generate();
}

query(".toast--cancel").click(() => toast.deactivateToast());
