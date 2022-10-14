export const fetchOptions = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4352a3c067mshb2c5424d4de88ffp1bc3e6jsn125fd08dd6b7",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  fetch(
    "https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F120&output_language=en",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
