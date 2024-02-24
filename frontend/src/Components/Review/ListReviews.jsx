import React from 'react'
import Rating from 'react-rating'
function ListReviews({ reviews }) {
  return (
    <div className='bg-white '>
   {reviews && reviews.map(review => (
   <article className="p-6 lg:w-[800px]  lg:ml-[130px] sm:ml-[120px]  text-base  border-t border-black dark:border-black dark:bg-white ">

   <React.Fragment key={review._id}>
        <div>
       <footer key={review.id} className="flex justify-between items-center mb-2">
         <div className="flex items-center">
           <p className="inline-flex items-center mr-3 text-sm  dark:text-black font-semibold ">
             <img
               className="mr-2 w-6 h-6 rounded-full"
               src={review.avatar && review.avatar.url}
               alt={review.name}/>{review.name}</p>

<Rating
     emptySymbol={
       <i className="far fa-star" style={{ color: "gray" }} />
     }
     fullSymbol={
       <i className="fas fa-star" style={{ color: "gold" }} />
     }
     initialRating={review.rating}
     readonly
   />
         </div>
       </footer>
       <p className="text-gray-500 dark:text-black text-start py-2">{review.comment}</p>

       </div>
     </React.Fragment> 
     
     <div className="flex">
     {review.images && review.images.map((image, index) => (
 <img
  key={index}
   className="mr-2 w-16 h-16 object-cover"
   src={image.url}
   alt={`Review ${index}`}
 />
 ))}
</div>

   </article>
   ))}
 </div>
  )
}

export default ListReviews