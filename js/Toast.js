export default class Toast {
  constructor() {
    // getting the html toast element
    this.toast = document.querySelector(".toast");
    // getting the html toast--text element
    this.toastText = document.querySelector(".toast--text");
  }
  // when calling this method it sets the parameter to the innerHtml of toast--text
  // it removes a class of toast--error if it exists
  // it adds a class of active
  // it adds a class of toast--success
  // it removes classes after 4s
  activateSuccess(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.remove("toast--error");
    this.toast.classList.add("active");
    this.toast.classList.add("toast--success");

    setTimeout(() => {
      this.toast.classList.remove("toast--success");
      this.toast.classList.remove("active");
    }, 4000);
  }

  // when calling this method it sets the parameter to the innerHtml of toast--text
  // it removes a class of toast--success if it exists
  // it adds a class of active
  // it adds a class of toast--error
  // it removes classes after 4s
  activateError(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.remove("toast--success");
    this.toast.classList.add("active");
    this.toast.classList.add("toast--error");
    setTimeout(() => {
      this.toast.classList.remove("toast--error");
      this.toast.classList.remove("active");
    }, 4000);
  }
  // manually remove class .active
  deactivateToast() {
    this.toast.classList.remove("active");
  }
}
