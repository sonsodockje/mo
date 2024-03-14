import Swiper from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeekTrendingMovies } from "../api";
import Card from "./Card";

function Cards() {
  const swiper = new Swiper();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const tm = await getWeekTrendingMovies();
        setData(tm);
        console.log(tm);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data.length === 0) return <p className="text-white">잠시만요</p>;

  return (
    <div className="px-28">
      <ul className="flex overflow-x-scroll gap-4">
        {data.map((item, index) => (
          <Card item={item} index={index} />
        ))}
      </ul>
      <button>왼</button>
      <button>오</button>
    </div>
  );
}

export default Cards;
