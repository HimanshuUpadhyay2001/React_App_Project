import axios from "axios";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const PERIOD = process.env.REACT_APP_PERIOD;


//for testing 
console.log("==== ENV CHECK START ====");
console.log("process.env.REACT_APP_NYT_API_KEY =", API_KEY);
console.log("ALL REACT ENV KEYS =", Object.keys(process.env));
console.log("==== ENV CHECK END ====");

export const fetchMostViewedArticles = async () => {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${PERIOD}.json?api-key=${API_KEY}`;
  console.log("REQUEST URL =", url);

  const response = await axios.get(url);
  return response.data.results;
};
