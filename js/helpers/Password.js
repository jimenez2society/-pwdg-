export default class Password {
  constructor(trueOptions, length) {
    this.trueOptions = trueOptions;
    this.length = length;
    this.allOptions = {
      lowers: "abcdefghijklmnopqrstuvwxyz",
      uppers: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
      numeric: "0123456789",
      specials: `~!@#$%^&*()_+=}{[]|/\\?'",.<>`,
    };

    this.errors = null;
  }
  generate() {
    let trueOptionValues = this.trueOptions
      .map((option) => this.allOptions[option])
      .join("");
    const formError = (msg) => {
      this.errors = { errMsg: msg };
      return this.errors;
    };

    let genPassword = [];
    // in ../lib/prototypes I gave Array a function to check if itself is empty

    if (this.trueOptions.isEmpty())
      return formError("Please select at least one option");

    // checking to see if the user input for length is less than 8 or greater than 128
    if (this.length < 8) {
      this.errors = {
        errMsg: "Length should be greater than 8 and an integer",
      };
      return this.errors;
    } else if (this.length > 128) {
      this.errors = { errMsg: "Length should be less than 128" };
      return this.errors;
    } else {
      this.errors = null;
      // loops as long as the length of "this.length" which is the length that the user inputs then pushes the value that the method "randomize" returns
      for (let i = 0; i <= this.length - 1; i++) {
        genPassword.push(this.radomize(trueOptionValues));
      }
      // after the loop we should have an array of random characters. We then use the array method .join to create a full string which in return will be our generated passwod
      return genPassword.join("");
    }
  }
  // takes a string and splits it into an array then returns a random value from it
  radomize(string) {
    return string.split("")[Math.floor(Math.random() * string.length)];
  }
}
