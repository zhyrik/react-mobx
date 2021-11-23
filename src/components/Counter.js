import { observer } from 'mobx-react-lite'
import React from 'react'

import counter from '../store/counter'

const Counter = observer(() => {
    console.log('counter')
    return (
        <div>
            
            Counter {counter.count}
            <hr />
            <button onClick={() => counter.increment()}>add</button>
            <button onClick={() => counter.decrement()}>sub</button>
        </div>
    )
})

export default Counter