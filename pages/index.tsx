import React, { useState } from 'react'
import { Login } from '../components/Login'
import ParkingGrid from '../components/ParkingGrid'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ArrowsExpandIcon, LogoutIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'
import mqtt from 'mqtt'

const client = mqtt.connect('ws://ioticos.org/mqtt', { port: 8093, username: 'c6p3PVo5pHlfWVv', password: 'R1qfPuEQbTe9IYd', clientId: '2423432', clean: true })
client.setMaxListeners(0)

const Home = () => {
  const [_user, _setUser] = useState({})
  const [_isUserLoggedIn, _setIsUserLoggedIn] = useState(false)
  const [_busyPositions, _setBusyPositions] = useState([0, 0, 0, 0])

  client.once('connect', () => {
    client.subscribe('mbkLfaGEf6lAmhw/P1', { qos: 1 }, (err, granted) => {
      if (err) return
    })
    client.subscribe('mbkLfaGEf6lAmhw/P2', { qos: 1 }, (err, granted) => {
      if (err) return
    })
    client.subscribe('mbkLfaGEf6lAmhw/P3', { qos: 1 }, (err, granted) => {
      if (err) return
    })
    client.subscribe('mbkLfaGEf6lAmhw/P4', { qos: 1 }, (err, granted) => {
      if (err) return
    })
  })

  client.once('message', function (topic, message) {
    const _topic = topic.split('/')[1]
    const pos = [..._busyPositions]
    switch (_topic) {
      case 'P1':
        pos[0] = message.toString() === '1' ? 1 : 0
        break;
      case 'P2':
        pos[1] = message.toString() === '1' ? 1 : 0
        break;
      case 'P3':
        pos[2] = message.toString() === '1' ? 1 : 0
        break;
      case 'P4':
        pos[3] = message.toString() === '1' ? 1 : 0
        break;
    }
    _setBusyPositions(pos)
  })

  return (
    <div className='bg-gray-200 h-screen pb-20'>
      <div className='h-full'>
        {_isUserLoggedIn ?
          <div>
            <div className='absolute right-3 top-2'>
              <button type="button" onClick={() => _setIsUserLoggedIn(false)}
                className="relative inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <LogoutIcon className="sm:-ml-1 sm:mr-3 h-5 w-5" aria-hidden="true" />
                <div className='hidden sm:block'>
                  Logout
                </div>
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
                          <ParkingGrid busyPositions={_busyPositions} />
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