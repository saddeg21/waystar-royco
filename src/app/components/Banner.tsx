import Image from "next/image"

export default function Banner({stylish}:{stylish:string}) : JSX.Element {
  return (
    <div className={`w-full flex justify-end animate-insert`}>
        <img alt="Banner" className="hidden md:block" src="/banner.png"></img>
        <img alt="Banner Mobile" className="block md:hidden" src="/banner_mobile_2.jpg"></img>
    </div>
  )
}

