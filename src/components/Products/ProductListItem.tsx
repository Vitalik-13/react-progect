import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'

type Props = {
    productTitle: string
    productsDscription: string
    productType: string
    productsFeatures: string
    price: number
    img: string
    addTocard: (count: number, price: number) => void
}

const ProductListItem = ({
    productTitle,
    productsDscription,
    productType,
    price,
    img,
    productsFeatures,
    addTocard,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevSet) => prevSet + 1)
    }
    const onDecrement = () => {
        setCount((prevSet) => prevSet - 1)
    }
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={img} alt="" />
                </div>
                <h4 className="product-title">{productTitle}</h4>
                <p className="product-description">
                    This is {productsDscription}
                </p>
                <div className="product-featuers">Type:{productType}</div>
                <div className="product-featuers">
                    Capacity:{productsFeatures}Gb
                </div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>
                <CardActions className="buttons-wrapper">
                    <Button
                        variant="outlined"
                        onClick={() => addTocard(count, price)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
                <div className="product-qantiti">
                    <Button
                        variant="outlined"
                        onClick={onDecrement}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrement()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
