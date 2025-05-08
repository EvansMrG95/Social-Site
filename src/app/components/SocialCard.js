"use client"
import React, {useState} from 'react'

const SocialCard = ({
  name,
  imgAddress,
  postText,
  initialLikeCount,
  initialDislikeCount,
  reccomendedPrice
}) => {


  const [likeCount, setLikeCount] = useState(initialLikeCount || 0)
  const [beenLiked, setBeenLiked] = useState(false)
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount || 0)
  const [beenDisliked, setBeenDisliked] = useState(false)

  const handleLike = () => {
    setLikeCount(likeCount + 1)
    setBeenLiked(true)
}

  const handleDislike = () => {
  setDislikeCount(dislikeCount + 1)
  setBeenDisliked(true)
}


  return (
    <div className='flex flex-col mx-auto w-[75%] outline rounded-lg shadow-2xl p-10 bg-sky-300/70 space-y-5 mb-5'>
        <h1 className='text-3xl font-bold text-start p-5 ml-5 border-b-2 border-gray-300'>{name}</h1>
        <div className='flex justify-between space-x-2'>
          <img src={`${imgAddress}`} className='self-center h-100 w-100 object-scale-down border shadow-xl rounded-xl'></img>
          <p className='text-xl p-5 border shadow-xl rounded-xl'>{postText}</p>
        </div>
        <div className='flex justify-around text-3xl mb-5'>
            <button className='cursor-pointer' onClick={() => handleLike()}>
            👍  Like this product
            </button>
          <span className="bg-green-300 rounded-xl shadow-xl">{!beenLiked ? `${0}` : `${likeCount}`} Likes</span>
          <button className='cursor-pointer' onClick={() => handleDislike()}>
            👍  Dislike this product
            </button>
          <span className="bg-red-300 rounded-xl shadow-xl">{!beenDisliked ? `${0}` : `${dislikeCount}`} Dislikes</span>
        </div>
        <div className='flex justify-around'>
          <p className='text-3xl text-center'>RRP: £{reccomendedPrice}</p>
          <p className='text-3xl text-center'>{likeCount > 20 ? `${"This item is hot! 🔥"}` : `${"New item 🌟"}`}</p>
        </div>
    </div>
  )
}

export default SocialCard



//const image = imbb.com/12354325
//<img src={`${image}`} className="col-start-1 row-span-3 h-[100px] w-[100px]"></img>


/*
import React from 'react'

const Todoitem = ({title, completed, description, id, handleUpdate}) => {
    return (
        <div className={completed ? "bg-green-200" : "bg-red-200"}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{completed ? "Completed" : "Not Completed"}</p>
            <button onClick={() => handleUpdate(id)}>
                {completed ? "Mark as not completed" : "Mark as completed"}
            </button>
        </div>
    )
}

export default Todoitem
*/




