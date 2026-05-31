import { CONFIG } from "./config.js";
const API_KEY = CONFIG.TMDB_API_KEY;

const root = document.getElementById("root");

//create title
const title = document.createElement("div");
title.innerHTML = "<h1>Movie Mania</h1>";
root.appendChild(title);

//create input container
const inputDiv = document.createElement("div");
inputDiv.className = "input-container";
root.appendChild(inputDiv);

//create input field
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search a movie";
input.required = true;
inputDiv.appendChild(input);

//Trigger everything inside the event listener
input.addEventListener("change", async () => {
  const enteredText = input.value.trim();
  if (enteredText === "") return;
  console.log("Searching for : ", enteredText);
  if (document.getElementById("movieList")) {
    document.getElementById("movieList").remove();
  }
  //fetch data and wait for result
  const movieData = await getMovieData(enteredText);
  console.log("TMDB API Response:", movieData);

  const movieList = document.createElement("ul");
  movieList.id = "movieList";
  movieData.results.forEach((movie) => {
    const card = document.createElement("div");
    const listItem = document.createElement("li");
    const poster = document.createElement("img");
    if (movie.poster_path) {
      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
      poster.alt = "No Image Available";
    }
    poster.width = 200;
    listItem.textContent = movie.title;

    card.appendChild(listItem);
    card.appendChild(poster);
    movieList.appendChild(card);
  });
  root.appendChild(movieList);
});

async function getMovieData(inputQuery) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(inputQuery)}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Something Went Wrong.", e);
  }
}
