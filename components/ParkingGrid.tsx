import { useState } from 'react'

const ParkingGrid = () => {
  const [_parkingLot, _setParkingLot] = useState([{
    id: 1,
    lot: 'A1',
    isOccupied: true
  }, {
    id: 2,
    lot: 'A2',
    isOccupied: true
  }, {
    id: 3,
    lot: 'B1',
    isOccupied: true
  }, {
    id: 4,
    lot: 'B2',
    isOccupied: true
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
    <ul className="grid grid-cols-2 gap-6">
      {_parkingLot.map((_lot) => (
        <li key={_lot.id} onClick={() => onClick(_lot.id)}
          className={`col-span-1 flex flex-col text-center rounded-lg shadow hover:shadow-xl cursor-pointer divide-y divide-gray-200 transition duration-150
          ${_lot.isOccupied ? 'bg-green-300' : 'bg-red-300'}`}
        >
          <div className="flex-1 flex flex-col p-8">
            <div className="flex justify-center pb-4 w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mx-auto rounded-full font-semibold text-4xl sm:text-6xl text-gray-600">
              <h3 className='self-center'>{_lot.lot}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ParkingGrid