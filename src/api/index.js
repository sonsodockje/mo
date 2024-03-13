import axios from "axios";

const nowPlayingBasicUrl = "movie/now_playing";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export async function np() {
  const aa = await instance.get(nowPlayingBasicUrl, {
    params: {
      language: "ko-KR",
      page: 2,
      region: "KR",
    },
  });
  console.log(aa.data.results);
}
