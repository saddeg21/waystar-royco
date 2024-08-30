import Link from "next/link";

type StyleProps = {
  "--image-url"?: string;
};

export default function ImagedComponent({bgUrl,imgUrl,title,content,linkContent,link}:{bgUrl:string,imgUrl:string,title:string,content:string,linkContent:string,link:string}) : JSX.Element {
  return (
    <div style={{"--image-url":`url(${bgUrl})`} as React.CSSProperties & StyleProps} className={`bg-[image:var(--image-url)] w-full p-8 md:p-36 flex flex-col md:flex-row gap-8`}>
        <img className="w-[560px] border-[1rem]" src={imgUrl}></img>
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-white bg-black w-fit p-2">{title}</h2>
            <p className="text-xl text-white">{content}</p>
            <Link className="text-white p-4 bg-[#201E43] hover:bg-[#295F98] transition-all w-fit font-bold text-xl" href={link}>{linkContent}</Link>
        </div>
    </div>
  )
}

