class Countries{
  _names = [];
  constructor(){

  }
  
  async loadData(keyw){
    try{
      //Get data from session storage
      const dataSessionStorage = JSON.parse(sessionStorage.getItem("dataCountries"));
      this._names = dataSessionStorage?.filter(name => name.toLowerCase().includes(keyw));
        
      if(dataSessionStorage) return;

      // get data from API
      const data = await fetch(`https://restcountries.com/v3.1/all`);
      const dataJSON = await data.json();
      
      this._names = dataJSON.map(country =>{
        return country.name.common;     
      }).sort();

      // Save data into session storage
      sessionStorage.setItem("dataCountries", JSON.stringify(this._names));

    }catch(err){
      console.error(err);
    }
  }

  getNames(){
      return this._names;
  }
  setAutocompVisible(visible){
    if(!visible) return;
    this._names = [];
  }


}

export default new Countries();

// dataJSON.map(country =>{
//   return {
//           altSpelling : country.altSpelling,
//           area : country.area,
//           borfers : country.borfers,
//           capital : country.capital,
//           capitalInfo : country.capitalInfo,
//           car : country.car,
//           coatOfArms : country.coatOfArms,
//           continents : country.continents,
//           currencies : country.currencies,
//           demonysm : country.demonysm,
//           fifa : country.fifa,
//           flag : country.flag,
//           flags : country.flags,
//           gini : country.gini,
//           idd : country.idd,
//           independent : country.independent,
//           landlocket : country.landlocket,
//           languages : country.languages,
//           latlng : country.latlng,
//           maps : country.maps,
//           name : country.name,
//           population : country.population,
//           postalCode : country.postalCode,
//           region : country.region,
//           startOfWeek : country.startOfWeek,
//           subregion : country.subregion,
//           timezones : country.timezones,
//           tld : country.tld,
//           translations : country.translations,
//         }
//       })