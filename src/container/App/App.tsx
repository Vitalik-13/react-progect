import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type productIncardType = {
    [id: number]: number
}
const App = (props: Props) => {
    const [productIncard, setProductInCard] = useState<productIncardType>({
        1: 0,
        2: 0,
    })
    const addToProductCard = (id: number, count: number) => {
        setProductInCard((prevState) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productIncard={productIncard} />
            <Main addToProductCard={addToProductCard} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
