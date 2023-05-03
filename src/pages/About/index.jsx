import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovie } from '../../components/GetData';
import Imdb from "../../assets/imdb.png";
import Fruit from "../../assets/fruit.png";
import Watch from "../../assets/watch.svg";

const About = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    GetMovie(id,setItem);
    return (
        <main className='pt-24'>
            {
            <section className="hero h-[600px]">
                <img
                    src={`http://image.tmdb.org/t/p/w1280${item["backdrop_path"]}`}
                    alt="Image"
                    className="absolute right-center -z-10 w-full -top-5 h-[650px]"
                />
                <div className="container mx-auto flex items-center h-[60vh]">
                    <div className="hero-body w-[404px] px-6" onClick={(e) => watchMovie(e, item.id)}>
                        <h1 className="font-bold text-[48px] leading-[56px] text-white max-h-[120px] overflow-hidden" title={item.title}>
                            {item.title}
                        </h1>
                        <div className="hero-extra flex gap-x-6 mt-6">
                            <div className="rating flex gap-x-2 items-center">
                                <img src={Imdb} alt="imdb" />
                                <p className="rating-text text-white">
                                    {item["popularity"]}
                                </p>
                            </div>
                            <div className="percant flex gap-x-2 items-center">
                                <img src={Fruit} alt="fruit" />
                                <p className="percant-text text-white">
                                    {item["vote_average"]}
                                </p>
                            </div>
                        </div>
                        <p className="hero-text text-white max-w-[302px] mt-4 font-medium text-[14px] leading-[18px] max-h-96 ">
                            {item.overview}
                        </p>
                        <a href="#"
                            id={item.id}
                            className="watch flex items-center w-fit mt-4 hover:bg-[#ca1845] gap-x-2 py-[6px] px-4 bg-[#BE123C] rounded-[6px]"
                        >
                            <img src={Watch} alt="Watch" className="watch-img" />
                            <p className="watch-text text-white uppercase">
                                watch trailer
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            }
        </main>
    );
};

export default About;