import Link from "next/link"
import { TbMailFilled } from "react-icons/tb";

export default function Footer() : JSX.Element {
  return (
    <footer className="flex flex-col bg-[#201E43] w-full p-8 gap-6">
        <div className="flex flex-row justify-between">
            <div className="my-auto flex flex-col gap-4">
                <img className="w-72 md:w-96" src="waystar-royco-logo_transparent.png"></img>
                <div className="flex justify-center gap-4 text-white my-auto"><TbMailFilled size={36} className="my-auto"/><p className="text-xl my-auto">example@domain.com</p></div>
            </div>
            <div className="p-4">
                <ul className="text-white text-md gap-6 flex flex-col">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="https://wikipedia.com">Our History</Link></li>
                    <li><Link href="/executives">Executive Team</Link></li>
                    <li><Link href={"/board-of-directors"}>Board of Directors</Link></li>
                </ul>
            </div>
            <div className="p-4">
                <ul className="text-white text-md gap-6 flex flex-col">
                    <li><Link href="/investors">Investors</Link></li>
                    <li><Link href="/performance">Stock Performance</Link></li>
                    <li><Link href="/earnings">Earnings</Link></li>
                    <li><Link href="/corporate">Corporate Governance</Link></li>
                </ul>
            </div>
            <div className="p-4">
                <ul className="text-white text-md gap-6 flex flex-col">
                    <li><Link href="/brands">Our Brands</Link></li>
                    <li><Link href="/latest-news">Latest News</Link></li>
                    <li><Link href="/career">Note to Visitors</Link></li>
                    <li><Link href="/kvkk">Privacy Statement</Link></li>
                </ul>
            </div>
            <div></div>
        </div>
        <hr></hr>
        <div className="text-white flex justify-between">
            <p>Totally for fun • Not affiliated with WarnerMedia Studios or Home Box Office, Inc.</p>
            <p>© 2021 Waystar Royco</p>
        </div>
    </footer>
  )
}
