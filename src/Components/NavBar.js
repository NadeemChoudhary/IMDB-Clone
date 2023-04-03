"use client"
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation'
function NavBar() {
    const Route = [
        {
            path: '/?gener=top_rated',
            name: 'Top Rated'
        },
        {
            path: '/?gener=popular',
            name: 'Most Popular'
        }
    ];
    const search = useSearchParams();
    const param = search.get('gener') ? search.get('gener')  :"top_rated";
    return (
        <div className='text-xl p-4 text-center text-white'>
            <Link href={'/?gener=top_rated'} className={`m-4 hover:text-amber-600  ${param && param === 'top_rated' && "text-amber-600  underline underline-offset-8 "}`} >Top Rated</Link>
            <Link href={'/?gener=popular'} className={`m-4 hover:text-amber-600 ${param && param === 'popular' && "text-amber-600 underline underline-offset-8"}`} >Most Popular</Link>
        </div>
    )
}

export default NavBar