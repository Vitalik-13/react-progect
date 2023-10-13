import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

type Props = {
    addTocard: (count: number, price: number) => void
}
const Main = ({ addTocard }: Props) => {
    return (
        <Container sx={{ padding: '40px 0 ' }}>
            <Home addTocard={addTocard} />
        </Container>
    )
}
export default Main
