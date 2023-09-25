import React from 'react'
import ReactDOM from 'react-dom/client'

let title = React.createElement(
    'h1',
    { id: 'titel', className: 'littel-title' },
    'Hello world'
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{title}</React.StrictMode>)
