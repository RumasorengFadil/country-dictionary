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
        
    }

}

export default new SearchView();