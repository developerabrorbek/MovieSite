import React from "react";
import Imdb from "../../assets/imdb.png";
import Fruit from "../../assets/fruit.png";
import Like from "../../assets/like.svg";
import GetData from "../GetData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activePages} from "../../redux/slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Pagination
} from "swiper";

function Featured() {
  const [data, setData] = useState("");
  const {page} = useSelector((state) => state.featured);
  const dispatch = useDispatch();

  GetData(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=01a54b95950c537418879c9806285052&language=en-US&page=${page}`,
    setData
  );

  dispatch(activePages(data.total_pages));

  if (data?.results?.length)
    return (
      <section className="featured mb-12 mt-6">
        <div className="container mx-auto">
          <div className="featured-body flex justify-between py-4 items-center mb-4">
            <h2 className="font-bold text-[36px] leading-[47px]">
              Featured Movie
            </h2>
            <Link
              to="/featured"
              className="text-[#BE123C] hover:text-[#e63b3b] font-normal text-[18px] leading-[24px]"
            >
              See more
            </Link>
          </div>
          <ul className="featured-cards w-full ">
            <Swiper
              className="w-full grid grid-cols-4 justify-between gap-y-5 pb-16"
              modules={[
                Autoplay,
                Keyboard,
                Mousewheel,
                Pagination
              ]}
              keyboard={{ enabled: true }}
              direction="horizontal"
              mousewheel = {true}
              autoplay={{ delay: 2000 }}
              slidesPerView={4}
              pagination={{ clickable: true }}
            >
              {data["results"].map((item) => {
                return (
                  <SwiperSlide className="w-[250px] h-[542px]" >
                    <Link
                      to={`/about/${item.id}`}
                      className="featured-card block relative "
                      data-id={item.id}
                      onClick={(e) => (path = `/${item.id}`)}
                    >
                      <div className="card-img relative w-[250px]">
                        <img
                          src={`http://image.tmdb.org/t/p/w500${item["poster_path"]}`}
                          alt="image"
                          className="h-[375px]"
                        />
                        <img
                          src={Like}
                          alt="favorite"
                          className="absolute top-2 right-2 cursor-pointer"
                          title="Add fovorites"
                          data-id={item.id}
                        />
                      </div>
                      <div className="card-body mt-4 w-[250px]">
                        <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">
                          USA, {item.release_date.slice(0, 4)}
                        </p>
                        <h3
                          className="text-[#111827] font-bold text-[18px] leading-[23px]  h-[48px] overflow-hidden"
                          title={item.title}
                        >
                          {item.title}
                        </h3>
                        <div className="hero-extra flex justify-between mt-4 mb-4">
                          <div className="rating flex gap-x-2 items-center">
                            <img src={Imdb} alt="imdb" />
                            <p className="rating-text">{item["popularity"]}</p>
                          </div>
                          <div className="percant flex gap-x-2 items-center">
                            <img src={Fruit} alt="fruit" />
                            <p className="percant-text">
                              {item["vote_average"]}
                            </p>
                          </div>
                        </div>
                        <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">
                          Action, Adventure, Horror
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
        </div>
      </section>
    );
}

export default Featured;
