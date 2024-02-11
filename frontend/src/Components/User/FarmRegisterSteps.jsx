import React from 'react'
import {Link} from 'react-router-dom'
function FarmRegisterSteps({farmerInfo, farmLocation}) {
  return (
    <div className="flex justify-center items-center pt-5  bg-white">
      
    <div class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
      <ol class="relative z-10 flex justify-between text-sm font-medium text-gray-500">
        {farmerInfo ? (
          <Link to="/farmerRegister" className="float-right">
            <li class="flex items-center gap-2 bg-white p-2">
              <span class="h-6 w-6 rounded-full  bg-blue-600 text-center text-[10px]/6 font-bold text-white">
                1
              </span>

              <span class="hidden sm:block ">Register</span>
            </li>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <li class="flex items-center gap-2 bg-white p-2">
              <span class="h-6 w-6 rounded-full  bg-gray-100 text-center text-[10px]/6 font-bold ">
                1
              </span>

              <span class="hidden sm:block ">Register</span>
            </li>
          </Link>
        )}

        {farmLocation ? (
          <Link to="/farmerLocation" className="float-right">
            <li class="flex items-center gap-2 bg-white p-2">
              <span class="h-6 w-6 rounded-full  bg-blue-600 text-center text-[10px]/6 font-bold text-white">
                2
              </span>

              <span class="hidden sm:block ">Location</span>
            </li>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <li class="flex items-center gap-2 bg-white p-2">
              <span class="h-6 w-6 rounded-full  bg-gray-100 text-center text-[10px]/6 font-bold ">
                2
              </span>

              <span class="hidden sm:block ">Location</span>
            </li>
          </Link>
        )}

      </ol>
    </div>
  </div>
  )
}

export default FarmRegisterSteps