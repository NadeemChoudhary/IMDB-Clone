import Link from 'next/link'
import React from 'react'
import { FaAccusoft, FaHome } from 'react-icons/fa'
function MenuItems({ address, Icon, Text }) {
    const Routes = [
        {
            name: 'Home',
            icon: <FaHome />,
            path: '/'
        },
        {
            name: 'ABOUT',
            icon: <FaHome />,
            path: '/about'
        },
       
    ]
    return (
        <>  
            <div className='flex '>
            {
                Routes.map((val) => (
                    <Link href={val.path} className='font-medium mx-4 lg:mx-6 hover:text-amber-600 inline' key={val.name}>
                        <div className='lg:hidden sm:inline'>{val.icon}</div>
                        <span className='lg:inline sm:hidden'>{val.name}</span>

                    </Link>
                ))
            }
            </div>
        </>
    )
}

export default MenuItems