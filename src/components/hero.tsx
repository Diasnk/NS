import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className='lg:flex block items-center mt-10 mx-6 justify-between'>
                <div className=''>
                    <h1 className="font-bold lg:text-3xl text-2xl">
                        YOUR NEW STEP TO <br className="none lg:block" />
                        PRODUCTIVE FUTURE
                    </h1>
                    <h3 className="font-regular text-xl my-5">
                        413 team will help you to study effectively
                    </h3>
                    <Link href="./feedback">
                        <button className="gap-4 flex font-semibold justify-center items-center border-[3px] hover:bg-[#003566] border-[#003566] hover:text-white w-32 rounded-md py-2 px-2">
                            <span>Explore</span>
                        </button>
                    </Link>
                </div>

                <div className='lg:mt-0 mt-10'>
                    <Image height={500} width={500} src='./Landingimage.svg' alt='hero'/>
                </div>
            </div>
        </>
    )
}




