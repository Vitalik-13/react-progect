import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    productTitle: string
    productsDscription: string
    productType: string
    productsFeatures: string
    productsPrice: number
    img: string
}
const ProductListItem = ({
    productTitle,
    productsDscription,
    productType,
    productsFeatures,
    productsPrice,
    img,
}: Props) => {
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
                    Price: <strong>${productsPrice}</strong>
                </div>
                <CardActions className="buttons-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
                <div className="product-qantiti">
                    <Button variant="outlined">+</Button>
                    <TextField size="small" value={1} />
                    <Button variant="outlined">-</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
