import { observer } from 'mobx-react-lite'
import React from 'react'
import toodo from '../store/toodo'

const Toodo = observer(() => {
    console.log('toodo')
    return (
        <div>
            {toodo.toodos.map(t => (
                <div key={t.id}>
                    
                    <input type="checkbox"  checked={t.complited} onChange={e => toodo.compliteToodo(t.id)}/>
                    <h5>{t.title}</h5>
                    <button onClick={() => toodo.removeToodo(t.id)}>X</button>
                </div>
            ))}
            <button onClick={() => toodo.fetchToodo()}>fetch</button>
        </div>
    )
})

export default Toodo
