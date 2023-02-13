import { cdnUrl } from "../utilities/cdnUrl";

import { useState, useEffect } from "react";

export default function Detail({ popular }) {
  let a = 3;
  console.log(popular[a]?.overview);
  return (
    <div className="text-white">
      {
        <div className="text-white">
          <h1>{popular[a]?.name}</h1>
          <img
            key={`key-${a}`}
            src={`${cdnUrl}/w500/${popular[a]?.backdrop_path}`}
            alt=""
          />
          <p>{popular[a]?.first_air_date}</p>
          <p>{popular[a]?.overview}</p>
          <p>{"Puan: " + popular[a]?.vote_average}</p>
        </div>
      }
    </div>
  );
}
