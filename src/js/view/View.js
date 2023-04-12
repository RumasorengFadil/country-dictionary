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
  update(data){
    this._data = data;
    const markup = this._generateMarkup();
    
    const newDOM = document.createRange().createContextualFragment(markup);
    const newElements = newDOM.querySelectorAll("*");
    const curElements = this._parentEl.querySelectorAll("*");

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if(!newEl.isEqualNode(curEl)){
       [...newEl.attributes].forEach(attr =>{
          curEl.setAttribute(attr.name, attr.value);
        })
      }

    })
  }
}

export default View;
