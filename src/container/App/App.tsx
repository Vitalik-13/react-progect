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
    const addTocard = (count: number, price: number) => {}
    const [productIncard, setProductInCard] = useState<productIncardType>({
        1: 5,
        2: 5,
    })
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productIncard={productIncard} />
            <Main addTocard={addTocard} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
