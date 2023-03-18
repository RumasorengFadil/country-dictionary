import searchView from "../view/SearchView";
import countries from "../model/Countries";


class Controller{

    constructor(){
        searchView.addHandlerRenderAutoComplete(this.controlAutoComplete);
    }

    async controlAutoComplete(){
        //1. Load data
        await countries.loadData();

        

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