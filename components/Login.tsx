import { useState } from "react";
import { LoginErrorAlert } from "./LoginErrorAlert";

export const Login = ({ setIsUserLoggedIn, isUserLoggedIn }) => {
  const [_accountNumber, _setAccountNumber] = useState('');
  const [_password, _setPassword] = useState('');
  const [_isAlertVisible, _setIsAlertVisible] = useState(false);

  const users = [{
    accountNumber: '11911223',
    password: 'daniel'
  }, {
    accountNumber: '11841123',
    password: 'gerardo'
  }, {
    accountNumber: '11841069',
    password: 'joab'
  }, {
    accountNumber: '21441033',
    password: 'alejo'
  }, {
    accountNumber: '11841243',
    password: 'josue'
  }, {
    accountNumber: '11841001',
    password: 'sofia'
  }]

  const onLogin = () => {
    window.event.preventDefault()
    users.map(u => {
      (_accountNumber === u.accountNumber) && (_password === u.password) ? setIsUserLoggedIn(true) : _setIsAlertVisible(true)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-16 w-auto"
          src="/logo.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-xl font-bold text-gray-900">Ingresa a tu cuenta</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onLogin}>
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Número de cuenta
              </label>
              <div className="mt-1">
                <input id="accountNumber" name="accountNumber" value={_accountNumber} onChange={(e) => _setAccountNumber(e.target.value)} required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" value={_password} onChange={(e) => _setPassword(e.target.value)} required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {_isAlertVisible && <LoginErrorAlert setIsAlertVisible={_setIsAlertVisible} isAlertVisible={_isAlertVisible} />}
            <div>
              <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ingresar
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
