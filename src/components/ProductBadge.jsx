import React from 'react'

const ProductBadge = ({badge}) => {
    if(badge==="choice"){
        return(
            <span className='text-xs xl:text-sm 
            bg-slate-800
            text-white p-1'>
                Amazon's<span className=' gap-1 text-orange-400'>{" Choice"}</span>
            </span>
        
        )

    }
    else if(badge==="seller"){
        return(
            <span className='text-xs xl:text-sm
             bg-orange-500 text-white p-1'>#1 Best Seller</span>
        )
        
    }
    else if(badge==="limited"){
        return(
            <span  className='text-xs xl:text-sm
            bg-orange-500 text-white p-1'>Limited TIme Deal</span>
        )
    }
  return (
    <div></div>
  )
}

export default ProductBadge;