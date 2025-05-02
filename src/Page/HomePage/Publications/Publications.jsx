import React, { useEffect, useState } from "react";
import HomeImage from "../../../assets/home.png";
import Matches from "../../../assets/matches.png";
import Deposit from "../../../assets/deposit.png";
import Withdraw from "../../../assets/withdraw.png";
import Wallet from "../../../assets/wallet.png";
import Profile from "../../../assets/profile.png";

const publications = [
  {
    "id": 1,
    "name": "TEB ESPORTS",
    "gameImage": HomeImage,
    "details": "TEB ESPORTS is a Tournament App. User can easily register and participate to any tournament. Win atttractive prizes."
  },
  {
    "id": 2,
    "name": "Tournaments",
    "gameImage": Matches,
    "details": "Find different matches and participate by giving your game id code/name to win prizes."
  },
  {
    "id": 3,
    "name": "Deposit Cash",
    "gameImage": Deposit,
    "details": "Deposit cash to your wallet to buy diamonds and participate to any tournament."
  },
  {
    "id": 4,
    "name": "Withdraw Cash",
    "gameImage": Withdraw,
    "details": "Withdraw cash from your wallet whenever you want."
  },
  {
    "id": 5,
    "name": "Wallet",
    "gameImage": Wallet,
    "details": "Manage wallet with ease."
  },
  {
    "id": 6,
    "name": "Profile",
    "gameImage": Profile,
    "details": "In Profile you can see your details and your wallet balance."
  }
]


const Publications = () => {
  const [newGame, setNewGame] = useState([]);
  useEffect(() => {
    fetch("publications.json")
      .then((res) => res.json())
      .then((data) => {
        setNewGame(data);
      });
  }, []);
  return (
    <div className="mt-32 text-white w-10/12 mx-auto">
      <div className=" mb-16 flex justify-center">
        <h2 className="border-b-4 pb-1 px-2 w-max border-red-500 md:text-3xl text-xl font-semibold capitalize ">
          About App
        </h2>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {publications.map((game) => (
          <div key={game?.id} className="">
            <div className="  ">
              <img
                className=" rounded-md"
                src={game?.gameImage}
                alt=""
              />
            </div>
            <div className=" px-3">
              <h2 class="relative text-2xl mt-4 font-semibold  group overflow-hidden inline-block  ">
                {game?.name}
                <span class="absolute inset-x-0 bottom-0 h-1 bg-[#d31c3e] transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
              </h2>
              <p className="leading-7 text-base text-left">{game?.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
