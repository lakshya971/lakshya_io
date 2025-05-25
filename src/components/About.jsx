import React from 'react'

function About() {
    return (
        <div className='w-full p-20 rounded-tl-2xl rounded-tr-2xl py-20 text-black bg-[#cdea68]'>
            <h1 className='font-[Neue Montreal] text-[4vw] leading-[4.5vw] tracking-tighter'>
                Ochi is a strategic presentation agency for forward-thinking businesses that need
                to raise funds, sell products, explain complex ideas,
                and hire great people.</h1>

            <div className='w-full border-t-2 mt-9 border-zinc-700'>
                <div className='flex gap-90 items-center'>
                    <div className='question -mt-30 text-xl'>What you can expect:</div>
                    <div className='answer w-[20vw] mt-20 '>
                        <div className='ans text-xl tracking-tighter'>

                            We partner with the companies and startups who make the world go round —
                            they drive the net-zero economy, revolutionize crypto treasury management,
                            build photonic chips, and open Michelin-starred restaurants.

                            We believe the mix of strategy and design with a bit of coffee is what
                            makes your message clear, convincing, and captivating.
                        </div>
                    </div>
                    <div>
                        <ul className='underline underline-offset-3 text-xl'>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Behance</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-screen flex gap-5 bg-[#cdea68] pt-10 mb-[-130px] mt-18 border-t-2 border-zinc-700'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold '>Our Approach :</h1>
                    <button className='flex uppercase gap-10 items-center px-10 py-5 bg-zinc-900 mt-8 rounded-full text-xl text-white'>Read More
                        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[65vh] bg-red-500 rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className='h-[65vh] rounded-xl' />
                </div>
            </div>
        </div>


    )
}

export default About