import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Sponsored = () => {
  const [spLogos, setSpLogos] = useState([]);
  useEffect(() => {
    fetch("sponsored.json")
      .then((response) => response.json())
      .then((result) => {
        setSpLogos(result);
      });
  }, []);
  return (
    <div>
      <Marquee className="sponsored_bg w-full h-96 mt-32">
        <div className="flex ">
          {spLogos.map((logo) => (
            <div key={logo?.id}>
              <img className="w-32 mx-10 h-24 rounded-md" src={logo?.gameImage} alt="" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsored;
