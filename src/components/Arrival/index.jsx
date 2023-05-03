import React from "react";
import Imdb from "../../assets/imdb.png";
import Fruit from "../../assets/fruit.png";
import Like from "../../assets/like.svg";
import { useState, useMemo } from "react";
import GetData from "../GetData";
import { Link } from "react-router-dom";

function Arrival({cards,page}) {
  const [arrivalData, setarrivalData] = useState("");
  const [pages, setPages]= useState(1);

  let elCards = cards ? 20 : 4;
  useMemo(()=>{
    setPages(page)
  },[page])

  GetData(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=01a54b95950c537418879c9806285052&language=en-US&page=${pages}`,
    setarrivalData
  );
  if (arrivalData?.results?.length)
  return (
    <section className="arrival mb-12">
      <div className="container mx-auto">
        <div className="arrival-body flex justify-between py-4 items-center mb-4">
          <h2 className="font-bold text-[36px] leading-[47px]">New Arrival</h2>
          <Link
            to="/arrival"
            className="text-[#BE123C] hover:text-[#e63b3b] font-normal text-[18px] leading-[24px]"
          >
            See more
          </Link>
        </div>
        <ul className="arrival-cards grid grid-cols-4 justify-between gap-y-5">
          {arrivalData["results"].slice(0,elCards).map((item) => {
            return (
              <Link to={`/about/${item.id}`} className="arrival-card w-[250px] h-[542px]" data-id={item.id}>
                <div className="card-img relative">
                  <img src={`http://image.tmdb.org/t/p/w500${item["poster_path"]}`} alt="Image Not found" className="h-[375px]"/>
                  <img
                    src={Like}
                    alt="favorite"
                    className="absolute top-2 right-2 cursor-pointer"
                    title="Add fovorites"
                    data-id={item.id}
                  />
                </div>
                <div className="card-body mt-4">
                  <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">
                    USA, {item.release_date.slice(0,4)}
                  </p>
                  <h3 className="text-[#111827] font-bold text-[18px] leading-[23px] h-[48px] overflow-hidden" title={item.title}>
                  {item.title}
                  </h3>
                  <div className="hero-extra flex justify-between mt-4 mb-4">
                    <div className="rating flex gap-x-2 items-center">
                      <img src={Imdb} alt="imdb" />
                      <p className="rating-text">{item["popularity"]}</p>
                    </div>
                    <div className="percant flex gap-x-2 items-center">
                      <img src={Fruit} alt="fruit" />
                      <p className="percant-text">{item["vote_average"]}</p>
                    </div>
                  </div>
                  <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">
                    Action, Adventure, Horror
                  </p>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Arrival;
