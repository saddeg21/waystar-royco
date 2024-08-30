import {v4 as uuidv4} from "uuid";

export default function ShelvesMenu({isOpen}:{isOpen:boolean}) : JSX.Element {
const elements = ['Home','Who we are','Our Brands','Investors','News']
  return (
    <ul className={`${isOpen ? "block" : "hidden"} z-50 w-full bg-white absolute right-0 top-[100%] transition-all`}>
        {elements.map((element) => <li key={uuidv4()} className="border-t-[.01rem] border-b-[0.01rem] border-gray p-4 bg-[#F5F5F5]">{element}</li>)}
    </ul>
  )
}