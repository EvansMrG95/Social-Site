import React from 'react'
import Link from "next/link"

const navbar = () => {
    return (
        <div className='sticky top-0 z-50 flex gap-4 p-4 mb-4 bg-gradient-to-r from-blue-sky-700 to-sky-600 text-white shadow-lg rounded-b-lg'>
            <Link href="/">Home</Link>
            <Link href="/userform">Add Product</Link>
        </div>
    )
}
//change
export default navbar;