import React from 'react'
import ReactDOM from 'react-dom/client'
import Titel from './Titel'
import Content from './content'

const App = () => {
    return (
        <>
            <Titel title="React" year={2020} />
            <Titel title="App" year={1502} />
            <Content
                content1="Привіт Петро як твої справи?"
                // content2="Привіт мої справи чудово, а як твої?"
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
