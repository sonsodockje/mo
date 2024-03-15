import React from "react";
import { Link } from "react-router-dom";

function Card({ item, index }) {
  return (
    <div className="">
      <Link to={`/detail/${item.id}`}>
        {/* 이미지 공간 미리 비워둬라 */}
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          className="aspect-[2/3]"
        />
      </Link>
    </div>
  );
}

export default Card;
