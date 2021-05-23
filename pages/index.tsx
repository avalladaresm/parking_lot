import React, { useState } from 'react'
import { Login } from '../components/Login'
import ParkingGrid from '../components/ParkingGrid'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ArrowsExpandIcon, LogoutIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'

const Home = () => {
  const [_user, _setUser] = useState({})
  const [_isUserLoggedIn, _setIsUserLoggedIn] = useState(false)

  return (
    <div className='bg-gray-200 h-screen pb-20'>
      <div className='h-full'>
        {_isUserLoggedIn ?
          <div>
            <div className='absolute right-3 top-2'>
              <button type="button" onClick={() => _setIsUserLoggedIn(false)}
                className="relative inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <LogoutIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Logout
              </button>
            </div>
            <div className="mb-20 pt-8">
              <h2 className="text-2xl text-center font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate">
                Parqueo UNITEC
            </h2>
            </div>
            <div className='flex justify-center'>
              <div className='flex flex-col'>
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={200}
                  defaultPositionY={100}
                >
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <div className='text-center'>
                      <div className="tools space-x-2 mb-5">
                        <button type="button" onClick={zoomIn}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button type="button" onClick={zoomOut}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button type="button" onClick={resetTransform}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <ArrowsExpandIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                      <div className='rounded-lg border-4 border-indigo-700 border-opacity-50 border-double'>
                        <TransformComponent>
                          <ParkingGrid />
                        </TransformComponent>
                      </div>
                    </div>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div> :
          <Login setIsUserLoggedIn={_setIsUserLoggedIn} isUserLoggedIn={_isUserLoggedIn} />
        }
      </div>
    </div>
  )
}

export default Home