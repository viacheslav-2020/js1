"use strict"
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let q1 = prompt("Один из последних фильмов");
let r1 = prompt("Рейтинг");
let q2 = prompt("Один из последних фильмов");
let r2 = prompt("Рейтинг");

personalMovieDB.movies[q1] = r1;
personalMovieDB.movies[q2] = r2;

console.log(personalMovieDB);