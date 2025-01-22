const apiKey = "5ff9240d003a5ddeb86b9c021912afba";
let page = 1;

function addMovies() {
    fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}&page=${page}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const trendingMovies = document.getElementById(
                "index_trending_movies"
            );
            for (let i = 0; i < 8; i++) {
                const movie = data.results[i];
                const movieArticle = document.createElement("article");
                movieArticle.classList.add("card_article_index");
                movieArticle.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${
            movie.backdrop_path
        }" alt="" class="card_article_index_img" />
        <section class="card_article_index_section">
        <h3 class="card_article_index_header">
            ${movie.title}
        </h3>
            <section class="card_article_index_price_section">
                <p class="index_card_price">IMBD: <span class ="IMBD_class">${movie.vote_average.toFixed(
                    1
                )}</span></p>
                <button class="index_card_buy_button">
                    Visit
                </button>
            </section>
        </section>
        `;
                trendingMovies.appendChild(movieArticle);
            }
        });
}

function addTvShow() {
    fetch(
        `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=5ff9240d003a5ddeb86b9c021912afba&page=${page}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // const shows = document.getElementById("index_trending_show");
            const trendingTvShows = document.getElementById(
                "index_trending_show"
            );
            for (let i = 0; i < 8; i++) {
                const tvShow = data.results[i];

                const article = document.createElement("article");
                article.classList.add("card_article_index");

                article.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${
                    tvShow.backdrop_path
                }" alt="" class="card_article_index_img" />
                    <section class="card_article_index_section">
                        <h3 class="card_article_index_header">
                            ${tvShow.name}
                        </h3>
                        <section class="card_article_index_price_section">
                            <p class="index_card_price">IMBD: <span class ="IMBD_class">${tvShow.vote_average.toFixed(
                                1
                            )}</span></p>
                            <button class="index_card_buy_button">
                                Visit
                            </button>
                    </section>
                </section>
                    
                `;
                trendingTvShows.appendChild(article);
            }
        });
}

export { addMovies, addTvShow };
