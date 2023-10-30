import Image from "next/image"
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="flex mx-4 mt-4 items-center justify-between">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Image src="./logo.svg" alt="logo" height={25} width={75} />
                    <div className="flex gap-2 md:text-md font-medium ">
                        <Link className="hover:underline-offset-2 hover:underline" href="./">Feedback</Link>
                        <Link className="hover:underline-offset-2 hover:underline" href='./'>Simplify</Link>
                        <Link className="hover:underline-offset-2 hover:underline" href='./'>Explain</Link>
                    </div>
                </div>
                <div>
                    <button className="text-md font-medium border-2 border-[#003566] rounded-md px-2 py-1 hover:bg-[#003566] hover:text-white">Login</button>
                </div>
            </div>
        </>
    )
}
