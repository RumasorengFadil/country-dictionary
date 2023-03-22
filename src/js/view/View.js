import iconSpinner from "../../assets/icons/icon-spinner.svg";
class View {
  _data;

  constructor() {}

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner() {
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="spinner">
        <img class="" src="${iconSpinner}" alt="">
    </div>`
    );
  }
}

export default View;
