export default class Password {
  constructor(trueOptions, length) {
    this.trueOptions = trueOptions;
    this.length = length;
    this.letters = "abcdefghijklmnopqrstuvwxyz";
    this.numbers = "0123456789";
    this.specials = `~!@#$%^&*()_+=}{[]|/\\?'",.<>`;
    this.errors = null;
  }
  generate() {
    console.log(this.specials);
    let trueOptions = this.trueOptions.map((opt) => [opt, opt]);
    const entries = new Map([...trueOptions]);
    trueOptions = Object.fromEntries(entries);
    let genPassword = [];
    trueOptions = { ...trueOptions, length: Number(this.length) };
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

      for (let i = 0; i <= trueOptions.length - 1; i++) {
        genPassword.push(this.radomize(this.letters));
      }
      return genPassword.join("");
    }
  }
  radomize(string) {
    return string.split("")[Math.floor(Math.random() * string.length)];
  }
}
