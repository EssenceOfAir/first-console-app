"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i != numberOfFilms; i++) {
  const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько оцените его?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (numberOfFilms < 10) {
  console.log("Просмотрено менее 10 фильмов");
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
  console.log("Среднее количяество фильмов");
} else if (numberOfFilms > 30) {
  console.log("Вы киноман!");
} else {
  console.log("Вы не указали количество просмотренных фильмов(((");
}

console.log(personalMovieDB);