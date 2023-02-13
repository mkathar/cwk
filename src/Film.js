import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { api } from "./api/service";
import Header from "./components/Header";
import { RiMenFill } from "react-icons/ri";

export default function Film() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const [Populer, setPopular] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    populerApi();
    upComingApi();
    nowPlayingApi();
    topRatedApi();
  }, []);

  const populerApi = () => {
    api()
      .get("/3/tv/popular?api_key=cac36baa49a97934e31785f8b7b03b15")
      .then((response) => {
        setPopular(response.data.results);
      });
  };

  const upComingApi = () => {
    api()
      .get(
        "/3/movie/upcoming?api_key=cac36baa49a97934e31785f8b7b03b15&language=en-US&page=1"
      )
      .then((response) => {
        setUpcoming(response.data.results);
      });
  };

  const nowPlayingApi = () => {
    api()
      .get(
        "/3/movie/now_playing?api_key=cac36baa49a97934e31785f8b7b03b15&language=en-US&page=1"
      )
      .then((response) => {
        setNowPlaying(response.data.results);
      });
  };

  const topRatedApi = () => {
    api()
      .get("/3/tv/top_rated?api_key=cac36baa49a97934e31785f8b7b03b15")
      .then((response) => {
        setTopRated(response.data.results);
      });
  };

  /*
<Slider>
<div className='flex'>
  {films.map((data,i)=>(
    <div key={i} className='w-32'>
      <img  src={`https://image.tmdb.org/t/p/w500${films[i].backdrop_path}`}alt="" />
      {data.name}
    </div>
  ))}
</div>

  </Slider>
  */

  return (
    <div className="bg-black ">
      <div>
        <h1 className="text-white text-xl py-6">Popüler</h1>
        <Slider {...settings}>
          <div className="!flex">
            <div>
              <div className="flex">
                {Populer.map((data, i) => (
                  <div key={i} className="w-64 mx-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${Populer[i]?.backdrop_path}`}
                      alt=""
                    />
                    <h4 className="text-center text-white"> {data.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
      <div>
        <h1 className="text-white text-xl py-6">En'ler</h1>
        <Slider {...settings}>
          <div className="!flex">
            <div>
              <div className="flex">
                {TopRated.map((data, i) => (
                  <div key={i} className="w-64 mx-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${TopRated[i]?.backdrop_path}`}
                      alt=""
                    />
                    <h4 className="text-center text-white"> {data.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
      <div>
        <h1 className="text-white text-xl py-6">Yeniler</h1>
        <Slider {...settings}>
          <div className="!flex">
            <div>
              <div className="flex">
                {Upcoming.map((data, i) => (
                  <div key={i} className="w-64 mx-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${Upcoming[i]?.backdrop_path}`}
                      alt=""
                    />
                    <h4 className="text-center text-white">
                      {" "}
                      {data.original_title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
      <div>
        <h1 className="text-white text-xl py-6">Vizyonda</h1>
        <Slider {...settings}>
          <div className="!flex">
            <div>
              <div className="flex">
                {Upcoming.map((data, i) => (
                  <div key={i} className="w-64 mx-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${NowPlaying[i]?.backdrop_path}`}
                      alt=""
                    />
                    <h4 className="text-center text-white">
                      {" "}
                      {data.original_title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
    </div>
  );
}
