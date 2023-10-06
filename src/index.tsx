import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App/App'

const rootElement = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
