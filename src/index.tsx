import React from 'react'
import ReactDOM from 'react-dom/client'
import { Titel } from './Titel'

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                unde debitis aut!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
                debitis nostrum alias, hic eius qui consequuntur suscipit
                aliquid dolores ab repellat nihil voluptates quibusdam fugit
                consequatur rerum, eveniet tempora officiis.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Titel />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
