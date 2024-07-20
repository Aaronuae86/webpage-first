import { useParams } from "react-router-dom";
import "./AnimeDetail.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const animeDetails = {
  EightySix: {
    synopsis:
      "The story follows Lena as she commands a squad of drones called the 86. The Republic of San Magnolia is at war with its neighboring country, the Empire of Giad. Both sides use unmanned drones to conduct a war without casualties. The story follows Lena as she commands a squad of drones called the 86.",
    characters: [
      { name: "Vladilena Milize", image: "/lena.jpg", status: "Alive" },
      { name: "Nouzen Shinei", image: "/shin.jpg", status: "Alive" },
      { name: "Frederica", image: "/frederica.jpg", status: "Alive" },
    ],
  },
  "Re:Zero": {
    synopsis:
      "Subaru Natsuki is a NEET who is suddenly summoned to a fantasy-like world. Just after arriving, he is killed while trying to help a young half-elf he befriends, Emilia, who is a candidate to become the next ruler of the Kingdom of Lugunica, only to revive some hours in the past.",
    characters: [
      { name: "Satella", image: "/Satella.jpg", status: "dead" },
      { name: "Echidna", image: "/echidna.jpg", status: "Alive" },
      { name: "Emilia", image: "/emilia.jpg", status: "Alive" },
    ],
  },
  Monogatari: {
    synopsis:
      "The plot centers on Koyomi Araragi, a third-year high school student who survives a vampire attack and finds himself helping girls involved with a variety of apparitions, ghosts, beasts, spirits, and other supernatural phenomena, which often serve as proxies for their emotional and mental issues.",
    characters: [
      { name: "Hitagi Senjougahara", image: "/hitagi.jpg", status: "Alive" },
      { name: "Kaiki Deishuu", image: "/kaiki.jpg", status: "dead" },
      { name: "Shinobu Oshino", image: "/shinobu.jpg", status: "Alive" },
    ],
  },
};

const AnimeDetail = () => {
  const { name } = useParams();
  const anime = animeDetails[name];

  const [revealedStatus, setRevealedStatus] = useState({});

  const handleClick = (characterName) => {
    setRevealedStatus((prevState) => ({
      ...prevState,
      [characterName]: !prevState[characterName],
    }));
  };

  return (
    <div className="anime-detail">
      <h1>{name}</h1>
      <p>{anime.synopsis}</p>
      <h2>3 Best Characters</h2>
      <div className="character-list">
        {anime.characters.map((character) => (
          <div className="character" key={character.name}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <button
              className="status-button"
              onClick={() => handleClick(character.name)}
            >
              {revealedStatus[character.name] ? character.status : "LifeStatus"}
            </button>
            {!revealedStatus[character.name] && (
              <span className="status hidden">SPOILER! Click to reveal</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeDetail;
