import { useState } from 'react'

const ParkingGrid = () => {
  const [_parkingLot, _setParkingLot] = useState([{
    id: 1,
    lot: 'A3',
    isOccupied: false,
    gridStart:'col-start-1 row-start-3'
  }, {
    id: 2,
    lot: 'D2',
    isOccupied: false,
    gridStart:'col-start-4 row-start-2'
  }, {
    id: 3,
    lot: 'B5',
    isOccupied: false,
    gridStart:'col-start-2 row-start-5'
  }, {
    id: 4,
    lot: 'E6',
    isOccupied: false,
    gridStart:'col-start-5 row-start-6'
  }])
  const [_isOccupied, _setIsOccupied] = useState<boolean>(false)

  const onClick = (lotId: number) => {
    const updatedParkingLot = _parkingLot.map(pl =>
      pl.id === lotId
        ? { ...pl, isOccupied: !pl.isOccupied }
        : pl
    );
    _setParkingLot(updatedParkingLot)
  }

  return (
    <ul className="grid grid-cols-6 grid-rows-6 gap-3 cursor-move auto-cols-auto h-[20rem] w-[20rem] sm:h-[35rem] sm:w-[35rem] md:h-[50rem] md:w-[50rem]">
      {_parkingLot.map((_lot) => (
        <li key={_lot.id} onClick={() => onClick(_lot.id)}
          className={`col-span-1 row-span-1 text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${_lot.isOccupied ? 'bg-red-300' : 'bg-green-300'} ${_lot.gridStart}`}
        >
          <div className="">
            <div className="justify-center rounded-full font-semibold text-xl md:text-4xl text-gray-600">
              <h3 className='self-center'>{_lot.lot}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ParkingGrid