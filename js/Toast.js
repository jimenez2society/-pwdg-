export default class Toast {
  constructor() {
    this.toast = document.querySelector(".toast");
    this.toastText = document.querySelector(".toast--text");
  }

  activateSuccess(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.add("active");
    this.toast.classList.remove("toast--error");
    this.toast.classList.add("toast--success");

    let timer = setTimeout(() => {
      this.toast.classList.remove("toast--success");
      this.toast.classList.remove("active");
    }, 4000);
  }
  activateError(msg) {
    this.toastText.innerHTML = msg;
    this.toast.classList.add("active");
    this.toast.classList.remove("toast--success");
    this.toast.classList.add("toast--error");
    setTimeout(() => {
      this.toast.classList.remove("toast--error");
      this.toast.classList.remove("active");
    }, 4000);
  }
  deactivateToast() {
    this.toast.classList.remove("active");
  }
}
