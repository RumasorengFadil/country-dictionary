import icons from "../../assets/icons/icons.svg";
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
      <svg>
      <use href="${icons}#icon-spinner"></use>
      </svg>
    </div>`
    );
  }
}

export default View;
