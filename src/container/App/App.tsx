import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}
type totalNumder = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [totalNumder, setTotalNumder] = useState<totalNumder>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addTocard = (count: number, price: number) => {
        setTotalNumder((prevSet) => ({
            totalCount: prevSet.totalCount + count,
            totalPrice: prevSet.totalPrice + count * price,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header totalNumder={totalNumder} />
            <Main addTocard={addTocard} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
