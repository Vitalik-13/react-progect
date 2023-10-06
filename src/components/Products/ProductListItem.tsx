import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">Iphone 14 Pro</h4>
                <p className="product-description">This is Iphone 14 Pro</p>
                <div className="product-featuers">Type: Phone</div>
                <div className="product-featuers">Capacity: 256Gb</div>
                <div className="product-price">
                    Price: <strong>$1200</strong>
                </div>
                <CardActions className="buttons-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
