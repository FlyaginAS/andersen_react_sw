class ApiService {
  _transformPerson = (person) => {
    //переименовываем и берем только интересующие свойства
    return {
      id: this._extractId(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender,
      films: person.films,
      starships: person.starships,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      manufacturer: starship.manufacturer,
      starshipClass: starship.starship_class,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      hyperdriveRating: starship.hyperdrive_rating,
    };
  };

  _transformFilm = (film) => {
    return {
      id: this._extractId(film),
      title: film.title,
      episode: film.episode_id,
      releaseDate: film.release_date,
    };
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url}, received ${res.status}`
      );
    }

    return await res.json();
  };

  getPeople = async () => {
    const res = await this.getResource(
      `https://swapi.dev/api/people/`
    );
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(
      `https://swapi.dev/api/people/${id}/`
    );
    return this._transformPerson(person);
  };

  getPersonFilms = async (urls) => {
    const promiseArr = urls.map(this.getResource);

    const films = await Promise.all(promiseArr);
    return films.map(this._transformFilm);
  };

  getPersonStarships = async (urls) => {
    const promiseArr = urls.map(this.getResource);

    const starships = await Promise.all(promiseArr);
    return starships.map(this._transformStarship);
  };

  getSearchByName = async (name) => {
    const res = await this.getResource(
      `https://swapi.dev/api/people/?search=${name}`
    );

    return res.results.map(this._transformPerson);
  };
}

const apiService = new ApiService();

export default apiService;
