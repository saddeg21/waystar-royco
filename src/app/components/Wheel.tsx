import { MouseEventHandler } from "react";

export default function Wheel({prevFunc,nextFunc}:{prevFunc:MouseEventHandler<HTMLLIElement>,nextFunc:MouseEventHandler<HTMLLIElement>}) : JSX.Element {
    return (
    <div className="w-full flex mt-4">
        <ul className="flex flex-row mx-auto gap-4">
            <li className="p-2 text-center text-4xl rounded-md text-white bg-black hover:cursor-pointer hover:bg-[#555] transition-[50ms]" onClick={prevFunc}>&larr;</li>
            <li className="p-2 text-center text-4xl rounded-md text-white bg-black hover:cursor-pointer hover:bg-[#555] transition-[50ms]" onClick={nextFunc}>&rarr;</li>
        </ul>
    </div>
  )
}

