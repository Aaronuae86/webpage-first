import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const animes = [
  {
    name: "EightySix",
    image: "/86.jpg",
  },
  {
    name: "Re:Zero",
    image: "/ReZero.jpg",
  },
  {
    name: "Monogatari",
    image: "/monogatari.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>3 Best Animes of All Time</h1>
      <div className="anime-list">
        {animes.map((anime) => (
          <Link to={`/anime/${anime.name}`} key={anime.name}>
            <div className="anime">
              <img src={anime.image} alt={anime.name} />
              <h2>{anime.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
