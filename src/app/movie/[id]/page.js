import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
// import csss from '../../movie.page.module.css'
export default async function SingleData({ params }) {
    // console.log(params.id, 'querys')
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1cb845cc55dd460ae0d5f6c75731b7c3`);
    // console.log(data.genres)
    let ShowCategory = []
    const category = data.genres.forEach(element => {
        ShowCategory.push(element.name);
    });
    // console.log(ShowCategory)
    return (
        <div className='max-w-5xl sm:py-4 m-auto text-white'>
            <div className='flex '>
                <div className=' overflow-hidden border border-transparent rounded-md'>
                    <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} width="500" height="300"
                        alt="movie images"
                    />
                </div>
                <div className='sm:px-4 '>
                    <div className=' text-2xl font-medium'>{data.original_title}</div>
                    <div className='mt-2'>
                        {ShowCategory.map((res) => (
                            <span className='border-r-2 px-4  ' key={res}>{res}</span>
                        ))}
                    </div>
                    <div className='pt-5 text-sm text-stone-400'>
                        {data.overview}
                    </div>
                    <div className='pt-2 text-xs text-gray-400'>
                        Release :- {data.release_date}
                    </div>
                    <div className='pt-2 text-xs text-gray-400'>
                        Rating :- {Math.floor(data.vote_average)}/10
                    </div>
                    <div className='pt-2 text-xs text-gray-400 flex items-center'>
                        Popular :- {Math.floor(data.popularity)}<FcLike className='ms-2'/>
                    </div>
                    <button className=' mt-4 bg-amber-700 px-5 py-2 rounded-full flex items-center justify-between w-36'>Watch Now <BsPlayCircleFill /></button>
                </div>
            </div>
        </div>
    )
}

