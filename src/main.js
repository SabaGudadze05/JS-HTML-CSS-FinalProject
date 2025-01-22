import {
    addMoviesToCatalog,
    loadMoreMovies,
    resetPages,
} from "../functions/addMoviesToCatalog.js";
import { addMovies, addTvShow } from "../functions/addTrendingsFunction.js";
import { locateToMoviePage } from "../functions/toMovies.js";
import { toggleSearch, fetchSearchData } from "../functions/search.js";

if (window.location.pathname.includes("index.html")) {
    addMovies();
    addTvShow();
    const indexSectionOne = document.getElementById("index_section_one");
    indexSectionOne.style.cursor = "pointer";
    indexSectionOne.addEventListener("click", locateToMoviePage);
} else if (window.location.pathname.includes("catalog.html")) {
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
}
