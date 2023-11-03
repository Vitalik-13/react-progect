import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

type Props = {
    addToProductCard: (count: number, id: number) => void
}
const Main = ({ addToProductCard }: Props) => {
    return (
        <Container sx={{ padding: '40px 0 ' }}>
            <Home addToProductCard={addToProductCard} />
        </Container>
    )
}
export default Main
