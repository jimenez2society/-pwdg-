import { query } from "./lib/DomHelper.js";
import Password from "./helpers/Password.js";
import Toast from "./Toast.js";

let toast = new Toast();

let ids = ["lowercase", "uppercase", "numeric", "specialCharacters"];

function showGeneratedPassword() {
  let password = generatePassword();
  console.log(password);
}
function generatePassword() {}



