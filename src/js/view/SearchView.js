import View from "./View";
class SearchView extends View {
  _parentEl = document.querySelector(".search");
  _searchField = document.querySelector(".search__field");
  _overlay = document.querySelector(".overlay");
  _message = "";
  _error;

  addHandlerSubmit(){
    this._parentEl.addEventListener("submit", (function(e){
      this._parentEl.action = `#${this._searchField.value}`;
    }).bind(this));
  }
  _generateMarkup() {
    
  }
}
window.addEventListener("load", function(){
  // console.log(window.location.hash);
})
export default new SearchView();
