import { ShieldExclamationIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'

export const LoginErrorAlert = ({ setIsAlertVisible, isAlertVisible }) => {
  return (
    <div className="rounded-md bg-red-50 p-4" >
      <div className="flex">
        <div className="flex-shrink-0">
          <ShieldExclamationIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">¡Número de cuenta o contraseña incorrecta!</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" onClick={() => setIsAlertVisible(false)}
              className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
            >
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
