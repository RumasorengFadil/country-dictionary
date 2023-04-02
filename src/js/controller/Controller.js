import searchView from "../view/SearchView";
import ArticleView from "../view/ArticleView";
import autoCompleteView from "../view/autoCompleteView";
import CountryView from "../view/CountryView";
import countries from "../model/Countries";
import Country from "../model/Country";


class Controller{

    constructor(){
        autoCompleteView.addHandlerRenderAutoComplete(this._controlAutoComplete);
        ArticleView.addHandlerPlayAndPauseVideo();
        CountryView.addHandlerRenderCountry(this._controlCountry);
    }

    async _controlAutoComplete(keyw = "", visible){
        try{
            // 1. Render spinner
            autoCompleteView.renderSpinner();   
    
            //2. Load data
            await countries.loadData(keyw);
            
            //3. Set autocomplete visible
            countries.setAutocompVisible(visible);
            
            //4. Render autoComplete
            autoCompleteView.render(countries);
        }catch(err){
            console.err(err);
        }
        
    }
        
    async _controlCountry(){
        try {
            // 1. Get country id
            // const id = window.location.hash.split("%20").join(" ").replace("#", "");
            const keyw = new URLSearchParams(window.location.search).get("inputCountry");

            // 2. Render Spinner
            CountryView.renderSpinner();

            // 3. Load data
            await Country.loadData(keyw);

            // 4. Render Country
            CountryView.render(Country);

        } catch (err) {
            console.error(err);
        }
    }

    controlAddBookmarks(){

    }

    controlMap(){

    }

    controlBookmarks(){

    }
}
new Controller();