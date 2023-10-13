import ProductsList from 'components/Products/ProductsList'

type Props = {
    addTocard: (count: number, price: number) => void
}
const Home = ({ addTocard }: Props) => {
    return (
        <div>
            <ProductsList addTocard={addTocard} />
        </div>
    )
}
export default Home
