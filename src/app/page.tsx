'use client';
import axios, { AxiosResponse } from "axios";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Slide from "./components/slide/Slide";
import Poster from "./components/Poster/Poster";
import ImagedComponent from "./components/ImagedComponent";
import Footer from "./components/footer/Footer";
import {News} from "./types/types";

export default function Home() {
  const [news, setNews] = useState<Array<News>>([]);

  const itemStyle = {
    li:"md:hover:bg-[#201E43] p-4 transition-[50ms] md:hover:cursor-pointer md:hover:text-white flex flex-col items-center [&>a]:flex [&>a]:flex-col [&>a]:gap-4 ",
    img:"w-full h-[267px] object-cover",
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/api/news/latest?page=0&size=3`).then((response:AxiosResponse) => {
        setNews(response.data.content);
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}, []);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Banner stylish=""/>
        <Slide linkOn={true} link="latest-news" slideTitle="Latest News" boxStyle="w-full p-8 flex flex-col gap-6" stylish="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center" itemStyle={itemStyle} items={news} linkTitle="View All"/>
        <div>
          <Poster stylish="bg-[#f0f0f0] flex flex-row" imgLink="/posters/poster1.webp" slogan="Our Commitment" title="Five Point Plan" content="We recognize our responsibility to ensure a safe work environment for all our employees and patrons. View our ‘Five Point Plan’ that will revamp how we protect you." />
          <Poster stylish="bg-[#f0f0f0] flex flex-row-reverse" imgLink="/posters/poster2.webp" slogan="We Here For You" title="Modernized Social Responsibility" content="Your trust is our priority. Your choice on where to get your news and information is a privilege we appreciate. See how we ensure the accuracy of our reporting."/>
          <button className="w-full p-12 text-center bg-[#201E43] text-white text-3xl hover:bg-[#203042] transition-all">Learn More About Us!</button>
        </div>
        <ImagedComponent bgUrl="/original.webp" imgUrl="/items/item2.webp"  title="Best Place to Start Your Career" content="Whether starting your career or growing as an experienced professional, Waystar Royco offers a diverse slate of opportunities across the globe."  link="/" linkContent="Search Our Job Openings"/>
        <Footer/>
    </main>
    
  );
}
