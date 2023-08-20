// import axios from "axios";
// axios.get("http://localhost:3000/");
// const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/video";
// const options = {
//   url: "https://youtube-v3-alternative.p.rapidapi.com/video",
//   params: { maxResults: "50" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };

import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v3-alternative.p.rapidapi.com/video",
  params: { id: "dQw4w9WgXcQ" },
  headers: {
    "X-RapidAPI-Key": "94e4e6e90cmshe56aa08038531f4p1b0c5ajsnf4842f7776d7",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
