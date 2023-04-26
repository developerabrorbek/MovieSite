import React from 'react';
import Imdb from "../../assets/imdb.png";
import Fruit from "../../assets/fruit.png";
import Like from "../../assets/like.svg";
import { useState } from 'react';
import GetData from '../GetData';

function Arrival(props) {
  const [data,setData] = useState('');
  GetData("https://api.themoviedb.org/3/movie/upcoming?api_key=01a54b95950c537418879c9806285052&language=en-US&page=1");
    return (
        <section className="arrival mb-12">
      <div className="container mx-auto">
        <div className="arrival-body flex justify-between py-4 items-center mb-4">
          <h2 className="font-bold text-[36px] leading-[47px]">New Arrival</h2>
          <a href="#" className="text-[#BE123C] hover:text-[#e63b3b] font-normal text-[18px] leading-[24px]">See more</a>
        </div>
        <ul className="arrival-cards flex justify-between">
          <li className="arrival-card w-[250px]">
            <div className="card-img relative">
              <img src="./src/assets/featured.png" alt="image" />
              <img src={Like} alt="favorite" className="absolute top-2 right-2 cursor-pointer" title="Add fovorites"/>
            </div>
            <div className="card-body mt-4">
              <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">USA, 2016</p>
              <h3 className="text-[#111827] font-bold text-[18px] leading-[23px]">Stranger Things</h3>
              <div className="hero-extra flex justify-between mt-4 mb-4">
                <div className="rating flex gap-x-2 items-center">
                  <img src={Imdb} alt="imdb" />
                  <p className="rating-text">86.0 / 100</p>
                </div>
                <div className="percant flex gap-x-2 items-center">
                  <img src={Fruit} alt="fruit" />
                  <p className="percant-text">97%</p>
                </div>
              </div>
              <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">Action, Adventure, Horror</p>
            </div>
          </li>
          <li className="featured-card w-[250px]">
            <div className="card-img relative">
              <img src="./src/assets/featured.png" alt="image" />
              <img src={Like} alt="favorite" className="absolute top-2 right-2 cursor-pointer" title="Add fovorites"/>
            </div>
            <div className="card-body mt-4">
              <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">USA, 2016</p>
              <h3 className="text-[#111827] font-bold text-[18px] leading-[23px]">Stranger Things</h3>
              <div className="hero-extra flex justify-between mt-4 mb-4">
                <div className="rating flex gap-x-2 items-center">
                  <img src={Imdb} alt="imdb" />
                  <p className="rating-text">86.0 / 100</p>
                </div>
                <div className="percant flex gap-x-2 items-center">
                  <img src={Fruit} alt="fruit" />
                  <p className="percant-text">97%</p>
                </div>
              </div>
              <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">Action, Adventure, Horror</p>
            </div>
          </li>
          <li className="featured-card w-[250px]">
            <div className="card-img relative">
              <img src="./src/assets/featured.png" alt="image" />
              <img src={Like} alt="favorite" className="absolute top-2 right-2 cursor-pointer" title="Add fovorites"/>
            </div>
            <div className="card-body mt-4">
              <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">USA, 2016</p>
              <h3 className="text-[#111827] font-bold text-[18px] leading-[23px]">Stranger Things</h3>
              <div className="hero-extra flex justify-between mt-4 mb-4">
                <div className="rating flex gap-x-2 items-center">
                  <img src={Imdb} alt="imdb" />
                  <p className="rating-text">86.0 / 100</p>
                </div>
                <div className="percant flex gap-x-2 items-center">
                  <img src={Fruit} alt="fruit" />
                  <p className="percant-text">97%</p>
                </div>
              </div>
              <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">Action, Adventure, Horror</p>
            </div>
          </li>
          <li className="featured-card w-[250px]">
            <div className="card-img relative">
              <img src="./src/assets/featured.png" alt="image" />
              <img src={Like} alt="favorite" className="absolute top-2 right-2 cursor-pointer" title="Add fovorites"/>
            </div>
            <div className="card-body mt-4">
              <p className="year text-[#9CA3AF] font-bold text-[12px] leading-4 mb-4">USA, 2016</p>
              <h3 className="text-[#111827] font-bold text-[18px] leading-[23px]">Stranger Things</h3>
              <div className="hero-extra flex justify-between mt-4 mb-4">
                <div className="rating flex gap-x-2 items-center">
                  <img src={Imdb} alt="imdb" />
                  <p className="rating-text">86.0 / 100</p>
                </div>
                <div className="percant flex gap-x-2 items-center">
                  <img src={Fruit} alt="fruit" />
                  <p className="percant-text">97%</p>
                </div>
              </div>
              <p className="category text-[#9CA3AF] font-bold text-[12px] leading-4">Action, Adventure, Horror</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    );
}

export default Arrival;