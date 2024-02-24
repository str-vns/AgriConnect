import React, { useEffect, useState } from 'react';
import { getToken, getUser } from '../../Utilitys/helpers';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from '../Layout/Header';

const ReviewLog = () => {
  const [loading, setLoading] = useState(true);
  const [farm, setFarm] = useState({});

  
  const getFarm = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/farmer/farm/${getUser()._id}`,
        config
      );
  
      setFarm(res.data);
      console.log(res.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      setLoading(true);
    }
  };

  console.log(getUser()._id)
  

  useEffect(() => {
    getFarm();
  }, []); 

console.log(farm?.farmersloc?.reviews)
  return (
    <div className="flex  h-screen ">
    <div className="w-full bg-white md:w-1/6">
    <Header />
  </div>

  
  <div class="space-y-4 items-center w-full justify-center bg-white overflow-y-scroll p-32 ">
    <h6 className='text-black font-bold text-lg text-center '>Reviews</h6>
    {farm?.farmersloc?.reviews && farm.farmersloc.reviews.map(review => (
          <div className="flex" key={review._id}>
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={review.avatar && review.avatar.url} alt={review.name}/>
      </div>
      <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-black">
        <strong>{review.name}</strong>
        <p class="text-sm">
        {review.comment}
        </p>
        <div className="flex mt-2">
     {review.images && review.images.map((image, index) => (
 <img
  key={index}
   className="mr-2 w-16 h-16 object-cover"
   src={image.url}
   alt={`Review ${index}`}
 />
 ))}
</div>
      
      </div>
    </div>
     ))}
 </div>
    </div>
  );
};

export default ReviewLog;
