import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
type Props = {
    productTitle: string
    productsDscription: string
    productType: string
    productsFeatures: string
    productsPrice: number
}
const ProductListItem = ({
    productTitle,
    productsDscription,
    productType,
    productsFeatures,
    productsPrice,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">{productTitle}</h4>
                <p className="product-description">
                    This is Iphone {productsDscription}pro
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
            </CardContent>
        </Card>
    )
}
export default ProductListItem
