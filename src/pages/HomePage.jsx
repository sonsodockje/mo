import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { np } from "../api";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        np();
        // const dailyBoxOfficeList = await searchDailyBoxOfficeList();
        // setData(dailyBoxOfficeList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data.length === 0) return <p>잠시만요</p>;

  return (
    <div>
      <ul className="list-none">
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`/detail/${item.movieCd}`}>{item.movieNm}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
