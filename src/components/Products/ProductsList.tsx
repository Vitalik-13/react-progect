import { Grid, Typography } from '@mui/material'
import ProductsArray from 'utils/ProductsArray'
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
                {ProductsArray.map(
                    (
                        {
                            productTitle,
                            productsDscription,
                            productType,
                            productsFeatures,
                            productsPrice,
                        },
                        index
                    ) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <ProductListItem
                                productTitle={productTitle}
                                productsDscription={productsDscription}
                                productType={productType}
                                productsFeatures={productsFeatures}
                                productsPrice={productsPrice}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
