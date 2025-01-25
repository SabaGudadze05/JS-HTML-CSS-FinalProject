import { toggleSearch, fetchSearchData } from "../functions/search.js";
import {
    addMoviesToCatalog,
    loadMoreMovies,
    resetPages,
} from "../functions/addMoviesToCatalog.js";


addMoviesToCatalog();
// Sorting
const movieSort = document.getElementById("movie_sort");
movieSort.addEventListener("change", (e) => {
    const sortType = e.target.value;
    resetPages();
    document.getElementById("catalog_movie_container").innerHTML = "";
    addMoviesToCatalog(sortType);
});

// Pagination
const loadMoreButton = document.getElementById("load_more_btn");
loadMoreButton.addEventListener("click", () => {
    loadMoreMovies();
});

// Search Input toggling
const searchButton = document.getElementById("search_button");
const searchResult = document.getElementById("search_results");
toggleSearch(searchButton, searchResult);

//Fetching Searched Movies;

const searchInput = document.getElementById("movie_search");
searchInput.addEventListener("input", (e) => {
    setTimeout(() => {
        const searchValue = e.target.value;
        fetchSearchData(searchValue);
    }, 500);
});
