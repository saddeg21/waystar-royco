import { News } from "@/app/types/types";
import Item from "./Item"
import ItemStyle from "./Item.types"
import Link from "next/link";
import {v4 as uuidv4} from "uuid";

export default function Slide({boxStyle,stylish,itemStyle,slideTitle,link,items,linkTitle,linkOn}:{boxStyle:string,stylish:string,itemStyle:ItemStyle,slideTitle:string,link:string,items:Array<News>,linkTitle:string,linkOn:boolean}) {
  const alt = ["Item 1","Item 2","Item 3","Item 4"];
  const texts = [
    "Waystar Royco’s Investor Day Highlights Strategic Vision and Plans for Living+ Rollout",
    "Kendall Roy and Roman Roy Appointed as Co-CEOs of Waystar Royco",
    "Waystar Royco Mourns the Passing of Logan Roy, Founder and Chief Executive Officer"
  ];
  
  return (
    <div className={boxStyle}>
        <div className="mx-8 flex justify-center md:justify-between">
            <h1 className="tracking-wider text-2xl">{slideTitle}</h1>
            {linkOn ? <h2 className={`text-xl tracking-wider my-auto border-b-2 border-white hover:border-black transition-[50ms] hidden md:block`}><Link href={link}>{linkTitle}</Link></h2> : <></>}
        </div>
        <ul className={stylish}>
          {items.map((item) => (
            <Item key={uuidv4()} itemLink={`/news/${item.id}`} content={item.content} imgSrc={item.imgUrl} imgAlt="" itemStyle={itemStyle}></Item>
          ))}
            
        </ul>
        {linkOn ? <Link className="block md:hidden p-4 bg-[#201E43] text-center text-white hover:bg-[#201000]" href={link}>View All</Link> : <></>}
    </div>
  )
}

{/* 
  <Item itemLink="/news/auc" content={texts[0]} imgSrc="/items/item1.webp" imgAlt={alt[0]} itemStyle={itemStyle} />
            <Item itemLink="/news/auc" content={texts[1]} imgSrc="/items/item2.webp" imgAlt={alt[1]} itemStyle={itemStyle} />
            <Item itemLink="/news/auc" content={texts[2]} imgSrc="/items/item3.webp" imgAlt={alt[2]} itemStyle={itemStyle} />
  */}
