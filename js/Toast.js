export default class Toast {
  constructor() {
    this.toast = document.querySelector(".toast");
    this.toastText = document.querySelector(".toast--text");
  }

  activateSuccess(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.add("active");
    this.toast.classList.add("toast--success");
    setTimeout(() => {
      this.toast.classList.remove("active");
    }, 4000);
  }
  activateError(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.add("active");
    this.toast.classList.add("toast--error");
  }
  deactivateToast() {
    this.toast.classList.remove("active");
  }
}
