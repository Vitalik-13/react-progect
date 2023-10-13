type Props = {
    totalNumder: {
        totalCount: number
        totalPrice: number
    }
}

const CardHeader = ({ totalNumder }: Props) => {
    return (
        <div>
            <div>{totalNumder.totalCount}</div>
            <div>${totalNumder.totalPrice}</div>
        </div>
    )
}
export default CardHeader
