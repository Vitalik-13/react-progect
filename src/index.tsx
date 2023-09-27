import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Main title</h1>
}
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
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
