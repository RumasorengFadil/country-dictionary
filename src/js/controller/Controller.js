import searchView from "../view/SearchView";
import autoCompleteView from "../view/autoCompleteView";
import countries from "../model/Countries";


class Controller{

    constructor(){
        autoCompleteView.addHandlerRenderAutoComplete(this.controlAutoComplete);
        autoCompleteView.addHandlerCloseAutoComplete();
        autoCompleteView.addHandlerFillSearchField();
    }

    async controlAutoComplete(keyw = ""){
        // 1. Render spinner
        // autoCompleteView.renderSpinner();

        //2. Load data
        await countries.loadData(keyw);

        //3. Render AutoComplete
        // autoCompleteView.render(countries);

    }

    controlCountry(){

    }

    controlAddBookmarks(){

    }

    controlMap(){

    }

    controlBookmarks(){

    }
}
new Controller();