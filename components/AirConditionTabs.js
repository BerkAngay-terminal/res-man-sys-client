import { Tab } from '@headlessui/react'
import classNames from '../lib/dynamicStyling'
import AirConditionDetail from './AirConditionDetail'

function AirConditionTabs() {
    return (
        <Tab.Group>
            <div className='flex flex-col items-center space-y-5 w-full p-2'>
                <Tab.Panels className='w-full p-2'>
                    <Tab.Panel className='text-gray-100'><AirConditionDetail title={'Office'} description={'Air Conditioner'} degree={19} /></Tab.Panel>
                    <Tab.Panel className='text-gray-100'><AirConditionDetail title={'Living Room'} description={'Air Conditioner'} degree={24} /></Tab.Panel>
                    <Tab.Panel className='text-gray-100'><AirConditionDetail title={'Kitchen'} description={'Air Conditioner'} degree={15} /></Tab.Panel>
                </Tab.Panels>
                <Tab.List className='space-x-2'>
                    <Tab className={({ selected }) => classNames(selected ? 'bg-gray-300 border border-gray-400' : 'bg-gray-500 border border-gray-500', 'rounded-full h-2.5 w-2.5')}></Tab>
                    <Tab className={({ selected }) => classNames(selected ? 'bg-gray-300 border border-gray-400' : 'bg-gray-500 border border-gray-500', 'rounded-full h-2.5 w-2.5')}></Tab>
                    <Tab className={({ selected }) => classNames(selected ? 'bg-gray-300 border border-gray-400' : 'bg-gray-500 border border-gray-500', 'rounded-full h-2.5 w-2.5')}></Tab>
                </Tab.List>
            </div>
        </Tab.Group>
    )
}

export default AirConditionTabs