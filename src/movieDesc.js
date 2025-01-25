const apiKey = "5ff9240d003a5ddeb86b9c021912afba";

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
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.genres);

        const releaseYear =
            localStorageMovie.release_date || localStorageMovie.first_air_date;

        const genreIds = localStorageMovie.genre_ids;
        const movieGenres = genreIds
            .map((id) => data.genres.find((genre) => genre.id === id)?.name)
            .filter(Boolean);

        const movieName = document.querySelector(".movie_name_and_date");
        movieName.innerHTML = `
        <h3 class="movie_description_header">${
            localStorageMovie.title || localStorageMovie.name
        }
        <span class="movie_relase_date"> 
        (${releaseYear.split("-")[0]}) 
        </span>
        </h3>
        <section class="relase_date_and_jenres">
        <p>${releaseYear} <span>(${localStorageMovie.original_language.toUpperCase()})</span></p>
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
// Fetching cast and crew
const mediaType = localStorageMovie.media_type || "movie";
fetch(
    `https://api.themoviedb.org/3/${mediaType}/${localStorageMovie.id}/credits?api_key=${apiKey}`
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const castList = data.cast;
        const director =
            data.crew.find((crewMember) => crewMember.job === "Director") ||
            data.crew.find(
                (crewMember) => crewMember.department === "Directing"
            );
        let directorName;
        if (director) {
            directorName = director.name;
        } else {
            directorName = "Not available";
        }

        const castSection = document.querySelector(".cast_and_director");
        castSection.innerHTML = `
        <section class="cast_and_director">
            <section class="director">
                <h4>Director:</h4>
                <p>${directorName}</p>
            </section>
            <section class="cast">
                <h4>Cast:</h4>
                <section class="cast_members">
           </section>
        </section>
        
        `;
        const castMembers = document.querySelector(".cast_members");
        for (let i = 0; i < Math.min(10, castList.length); i++) {
            const actor = document.createElement("article");
            actor.classList.add("actor");
            actor.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${castList[i].profile_path}" alt=""/>
            <h5 class="actor_name">${castList[i].name}</h5
            `;
            castMembers.appendChild(actor);
        }
    });
