import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return <h1>Hello App component</h1>
}
const Two = () => {
    return <h2>Hello world</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <Two />
    </React.StrictMode>
)
