import {v4 as uuidv4} from 'uuid';
import Link from 'next/link';

export default function List({component_id,stylish,elements,element_style}:{component_id:string,stylish:string,elements:Array<Array<string>>,element_style:string}) : JSX.Element {
  return (
    <ul id={component_id} className={`flex flex-row ${stylish}`}>
        {elements.map((element:Array<string>) => <li key={uuidv4()} className={`${element_style}`}><Link href={element[1]}>{element[0]}</Link></li>)}
    </ul>
  )
}