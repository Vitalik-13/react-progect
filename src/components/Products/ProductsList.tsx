import { Grid, Typography } from '@mui/material'
import ProductsArray from 'utils/ProductsArray'
import ProductListItem from './ProductListItem'
type Props = { addTocard: (count: number, price: number) => void }
const ProductsList = ({ addTocard }: Props) => {
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
                    ({
                        id,
                        productTitle,
                        productsDscription,
                        productType,
                        productsFeatures,
                        price,
                        img,
                    }) => (
                        <Grid item xs={12} sm={4} key={id}>
                            <ProductListItem
                                addTocard={addTocard}
                                img={img}
                                productTitle={productTitle}
                                productsDscription={productsDscription}
                                productType={productType}
                                productsFeatures={productsFeatures}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
