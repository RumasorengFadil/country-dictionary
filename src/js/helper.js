export const getJSON = async function(url){
    try {
        const data = await fetch(url);
        
        if(!data.ok) throw new Error();

        const dataJSON = await data.json();

        return dataJSON;
    } catch (err) {
        throw Error(err);   
    }
}