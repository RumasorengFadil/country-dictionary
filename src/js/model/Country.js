class Country{
    _country = {};
    _bookmarks = [];
    constructor(){}

    async loadData(id){
        try {
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

        } catch (err) {
            throw err;
        }
    }
    getCountry(){
        return this._country;
    }
    addBookmarks(){
        
    }
    saveBookmarks(){
        
    }
}


export default new Country();