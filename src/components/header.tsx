import Image from "next/image"
import Link from 'next/link'

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
                <div>
                    <button className="md:text-md text-sm font-medium border-2 border-[#003566] rounded-md px-2 py-1 hover:bg-[#003566] hover:text-white">Login</button>
                </div>
            </div>
        </>
    )
}
