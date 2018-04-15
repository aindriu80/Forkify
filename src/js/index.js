import axios from 'axios';
async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = "975aa925dbf676686be7b33ab0111a23";
    try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
    }catch(error){
        alert(error);
    }
}
getResults('tomato pasta');