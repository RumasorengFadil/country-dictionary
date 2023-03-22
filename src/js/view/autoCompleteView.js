import View from "./View";
class AutoCompleteView extends View{
    _parentEl = document.querySelector(".autocomplete");
    _overlay = document.querySelector(".overlay");
    
    addHandlerFillSearchField(){
        this._parentEl.addEventListener("click", (function(e){
            e.preventDefault();
            if(!e.target.classList.contains("autocomplete__link")) return;

            e.target.closest(".search").querySelector(".search__field")
            .value = e.target.getAttribute("country");

            this._clear();
        }).bind(this))
    }
    
    addHandlerRenderAutoComplete(handler){
        this._parentEl.closest(".search").addEventListener("click", (function(e){
            if(!e.target.classList.contains("search__field")) return;

            this._overlay.classList.remove("hidden");
            handler();
        }).bind(this));

        // this._parentEl.closest(".search").querySelector(".search__field").addEventListener("input", function(){
            
        // })
    }

    addHandlerCloseAutoComplete(){
        this._overlay.addEventListener("click", (function(){
            this._overlay.classList.add("hidden");
            this._clear();
        }).bind(this));
    }

    _generateMarkup(){
        return this._data.getNames().map(name => 
            `<li class="autocomplete__data">
            <a class="autocomplete__link" country =${name} href="${name}">${name}</a>
            </li>`
        ).join("");
    }
}

export default new AutoCompleteView();