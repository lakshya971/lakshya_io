import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center gap-7 px-28 rounded-xl'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='flex items-center absolute left-10 bottom-10 border-1 rounded-full border-[#cdea68] px-3 py-1 text-[#cdea68]'>2019-2025</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-6 h-[50vh] w-1/2'>
                <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='flex items-center border-1 border-white rounded-full left-10 bottom-10 absolute px-2 py-1'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                <img className='h-28 w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='flex items-center border-1 border-white rounded-full left-10 bottom-10 absolute px-2 py-1'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>

        </div>
    )
}

export default Cards