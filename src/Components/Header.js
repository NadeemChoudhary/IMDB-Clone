import MenuItems from "./MenuItems";
import Link from "next/link";
export default function Header() {
    return (
        <>
            <div className="flex flex-row-reverse justify-between py-6 px-10 max-w-8xl" >
                <div>
                    <MenuItems />
                </div>
                <div>
                    <Link href={'/'}>
                        <h2 className='text-2xl'>
                            <span className="font-bold bg-amber-500 rounded-lg px-4 py-2 text-black">IMDB</span>
                            <span className="ms-1">clone</span>
                        </h2>
                    </Link>
                </div>
            </div>
        </>
    )
}
