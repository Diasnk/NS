import Image from "next/image"
import Link from 'next/link'
import {BiSolidGroup} from 'react-icons/bi'


export default function Header() {
    return (
        <>
            <div className="flex mx-6 mt-4 items-center justify-between">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Link href="./">
                        <Image src="./logo.svg" alt="logo" height={25} width={75} />
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
