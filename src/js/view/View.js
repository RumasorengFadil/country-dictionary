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

  _generateErrorMarkup() {
    return `<div class="error">
    <p>${this._message}</p>
</div>`;
  }
  _generateMessageMarkup() {
    return `<div class="message">
    <p>${this._message}</p>
</div>`;
  }
  renderSpinner() {
    this._clear();
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="spinner">
      <svg>
      <use href="${icons}#icon-spinner"></use>
      </svg>
    </div>`
    );
  }
  renderError() {
    this._clear();
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._generateErrorMarkup()
    );
  }
  renderMessage() {
    this._clear();
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._generateMessageMarkup()
    );
  }
}

export default View;
