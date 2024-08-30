'use client';
import axios, { AxiosResponse } from "axios";
import { useEffect,useState } from "react";
import Slide from "../components/slide/Slide";
import { News, PageableRequest } from "../types/types";
import Navbar from "../components/Navbar/Navbar";
import Wheel from "../components/Wheel";
import next from "next";

export default function page() : JSX.Element {

    const itemStyle = {
        li:"animate-insert md:hover:bg-[#201E43] p-4 md:p-8 gap-4 transition-[50ms] md:hover:cursor-pointer md:hover:text-white flex flex-col items-center [&>a]:flex [&>a]:flex-col [&>a]:gap-8 ",
        img:"w-full h-[267px] object-cover md:hover:scale-105 transition-[50ms]",
      }

    const [news, setNews] = useState<Array<News>>([]);
    const [totalPages,setTotalPages] = useState<number>(0);
    const [page,setPage] = useState<number>(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/news/latest?page=${page}&size=6`).then((response:AxiosResponse) => {
            setNews(response.data.content);
            setTotalPages(response.data.totalPages);
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [page]);

    const prevFunc = () => {
        if(page > 0){
            setPage(page-1);
            console.log(page);
            window.scrollTo(0,0);
        }
    }

    const nextFunc = () => {
        if(page < totalPages-1){
            setPage(page+1);
            console.log(page);
            window.scrollTo(0,0);
        }
    }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col mt-4 p-2 md:p-8">
        <Slide linkOn={false} boxStyle="gap-8" stylish="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12" itemStyle={itemStyle} slideTitle="Latest News" link={""} items={news} linkTitle=""></Slide>
        <Wheel prevFunc={prevFunc} nextFunc={nextFunc}></Wheel>
    </div>
    </>
  )
}

