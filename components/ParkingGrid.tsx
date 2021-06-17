import { useMemo, useState } from "react"


const ParkingGrid = ({ busyPositions }) => {

  return (
    <ul className="grid grid-cols-6 grid-rows-6 gap-3 cursor-move auto-cols-auto h-[20rem] w-[20rem] sm:h-[35rem] sm:w-[35rem] md:h-[50rem] md:w-[50rem]">

      <li key={1}
        className={`col-span-1 row-span-1 text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${busyPositions[0] === 1 ? 'bg-red-300' : 'bg-green-300'} col-start-1 row-start-3`}
      >
        <div className="">
          <div className="justify-center rounded-full font-semibold text-xl md:text-4xl text-gray-600">
            <h3 className='self-center'>A3</h3>
          </div>
        </div>
      </li>

      <li key={2}
        className={`col-span-1 row-span-1 text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${busyPositions[1] === 1 ? 'bg-red-300' : 'bg-green-300'} col-start-4 row-start-2`}
      >
        <div className="">
          <div className="justify-center rounded-full font-semibold text-xl md:text-4xl text-gray-600">
            <h3 className='self-center'>D2</h3>
          </div>
        </div>
      </li>

      <li key={3}
        className={`col-span-1 row-span-1 text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${busyPositions[2] === 1 ? 'bg-red-300' : 'bg-green-300'} col-start-2 row-start-5`}
      >
        <div className="">
          <div className="justify-center rounded-full font-semibold text-xl md:text-4xl text-gray-600">
            <h3 className='self-center'>B5</h3>
          </div>
        </div>
      </li>

      <li key={4}
        className={`col-span-1 row-span-1 text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${busyPositions[3] === 1 ? 'bg-red-300' : 'bg-green-300'} col-start-5 row-start-6`}
      >
        <div className="">
          <div className="justify-center rounded-full font-semibold text-xl md:text-4xl text-gray-600">
            <h3 className='self-center'>E6</h3>
          </div>
        </div>
      </li>

    </ul>
  )
}

export default ParkingGrid