import View from "./View";

class bookmarksView extends View {
  _parentEl = document.querySelector(".bookmarks__result");
  _error;
  _succes;
  _message = "Bookmarks is empty";

  addHandlerRenderBookmarks(handler){
      window.addEventListener("hashchange", handler);
  }
  _generateBookmarksMarkup() {
    return `${this._data
      .getBookmarks()
      .map((country) => {
        return `<li class="bookmarks__list">
                <a class="bookmarks__link" href="#${country.name.common}">
                    <figure class="bookmarks__fig">
                        <img class="bookmarks__flag" src=${country.flags.svg} alt="">    
                        <figcaption>                                    
                            <p class="bookmarks__country">${country.name.common}</p>
                            <p class="bookmarks__region">${country.region}</p>
                        </figcaption>
                    </figure>
                </a>
            </li>`;
      })
      .join("")}`;
  }
  _generateMarkup() {
    return this._data.getBookmarks().join("")
      ? this._generateBookmarksMarkup()
      : this._generateMessageMarkup();
  }
}

export default new bookmarksView();
