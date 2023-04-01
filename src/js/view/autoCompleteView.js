import View from "./View";
class AutoCompleteView extends View{
    _parentEl = document.querySelector(".autocomplete");
    _overlay = document.querySelector(".overlay");
    
    addHandlerRenderAutoComplete(handler){
        const searchField = this._parentEl.closest(".search").querySelector(".search__field");

        // Render All
        searchField.addEventListener("click", (function(e){
            this._overlay.classList.remove("hidden");
            handler();
          }).bind(this));
          
          //Render based keyw
          searchField.addEventListener("input", (e) =>
            handler(e.target.value.toLowerCase())
          );
      
          // Render null
          this._overlay.addEventListener("click", (function(){
            this._overlay.classList.add("hidden");
            handler(null);
          }).bind(this));

        //   Render null and search field value
          this._parentEl.addEventListener("click", (function(e){
            e.preventDefault();
            if(!e.target.classList.contains("autocomplete__link")) return;

            console.log(e.target.getAttribute("country"));
            searchField.value = e.target.getAttribute("country");
            handler(null);
        }).bind(this))
    }

    _generateMarkup(){
        return this._data.getNames().map(name => 
            `<li class="autocomplete__data">
            <a class="autocomplete__link" country = "${name}" href="#${name}">${name}</a>
            </li>`
        ).join("");
    }
}

export default new AutoCompleteView();