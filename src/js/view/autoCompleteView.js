import View from "./View";
class AutoCompleteView extends View{
    _parentEl = document.querySelector(".autocomplete");
    
    addHandlerRenderUpdateSearchField(){
        this._parentEl.addEventListener("click", function(){
            
        })
    }

    _generateMarkup(){
        return this._data.getCountries().map(country => 
            `<li class="autocomplete__data">
            <a class="autocomplete__link" href="${country.name.common}">${country.name.common}</a>
            </li>`
        ).join("");
    }
}

export default new AutoCompleteView();