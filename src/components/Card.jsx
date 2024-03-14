import React from "react";
import { Link } from "react-router-dom";

function Card({ item, index }) {
  return (
    <li key={index} className="flex-shrink-0">
      <Link to={`/detail/${item.id}`}>
        {/* 이미지 공간 미리 비워둬라 */}
        <img
          className="max-w-64"
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        />
        <p className="text-gray-100">{item.title}</p>
      </Link>
    </li>
  );
}

export default Card;
