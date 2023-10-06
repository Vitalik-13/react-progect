import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        productTitle="Iphone 14 Pro"
                        productsDscription="14"
                        productType=" Phone"
                        productsFeatures="132"
                        productsPrice={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        productTitle="Iphone 13 Pro"
                        productsDscription="13"
                        productType="Phone"
                        productsFeatures="64"
                        productsPrice={900}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        productTitle="Iphone 15 Pro"
                        productsDscription="15"
                        productType="Phone"
                        productsFeatures="512"
                        productsPrice={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
