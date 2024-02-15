import React from 'react'
import Rating from 'react-rating'
function ListReviews() {
  return (
    <div className='bg-white '>

   <article className="p-6 lg:w-[800px]  lg:ml-52 text-base  border-t border-black dark:border-black dark:bg-white">

     <React.Fragment >
        <div>
       <footer className="flex justify-between items-center mb-2">
         <div className="flex items-center">
           <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
             <img
               className="mr-2 w-6 h-6 rounded-full"
               src=''
               alt=''/>{}</p>

<Rating
     emptySymbol={
       <i className="far fa-star" style={{ color: "gray" }} />
     }
     fullSymbol={
       <i className="fas fa-star" style={{ color: "gold" }} />
     }
     initialRating=''
     readonly
   />
         </div>
       </footer>
       <p className="text-gray-500 dark:text-gray-400">{}</p>
       </div>
     </React.Fragment> 
     
     <div className="flex">

 <img
   className="mr-2 ml-12 w-16 h-16 object-cover"
   src={''}
   alt={``}
 />

</div>

   </article>

 </div>
  )
}

export default ListReviews