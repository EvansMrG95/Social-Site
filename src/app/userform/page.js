"use client"
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {

    const [businessObject, setbusinessObject] = useState({
        businessName : "",
        description: "",
        price: "",
        imageUrl: "",
    })

    const handleInputChange = (event) => {

        const {name, value} = event.target
            setbusinessObject({
                ...businessObject,
                [name]: value
            })
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        const localStorageBusiness = localStorage.getItem("business")
        if(!businessObject.businessName || !businessObject.description){
            toast("Please fill out all fields")
            return
        }

        toast("Product submitted!")

        const businessWithId = {
            ...businessObject,
            id: Date.now().toString()
        }

        if(localStorageBusiness){
            localStorage.setItem("business", JSON.stringify([
                ...JSON.parse(localStorageBusiness),
                businessWithId
            ]))
        } else {
            localStorage.setItem("business", JSON.stringify([businessWithId]))
        }
    }

  return (
    <div className='flex flex-col'>
        <h1 className='text-3xl text-center mb-10 text-white'>Add your product in the form below</h1>
        <form onSubmit={handleSubmit} className='bg-gray-200 mx-auto w-[90%] md:w-[70%] p-5'>
            <div className='grid grid-cols-2 justify-items-center space-y-5 mb-6'>
                <div className='md:w-1/3'>
                    <label className='text-gray-500 font-bold pr-4'>
                            Business Name
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input name='businessName' placeholder='please enter the business name' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                </div>
                <div className='md:w-1/3'>
                    <label className='text-gray-500 font-bold pr-4'>
                        Price
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input name='price' placeholder='enter the price' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                </div>                    
                <div className='md:w-1/3'>
                    <label className='text-gray-500 font-bold pr-4'>
                        Description
                    </label>
                </div>
                <div className='md:w-2/3'>
                        <input name='description' placeholder='Product/Business description' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                </div>                   
                <div className='md:w-1/3'>
                    <label className='text-gray-500 font-bold pr-4'>
                            Image URL
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input name='imageUrl' placeholder='please enter image of product' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                </div>
                <button type="submit" className='cursor-pointer bg-blue-500 p-4'>
                    Save business
                </button>
                <ToastContainer />
            </div>
        </form>
    </div>
  )
}

export default page

/*
"use client"
import React, {useState} from 'react'

const page = () => {

    const [businessObject, setbusinessObject] = useState({
        businessName : "",
        description: "",
        price: "",
        imageUrl: "",
    })


        const {businessName, value} = event.target
        setbusinessObject({
            ...businessObject,
            [businessName]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const localStorageBusiness = localStorage.getItem("business")
        if(!businessObject.title || !businessObject.description){
            alert("Please fill out all fields")
            return
        }

        const businessWithId = {
            ...businessObject,
            id: Date.now().toString()
        }

        if(localStorageBusiness){
            localStorage.setItem("business", JSON.stringify([
                ...JSON.parse(localStorageBusiness),
                businessWithId
            ]))
        } else {
            localStorage.setItem("business", JSON.stringify([businessWithId]))
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>Add a busine</h1>
            <form onSubmit={handleSubmit}>
                <div className='md:flex mb-6'>
                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Business
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='title' placeholder='todo title' className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                </div>
                <div className='md:flex mb-6'>

                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Business Name
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='business name' placeholder='please enter the business name' className='bg-gray-200 border-2 border-gray-200' />
                    </div>

                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Price
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='price' placeholder='enter the price' className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                    
                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Description
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='description' placeholder='todo description' className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                    
                       <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Image URL
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='image url' placeholder='please enter imag' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                </div>
              
                <button type="submit" className='cursor-pointer bg-blue-500 p-4'>
                    Save todo
                </button>
            </form>
        </div>
    )
}

export default page
*/