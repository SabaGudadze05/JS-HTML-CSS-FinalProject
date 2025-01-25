import { addMovies, addTvShow } from "../functions/addTrendingsFunction.js";
import { locateToMoviePage } from "../functions/toMovies.js";
import { burgerToggle } from "../functions/burger.js";

addMovies();
addTvShow();
const indexSectionOne = document.getElementById("index_section_one");
indexSectionOne.style.cursor = "pointer";
indexSectionOne.addEventListener("click", locateToMoviePage);

// Burger
const burger = document.querySelector("#burger");

burger.addEventListener("click", burgerToggle);
