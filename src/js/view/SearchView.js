import View from "./View";
class SearchView extends View {
  _parentEl = document.querySelector(".search");
  _searchField = document.querySelector(".search__field");
  _overlay = document.querySelector(".overlay");
  _message;
  _error;

  addHandlerRenderCountry(handler){
    this._parentEl.addEventListener("submit", function(e){
      // e.preventDefault();
      // if(!e.target.classList.contains("search__btn")) return;
      console.log(this);
      this.action = "#1234";
    })

  }
  _generateMarkup() {
    
  }
}
window.addEventListener("load", function(){
  console.log(window.location.hash);
})
export default new SearchView();
