import { useEffect, useState } from "react";
import { instance } from "../api/axiosInstance";

function HomePage() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("");
        setTest(response);

        // console.log("특정브랜드", response.data.result.products);
      } catch (error) {
        console.log("에러 : ", error);
      }
    };
    fetchData();
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
