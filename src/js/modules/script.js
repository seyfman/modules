'use strict';

// =========== Урок 1 ===================
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// =========== Урок 1 ===================
// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('Но сколько оцениваете его', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('Но сколько оцениваете его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);


// ============= Урок 2 ======================
// for (let i = 0; i < 2; i++){
//   const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('Но сколько оцениваете его', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// };


// if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
//   alert('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы класический зритель');
//   } else if (personalMovieDB.count >= 30) {
//       alert('Вы киноман');
//     } else {
//       alert('Не верное значение');
//       }


//       console.log(personalMovieDB);

// ============= окончание Урок 2 ======================



// ============= Урок 3 ======================

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   }
// };

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('Но сколько оцениваете его', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   };
// };

// // rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
//     alert('Просмотрено мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы класический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман');
//   } else {
//     alert('Не верное значение');
//   }
// };

// // detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// };

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

//   };
// };

// writeYourGenres();

// ============= окончание Урок 3 ======================

// ============= Урок 4 ======================

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('Но сколько оцениваете его', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
      alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Не верное значение');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  },
}