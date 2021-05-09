import ParkingGrid from '../components/ParkingGrid'

const Home = () => {
  return (
    <div className='bg-gray-200  h-screen'>
      <div className="mb-20 pt-8">
        <h2 className="text-2xl text-center font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate">
          Parqueo UNITEC
        </h2>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='self-center'>
          <ParkingGrid />
        </div>
      </div>
    </div>
  )
}

export default Home