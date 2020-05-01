import "./components/movie-list.js"
import "./components/search-box.js"

import DataSource from "./data-source.js"

function main() {
    const searchElement = document.querySelector("search-box");
    const movieListElement = document.querySelector("movie-list");
    
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);   
        }
        catch (message) {
            fallbackResult(message);
        }
    }; 

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    
} 
export default main;
