let pages = 1;
const apiKey = "5ff9240d003a5ddeb86b9c021912afba";

// Function to add movies to the catalog
export function addMoviesToCatalog(sortBy = "day") {
    // Fetch movies based on sort option and page number
    fetch(
        `https://api.themoviedb.org/3/trending/movie/${sortBy}?language=en-US&api_key=${apiKey}&page=${pages}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const movies = data.results;
            const movieContainer = document.getElementById(
                "catalog_movie_container"
            );

            if (pages === 1) {
                movieContainer.innerHTML = "";
            }

            // Add movie cards to the container
            movies.forEach((movie) => {
                const movieCard = document.createElement("article");
                movieCard.classList.add("catalog_card_section_article");

                let movieBackground;
                if (movie.backdrop_path === null) {
                    movieBackground = movie.poster_path;
                } else {
                    movieBackground = movie.backdrop_path;
                }

                movieCard.innerHTML = `
                            <img src="https://image.tmdb.org/t/p/w500${movieBackground}" alt=""
                            class="catalog_card_section_article_img"  />
                </section>
                <section class="catalog_card_section_article_section">
                    <p class="catalog_card_name">${movie.title}</p>
                        <section class="card_article_index_price_section">
                            <p class="index_card_price">IMBD: <span class="IMBD_class">${movie.vote_average.toFixed(
                                1
                            )}</span></p>
                            <button class="add_cart_button">
                                Visit
                            </button>
                        </section>
                </section>
                `;

                movieCard.addEventListener("click", () => {
                    localStorage.setItem(
                        "selectedMovie",
                        JSON.stringify(movie)
                    );
                    window.location.href = "../contact.html";
                });

                movieContainer.appendChild(movieCard);
            });
        });
}

// Function to load more movies (preserves current sort)
export function loadMoreMovies(sortBy) {
    pages++;
    addMoviesToCatalog(sortBy);
}
export function resetPages() {
    pages = 1;
}

export function sortMovieByDay() {}
