import searchView from "../view/SearchView";
import autoCompleteView from "../view/autoCompleteView";
import countries from "../model/Countries";


class Controller{

    constructor(){
        searchView.addHandlerRenderAutoComplete(this.controlAutoComplete);
    }

    async controlAutoComplete(){
        //1. Load data
        await countries.loadData();

        //2. Render AutoComplete
        autoCompleteView.render(countries);

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