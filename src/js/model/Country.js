import { LOCAL_STORAGE_KEY } from "../config";
class Country{
    _country = {};
    _bookmarks = [];
    constructor(){
        this._bookmarks = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [];
    }

    async loadData(id){
        try {
            console.log(1);
            const data = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
            
            if(!data.ok) throw new Error();

            const [dataJSON] = await data.json();
            this._country = {
                altSpellings : dataJSON.altSpellings,
                area : dataJSON.area,
                borders : dataJSON.borders,
                capital : dataJSON.capital,
                capitalInfo : dataJSON.capitalInfo,
                car : dataJSON.car,
                coatOfArms : dataJSON.coatOfArms,
                continents : dataJSON.continents,
                currencies : dataJSON.currencies,
                demonysms : dataJSON.demonyms,
                fifa : dataJSON.fifa,
                flag : dataJSON.flag,
                flags : dataJSON.flags,
                gini : dataJSON.gini,
                idd : dataJSON.idd,
                independent : dataJSON.independent,
                landlocked : dataJSON.landlocked,
                languages : dataJSON.languages,
                latlng : dataJSON.latlng,
                maps : dataJSON.maps,
                name : dataJSON.name,
                population : dataJSON.population,
                postalCode : dataJSON.postalCode,
                region : dataJSON.region,
                startOfWeek : dataJSON.startOfWeek,
                subregion : dataJSON.subregion,
                timezones : dataJSON.timezones,
                tld : dataJSON.tld,
                translations : dataJSON.translations,
                bookmarked : false,
            }

            const bookmark = this._bookmarks.find(bm => bm.name.common === this._country.name.common);

            if(!bookmark) return;

            this._country = bookmark;

        } catch (err) {
            throw err;
        }
    }
    getCountry(){
        return this._country;
    }
    getBookmarks(){
        return this._bookmarks;
    }
    addBookmarks(){
        this._country.bookmarked = true;
        this._bookmarks.push(this._country);       
    }
    delBookmarks(){
        this._country.bookmarked = false;
        const recipe = this._bookmarks.findIndex((bm) => bm.name.common === this._country.name.common);
        this._bookmarks.splice(recipe, 1);
    }
    saveBookmarks(){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._bookmarks));
    }
}


export default new Country();