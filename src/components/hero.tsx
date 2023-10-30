import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className='mt-10 mx-4'>
                <h1 className="font-bold lg:text-4xl text-2xl">
                    SOLAR SYSTEM IS NOT FAR <br className="none lg:block" />
                    AWAY ANYMORE
                </h1>
                <h3 className="font-regular text-xl my-6">
                    Phalanx of Fate will help you to choose your destination
                </h3>
                <Link href="./feedback">
                    <button className="gap-4 flex font-semibold justify-center items-center border-[3px] mt-5 hover:bg-[#003566] border-[#003566] hover:text-white w-32 rounded-md py-2 px-2">
                        <span>Feedback</span>
                    </button>
                </Link>
            </div>
        </>
    )
}




