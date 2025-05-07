import React from 'react'
import Link from "next/link"

const navbar = () => {
    return (
        <div className='flex gap-4 p-4 bg-gray-200'>
            <Link href="/">Home</Link>
            <Link href="/add">Add</Link>
        </div>
    )
}

export default navbar