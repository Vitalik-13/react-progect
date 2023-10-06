import { Typography } from '@mui/material'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginTop: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List of products
            </Typography>
        </>
    )
}
export default ProductsList
