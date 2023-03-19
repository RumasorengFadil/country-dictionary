class Countries{
  _countries = [];
  constructor(){

  }
  
  async loadData(){
    try{
      //Get data from session storage
      const dataSessionStorage = JSON.parse(sessionStorage.getItem("dataCountries"));
      this._countries = dataSessionStorage;
      console.log(this._countries);
      if(dataSessionStorage) return;

      // get data from API
      const data = await fetch(`https://restcountries.com/v3.1/all`);
      const dataJSON = await data.json();

      this._countries = dataJSON.map(country =>{
        return {
                altSpelling : country.altSpelling,
                area : country.area,
                borfers : country.borfers,
                capital : country.capital,
                capitalInfo : country.capitalInfo,
                car : country.car,
                coatOfArms : country.coatOfArms,
                continents : country.continents,
                currencies : country.currencies,
                demonysm : country.demonysm,
                fifa : country.fifa,
                flag : country.flag,
                flags : country.flags,
                gini : country.gini,
                idd : country.idd,
                independent : country.independent,
                landlocket : country.landlocket,
                languages : country.languages,
                latlng : country.latlng,
                maps : country.maps,
                name : country.name,
                population : country.population,
                postalCode : country.postalCode,
                region : country.region,
                startOfWeek : country.startOfWeek,
                subregion : country.subregion,
                timezones : country.timezones,
                tld : country.tld,
                translations : country.translations,
              }
            })

            // Save data into session storage
            sessionStorage.setItem("dataCountries", JSON.stringify(this._countries));

        }catch(err){
          console.error(err);
        }
    }

    getCountries(){
        return this._countries;
    }

}

export default new Countries();