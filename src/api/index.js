import axios from "axios";

const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/";

function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

export async function searchDailyBoxOfficeList() {
  const response = await axios.get(url + "boxoffice/searchDailyBoxOfficeList", {
    params: {
      key: import.meta.env.VITE_API_KEY,
      targetDt: getYesterdayDate(),
    },
  });
  console.log(response.data.boxOfficeResult);
  return response.data.boxOfficeResult.dailyBoxOfficeList;
}

export async function searchMovieInfo(movieCd) {
  const response = await axios.get(url + "movie/searchMovieInfo", {
    params: {
      key: import.meta.env.VITE_API_KEY,
      movieCd: movieCd,
    },
  });
  console.log(response.data.movieInfoResult.movieInfo);
  return response.data.movieInfoResult.movieInfo;
}
