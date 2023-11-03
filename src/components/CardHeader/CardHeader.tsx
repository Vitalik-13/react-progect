type Props = {
    productIncard: {
        [id: number]: number
    }
}

const CardHeader = ({ productIncard }: Props) => {
    return (
        <div>
            {Object.keys(productIncard).map((productId) => (
                <div key={productId}>
                    {productId}:{productIncard[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CardHeader
