import React from 'react'

const ShoeCard = ( {imgURL, changeBigShoeImage, bigShoeImg} ) => {
    function handleClick(){
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  
  return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1  ${ bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent' } `}  onClick={handleClick} >

        <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4' >
            <img src={imgURL.thumbnail} alt="shoe collection" height={103} width={127} className='object-contain'/>
        </div>
        
       
    </div>
  )
}

export default ShoeCard
