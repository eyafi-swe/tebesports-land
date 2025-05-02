import React, { useEffect, useState } from "react";
import FFtour from "../../../assets/fftour.jfif";
import Rewards from "../../../assets/rewards.webp";
import Diamond from "../../../assets/diamond.webp";

const gameCards = [
  {
    "id": 1,
    "gameImage": FFtour,
    "model": "FREE FIRE Tournament"
  },
  {
    "id": 2,
    "gameImage": Rewards,
    "model": "Win Rewards"
  },
  {
    "id": 3,
    "gameImage": Diamond,
    "model": "Top Up Diamonds"
  }
]

const GameStoreCard = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("gameCard.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  return (
    <div className="text-white mt-32 w-10/12 mx-auto">
      <div className="text-center">
        <small className="uppercase inline-block bg-[#d31c3e] py-1 font-bold rounded-ss-lg rounded-ee-xl rounded px-4">
          Game
        </small>
        <h2 className="font-semibold text-3xl py-5">From Our App</h2>
        <p>
          TEB ESPORTS is a Tournament App. You can find Free Fire tournaments, easily participate to the tournaments and get rewards. <br /> Register with two steps and participate to the tournaments.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-20">
        {gameCards.map((game) => (
          <div key={game.id} className="group relative ">
            <div className="h-48 w-80 relative">
              <img
                className="rounded h-full w-full "
                src={game.gameImage}
                alt=""
              />
              <p className=" absolute bottom-0 left-4">{game.rating}</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-xl mt-3 mb-1">{game.model}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStoreCard;
