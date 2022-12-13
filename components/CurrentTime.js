import moment from 'moment/moment';
import { useState } from 'react';

function CurrentTime() {
    const [time, setTime] = useState(moment().format('HH:mm'))

    return (
        <div className='flex space-x-1 items-end'>
            <h2 className='text-5xl font-thin text-gray-100'>{time}</h2>
            <h3 className='text-4xl font-thin text-gray-500'>AM</h3>
        </div>
    )
}

export default CurrentTime;