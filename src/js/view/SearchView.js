import View from "./View";
class SearchView extends View {
  _parentEl = document.querySelector(".search");
  _searchField = document.querySelector(".search__field");
  _overlay = document.querySelector(".overlay");
  _message = "Country not found, <br>please try again";
  _error;

  addHandlerRenderCountry(handler){
    this._parentEl.addEventListener("submit", function(e){
     
    })
  }
  _generateMarkup() {
    
  }
}
window.addEventListener("load", function(){
  console.log(window.location.hash);
})
export default new SearchView();
