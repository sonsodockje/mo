import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { np } from "../api";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await np(); // np 함수의 결과를 기다립니다.
        setData(response.data.results); // 결과를 상태에 설정합니다.

        
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
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
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
