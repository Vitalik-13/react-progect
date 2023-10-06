import Button from '@mui/material/Button'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit" className="nav-link-element">
                Home
            </Button>
            <Button color="inherit" className="nav-link-element">
                About
            </Button>
            <Button color="inherit" className="nav-link-element">
                Payment
            </Button>
            <Button color="inherit" className="nav-link-element">
                Shipping
            </Button>
            <Button color="inherit" className="nav-link-element">
                Cart
            </Button>
        </>
    )
}
export default Menu
