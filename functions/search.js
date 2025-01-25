// creating search input and toggling
export function toggleSearch(butt, searchResult) {
    butt.addEventListener("click", function (event) {
        const inputSec = document.getElementById("input_section");
        const searchInput = document.getElementById("movie_search");

        inputSec.classList.add("width_for_section");
        searchInput.classList.remove("active_search_input");

        event.stopPropagation();

        document.addEventListener("click", function removeClasses(e) {
            if (
                !inputSec.contains(e.target) &&
                !butt.contains(e.target) &&
                !searchResult.contains(e.target)
            ) {
                inputSec.classList.remove("width_for_section");
                searchInput.classList.add("active_search_input");
                searchInput.value = "";
                searchResult.classList.remove("appear_class");
                document.getElementById("search_results_ul").innerHTML = "";
                document.removeEventListener("click", removeClasses);
            }
        });
    });
}

export function fetchSearchData(movieName) {
    if (movieName.trim() === "") return;

    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5ff9240d003a5ddeb86b9c021912afba&query=${movieName}&page=1`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document
                .getElementById("search_results")
                .classList.add("appear_class");
            const searchResultUl = document.getElementById("search_results_ul");

            searchResultUl.innerHTML = "";
            for (let i = 0; i < Math.min(10, data.results.length); i++) {
                const movie = data.results[i];
                const movieLi = document.createElement("li");
                if (data.results.length !== 0) {
                    movieLi.innerHTML = `
                    <section class="search_results_img_section">
                        <img src="https://image.tmdb.org/t/p/w500${
                            movie.backdrop_path || "No description available"
                        }" alt="">
                    </section>
                    <section class="movie_desc_section">
                        <h2>${movie.original_title}</h2>
                        <p>${movie.overview}</p>
                    </section>
                `;
                    movieLi.addEventListener("click", () => {
                        localStorage.setItem(
                            "selectedMovie",
                            JSON.stringify(movie)
                        );
                        window.location.href = "contact.html";
                    });
                    searchResultUl.appendChild(movieLi);
                }
            }
        });
}
