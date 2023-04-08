import L from "leaflet";
import icons from "../../assets/icons/icons.svg";
import View from "./View";
import { MAP_ZOOM_LEVEL } from "../config";

class MapView extends View {
  _parentEl = document.querySelector(".main");
  _map;
  _error;
  _message;
  _succes;

  addHandlerRenderCountry(handler) {
    this._parentEl.addEventListener("click", function (e) {
      if (!e.target.closest(".maps__arrow-left")) return;

      handler();
    });
  }
  loadMap(country) {
    const coords = country.getCountry().latlng;
    this._map = L.map("map").setView(coords, MAP_ZOOM_LEVEL);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    L.marker(coords)
      .addTo(this._map)
      .bindPopup(country.getCountry().name.common);
  }

  _generateMarkup() {
    return `<div class="maps position-center">
        <div id="map">
            <svg class="maps__arrow-left">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
        </div>
    </div>`;
  }
}

export default new MapView();
