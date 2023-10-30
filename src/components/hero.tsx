import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className='h-screen flex justify-center items-center aling-center text-center'>
                <div className='mb-10'>
                    <h3 className=''>
                        413 team will help you study effectively
                    </h3>
                    <h1 className='text-5xl tracking-tight mt-3 mb-3 font-extrabold'>
                        YOUR <span className='text-[#5A6AE1]'>NEW</span> STEP TO <br></br>
                    </h1>
                    <h1 className='text-5xl tracking-tight mb-5 font-extrabold'>
                        <span className='text-[#5A6AE1]'>PRODUCTIVE</span> FUTURE

                    </h1>
                    <h3 className='mb-5'>
                        Change experience and innovate your studying process
                    </h3>
                    <Link href='./feedback'><button className='text-white bg-[#5A6AE1] border-2 border-[#5A6AE1] rounded-md px-6 font-medium py-1 hover:bg-white hover:text-[#5A6AE1]'>Explore</button></Link>
                </div>
            </div>
        </>
    )
}




