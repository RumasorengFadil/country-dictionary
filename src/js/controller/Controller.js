import searchView from "../view/SearchView";
import articleView from "../view/ArticleView";
import autoCompleteView from "../view/AutoCompleteView";
import countryView from "../view/CountryView";
import bookmarksView from "../view/bookmarksView";
import countries from "../model/Countries";
import Country from "../model/Country";


class Controller{

    constructor(){
        autoCompleteView.addHandlerRenderAutoComplete(this._controlAutoComplete);
        articleView.addHandlerPlayAndPauseVideo();
        bookmarksView.addHandlerRenderBookmarks(this._controlBookmarks);
        countryView.addHandlerRenderCountry(this._controlCountry);
        countryView.addHandlerAddBookmark(this._controlBookmarks);
        countryView.addHandlerRenderMap(this._controlMap)
        searchView.addHandlerSubmit();
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
            console.error(err);
        }
        
    }
        
    async _controlCountry(){
        try {
            // 1. Get keyw
            const keyw = window.location.hash.slice(1);
            
            if(!keyw) return;

            // 2. Render Spinner
            countryView.renderSpinner();

            // 3. Load data
            await Country.loadData(keyw);

            // 4. Render Country
            countryView.render(Country);

            // 5. Render Bookmarks
            bookmarksView.render(Country);

        } catch (err) {
            console.error(err);
            countryView.renderMessage();
        }
    }

    _controlBookmarks(){
        try{
            //1. Add bookmarks
            if(!Country.getCountry().bookmarked) Country.addBookmarks();
    
            //2. Delete bookmarks
            else Country.delBookmarks();
    
            //3. Save bookmarks
            Country.saveBookmarks();
    
            //4. Render Country
            countryView.render(Country);
    
            //5. Render Bookmarks
            bookmarksView.render(Country);
        } catch(err){
            console.error(err);
        }
    }

    _controlMap(){

    }
}
new Controller();