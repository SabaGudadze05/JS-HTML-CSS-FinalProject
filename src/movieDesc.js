const localStorageMovie = JSON.parse(localStorage.getItem("selectedMovie"));
console.log(localStorageMovie);

const viewPageMainSection = document.getElementById(
    "view_details_main_section"
);

const thumbnailSection = document.getElementById("thumbnail_section");

thumbnailSection.innerHTML = `
<img src="https://image.tmdb.org/t/p/w500${localStorageMovie.backdrop_path}" alt="" class="thumbnail_section_thumbnail" />
`;
//Here i fetched data of genres to get genres via IDs
fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=5ff9240d003a5ddeb86b9c021912afba&language=en-US`
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.genres);

        const genreIds = localStorageMovie.genre_ids;
        const movieGenres = genreIds
            .map((id) => data.genres.find((genre) => genre.id === id)?.name)
            .filter(Boolean);

        const movieName = document.querySelector(".movie_name_and_date");
        movieName.innerHTML = `
        <h3 class="movie_description_header">${localStorageMovie.title}
        <span class="movie_relase_date"> 
        (${localStorageMovie.release_date.split("-")[0]}) 
        </span>
        </h3>
        <section class="relase_date_and_jenres">
        <p>${
            localStorageMovie.release_date
        } <span>(${localStorageMovie.original_language.toUpperCase()})</span></p>
            <p>• ${movieGenres.join(" • ")} •</p>
        </section>

`;
    });

const movierating = document.querySelector(".movie_rating");
movierating.innerHTML = `
    <img src="./imgs/IMDB_Logo_2016.svg.png" alt="" />
                            <p>: ${localStorageMovie.vote_average.toFixed(
                                1
                            )}</p>
`;
const overviewSection = document.querySelector(".overview_section");
overviewSection.innerHTML = `
<h4>Overview:</h4>
<p>${localStorageMovie.overview}</p>
`;
