import View from "./View";
import icons from "../../assets/icons/icons.svg"
class CountryView extends View {
  _parentEl = document.querySelector(".main");
  _message;
  _error;
  _succes;

  addHandlerRenderCountry(handler) {
    window.addEventListener("load", handler);
    
  }

  _generateMarkup() {
    return `<div class="country position-center">
        <img class="country__flag" src=${
          this._data.getCountry().flags.svg
        } alt="">
        <div class="country__head">
            <h2 class="country__name">${
              this._data.getCountry().name.common
            } <br><span class="country__region">${
      this._data.getCountry().region
    }</span></h2>
            <svg class="country__icn-location">
                <use href="${icons}#icon-loc"></use>
            </svg>
            <svg class="country__icn-bookmark">
                <use href="${icons}#icon-bookmark-outline"></use>
            </svg>
        </div>
        <ul class="country__body">
            
            <li class="country__data">Borders       : 
                ${
                  this._data.getCountry().borders
                    ? this._data
                        .getCountry()
                        .borders.map((b) => {
                          return `<a href="#" class="country__borders">${b}</a>`;
                        })
                        .join(", ")
                    : "Ukhnown"
                }
            </li>
            <li class="country__data">Capital       : <span class="country__capital">${
              this._data.getCountry().capital
            }</span></li>
            <li class="country__data">Continent     : <span class="country__continent">${
              this._data.getCountry().continents
            }</span></li>
            <li class="country__data">Currencies    : <span class="country__curr">${
              this._data.getCountry().languages
                ? Object.values(this._data.getCountry().currencies)[0].name
                : "Ukhnown"
            }</span></li>
            <li class="country__data">Independent   : <span class="country__independent">${
              this._data.getCountry().independent ? "Yes" : "No"
            }</span></li>
            <li class="country__data">Languages     : <span class="country__lang">${
              this._data.getCountry().languages
                ? Object.values(this._data.getCountry().languages)
                : "Ukhnown"
            }</span></li>
            <li class="country__data">Population    : <span class="country__popu">${
              this._data.getCountry().population
            }</span></li>
            <li class="country__data">Car           : <span class="country__car">${
              this._data.getCountry().car.side
            }</span></li>
        </ul>
    </div>
    
    <div class="map position-center hidden">
        <svg class="map__arrow-left">
            <use href="/src/assets/icons/icons.svg#icon-arrow-left"></use>
        </svg>
    </div>`;
  }
}

export default new CountryView();
