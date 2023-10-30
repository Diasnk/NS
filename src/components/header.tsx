import Image from "next/image"
import Link from 'next/link'
import {BiSolidGroup} from 'react-icons/bi'


export default function Header() {
    return (
        <>
            <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Link href="./" className="font-bold">
                        FeynApp
                    </Link>
                    <div className="flex md:gap-3 gap-2 md:text-md text-sm font-medium ">
                        <Link className="hover:underline-offset-2 hover:underline" href="./feedback">Feedback</Link>
                        <Link className="hover:underline-offset-2 hover:underline" href='./simplify'>Simplify</Link>
                        <Link className="hover:underline-offset-2 hover:underline" href='./explain'>Explain</Link>
                    </div>
                </div>
                <div className="text-2xl hover:text-[#003566] hover:text-3xl">
                    <BiSolidGroup classname=''/>
                </div>
            </div>
        </>
    )
}
