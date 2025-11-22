// import { useState } from 'react'
function Home(){
    return (
        <>
        <div className="bg-white min-h-screen w-full"> 
            <header className="bg-gradient-to-b from-[#2c1c12] to-[#000000] text-white shadow-md border-b border-black">
                <div className="flex items-center justify-between px-4 sm:px-10 md:px-20 lg:px-40 py-4">
                    <a href="#" className="flex flex-row items-center gap-2">
                        <img
                            src="./assests/logo.jpg"
                            alt=""
                            className="h-10 w-auto"
                        />
                        <span className="text-lg font-bold text-white">Туршилтын веб сайт</span>
                   </a>

                </div>
            </header>
        </div>
        </>
    );
}

export default Home;