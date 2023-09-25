import React from 'react'
import ReactDOM from 'react-dom/client'

// let title = React.createElement(
//     'h1',
//     { id: 'titel', className: 'littel-title' },
//     'Hello world'
// )
let title = (
    <div className="block">
        <h1 className="title">Hello World</h1>
    </div>
)
const list = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
)
let res = (
    <div className="wrapper">
        {title} {list}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{res}</React.StrictMode>)
