import ProductsList from 'components/Products/ProductsList'

type Props = {
    addToProductCard: (count: number, id: number) => void
}
const Home = ({ addToProductCard }: Props) => {
    return (
        <div>
            <ProductsList addToProductCard={addToProductCard} />
        </div>
    )
}
export default Home
