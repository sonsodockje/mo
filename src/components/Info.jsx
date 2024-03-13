import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Info({ props }) {
  const [data, setData] = useState([]);
  const [engNm, setEngNm] = useState("");

  const movieCd = useParams().id;

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const MovieInfo = await searchMovieInfo(movieCd);
    //     setData(MovieInfo);
    //     setEngNm(MovieInfo.movieNmEn);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    // fetchData();
  }, []);

  return <div>{/* {data.movieNm} and {engNm} */}</div>;
}
