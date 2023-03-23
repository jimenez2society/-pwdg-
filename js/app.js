import Password from "./helpers/Password.js";
import { query } from "./lib/DomHelper.js";
import Toast from "./Toast.js";

// creates a new instance of Toast
let toast = new Toast();

// getting the generate button by its id with custom query function
let generateButton = query("#generateButton");
// getting the generate button by its id with custom query function
let genForm = query(".generator__form");

//set an array of all of the ids that exist for different password options
let ids = ["lowers", "uppers", "numeric", "specials"];

// prevents default of form with help from the query function -- see ./lib/DomHelper.js for more info
genForm.preventDefault();

// adds click event with a cb function with help from query function
generateButton.click(showGeneratedPassword);
function showGeneratedPassword() {
  // sets password to the returned value from generatePassord function
  let password = generatePassword();

  // password does not have a errMsg property then we query and addText to the generated-password--text element then we activate a successful toast
  if (!password.errMsg) {
    query(".generated-password--text").addText(password);
    toast.activateSuccess("Generated password successfully");
    return;
  }
  // if .errMsg we activate a faild/error toast
  toast.activateError(password.errMsg);
}
function generatePassword() {
  // queries for all check boxes that are checked
  let trueOptions = ids.filter((id) => query(`#${id}`).isChecked());

  //gets the value of the length input
  let length = Number(query("#length").getValue());
  // creates a new Password instance
  let newPassword = new Password(trueOptions, length);
  // using a method on the Password class we can call .generate() to generate a random set of value as a string with the specified params and we will return that here.
  return newPassword.generate();
}
// adds a click event to deactivate the toast when clicking the x
query(".toast--cancel").click(() => toast.deactivateToast());
