import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Menu from 'components/Menu/Menu'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import CardHeader from 'components/CardHeader/CardHeader'
type Props = {
    productIncard: {
        [id: number]: number
    }
}

const Header = ({ productIncard }: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        className="menu-icon"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CardHeader productIncard={productIncard} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
