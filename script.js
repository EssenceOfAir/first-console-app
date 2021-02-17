"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i != numberOfFilms; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    console.log("Просмотрено менее 10 фильмов");
  } else if (numberOfFilms > 10 && numberOfFilms < 30) {
    console.log("Среднее количяество фильмов");
  } else if (numberOfFilms > 30) {
    console.log("Вы киноман!");
  } else {
    console.log("Вы не указали количество просмотренных фильмов(((");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`
    );
  }
}

writeYourGenres();