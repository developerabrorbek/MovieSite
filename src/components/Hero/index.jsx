import React from 'react';
import Imdb from "../../assets/imdb.png";
import Fruit from "../../assets/fruit.png";
import Watch from "../../assets/watch.svg";

function Hero(props) {
    return (
        <section className='hero mt-[78px]'>
            <div className="container mx-auto">
                <div className="hero-body w-[404px]">
                    <h1 className='font-bold text-[48px] leading-[56px] text-white'>John Wick 3 : Parabellum</h1>
                    <div className="hero-extra flex gap-x-6 mt-6">
                        <div className="rating flex gap-x-2 items-center">
                            <img src={Imdb} alt="imdb" />
                            <p className="rating-text text-white">86.0 / 100</p>
                        </div>
                        <div className="percant flex gap-x-2 items-center">
                            <img src={Fruit} alt="fruit" />
                            <p className="percant-text text-white">97%</p>
                        </div>
                    </div>
                    <p className="hero-text text-white max-w-[302px] mt-4 font-medium text-[14px] leading-[18px] ">
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p>
                    <a href="#" className="watch flex items-center w-fit mt-4 hover:bg-[#ca1845] gap-x-2 py-[6px] px-4 bg-[#BE123C] rounded-[6px] ">
                        <img src={Watch} alt="Watch" />
                        <p className="watch-text text-white uppercase">watch trailer</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;