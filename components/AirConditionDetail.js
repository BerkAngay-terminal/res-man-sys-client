import { useState } from 'react'
import { Switch } from '@headlessui/react'
import classNames from '../lib/dynamicStyling'

function AirConditionDetail({ title, description, degree }) {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className='flex flex-col items-center space-y-5'>
            <Switch.Group as="div" className="flex items-center justify-between w-full">
                <span className="flex flex-grow flex-col">
                    <Switch.Label as="span" className="text-sm font-medium text-gray-300" passive>
                        {title}
                    </Switch.Label>
                    <Switch.Description as="span" className="text-sm text-gray-500">
                        {description}
                    </Switch.Description>
                </span>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                        enabled ? 'bg-green-500' : 'bg-gray-600',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                    />
                </Switch>
            </Switch.Group>

            <div>
                <p className='text-7xl tracking-tight text-gray-200'>{degree}&deg;</p>
            </div>
        </div>
    )
}

export default AirConditionDetail