import View from "./View";
class SearchView extends View{
    _parentEl = document.querySelector(".search");
    _message;
    _error;

    addHandlerRenderAutoComplete(handler){
        this._parentEl.addEventListener("click", function(e){
            if(!e.target.classList.contains("search__field")) return;

            handler();
        })
    }

    _generateMarkup(){
        return this._data.map(country => 
            `<li class="search__result-data">
            <a class="search__result-link" href="${country.name.common}">${country.name.common}</a>
            </li>`
        )
    }

}

export default new SearchView();