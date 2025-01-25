import { toggleSearch, fetchSearchData } from "../functions/search.js";
import {
    addMoviesToCatalog,
    loadMoreMovies,
    resetPages,
} from "../functions/addMoviesToCatalog.js";
import { burgerToggle } from "../functions/burger.js";

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
const searchButton = document.getElementById("input_section");
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

// Burger
const burger = document.querySelector("#burger");

burger.addEventListener("click", burgerToggle);
