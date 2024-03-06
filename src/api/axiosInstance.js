import axios from "axios";

const today = new Date();

export const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  params: {
    key: import.meta.env.VITE_API_KEY,
    targetDt: today.toISOString().slice(0, 10).replace(/-/g, ""),
  },
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
// "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
