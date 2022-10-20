const getMovies = () => {
  fetch("http://localhost:8000/movies").then(
    (response = response.json().then((movies) => {
      console.log(movies);
    }))
  );
};
