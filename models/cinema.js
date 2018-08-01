const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.getFilmByTitle = function (title) {
  return this.films.find(film => film.title === title);
}

Cinema.prototype.getFilmByGenre = function (genre) {
  return this.films.find(film => film.genre === genre);
};

Cinema.prototype.hasFilmByYear = function (year) {
  // console.log(this.films[3].year === year);
  // console.log(this.films.map(f => f.year).includes(year));
  const result = this.films.some(film => film.year === year);
  return result;
};

Cinema.prototype.filmOverDuration = function (duration) {
  const result = this.films.map(film => film.length > duration);
  if (result.length === this.films.length){
    return true;
  }
};

module.exports = Cinema;
