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
    let genPassword = [];
    if (!this.trueOptions.length > 0) {
      this.errors = { errMsg: "Please select atleast one option" };
      return this.errors;
    }
    if (typeof this.length !== "number") {
      this.errors = { errMsg: "Length should be a number" };
      return this.errors;
    } else if (this.length < 8) {
      this.errors = { errMsg: "Length should be greater than 8" };
      return this.errors;
    } else if (this.length > 128) {
      this.errors = { errMsg: "Length should be less than 128" };
      return this.errors;
    } else {
      this.errors = null;

      for (let i = 0; i <= this.length - 1; i++) {
        genPassword.push(this.radomize(trueOptionValues));
      }

      return genPassword.join("");
    }
  }
  radomize(string) {
    return string.split("")[Math.floor(Math.random() * string.length)];
  }
}
