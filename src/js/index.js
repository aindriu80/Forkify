import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */
const state = {};

const controlSearch = () => {
    // 1) Get query from view
    const query = 'pizza' // TODO
}

document.querySelector('.search').addEventListener('submit', e=> {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();