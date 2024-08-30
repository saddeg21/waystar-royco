export default function Poster({stylish,imgLink,slogan, title, content}:{stylish:string,imgLink:string,slogan:string,title:string,content:string}) : JSX.Element {
  return (
    <div className={`w-full ${stylish}`}>
        <div className="w-full md:w-1/2 flex flex-col my-auto p-12 gap-2">
            <h2 className="text-2xl">{slogan}</h2>
            <h1 className="text-4xl border-b-2 border-black w-fit">{title}</h1>
            <p className="text-lg">{content}</p>
        </div>
        <img src={imgLink} className="w-1/2 hidden md:block"></img>
    </div>
  )
}
