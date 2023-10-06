import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container sx={{ padding: '0 40px' }}>
            <Home />
        </Container>
    )
}
export default Main
