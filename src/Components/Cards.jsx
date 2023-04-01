import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
function Cards({ Data }) {
    return (
        <>
            <div className=' relative grid sm:grid-cols-3 md:grid-cols--4 lg:grid-cols-4 max-w-6xl mx-auto' >
                {Data.map((res) => (
                    // <span>{res.original_title}</span>

                    <div className=" bg-transparent  cursor-pointer m-4 sm:shadow-stone-600 border border-transparent rounded  group sm:shadow-md   sm:hover:scale-105 transition-m duration-500   border-slate-600" key={res.id} >
                        <Image src={`https://image.tmdb.org/t/p/original/${res.poster_path}`} className='w-96 h-76'

                            alt="movie images"
                        />
                        <div className='ps-3 pt-4 '>
                            <div className="text-amber-500 text-xl font-bold">
                                {res.original_title}
                            </div>
                            <div className="flex justify-between pe-3 pt-2">
                                <div className="text-slate-200 text-xs ">
                                    {res.release_date}
                                </div>
                                <div className='flex'>
                                    <span className='text-xs '>{res.vote_average}/10 </span><AiFillStar className='text-amber-600' />
                                </div>
                            </div><br />
                            {/* <div className="text-slate-200 text-xm">
                                {res.overview.substring(0, 70)}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards