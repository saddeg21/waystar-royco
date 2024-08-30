import Link from 'next/link';
import ItemStyle from './Item.types';

export default function Item({content,imgSrc, imgAlt,itemStyle,itemLink}:{content:string,imgSrc:string, imgAlt:string, itemStyle:ItemStyle,itemLink:string}) : JSX.Element {
  return (
    <Link href={itemLink}>
    <li className={`${itemStyle["li"]}`}>
          <img className={`${itemStyle["img"]}`} src={imgSrc} alt={imgAlt} />
          <div>
            <h2>{content}</h2>
          </div>  
    </li>
    </Link>
  )
}

/*
              <p>More &rarr;</p>  
 */