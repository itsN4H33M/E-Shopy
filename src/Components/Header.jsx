import React from 'react'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const wishlistState = useSelector((state) => state.wishlistReducer)
    const cartState = useSelector((state) => state.cartReducer)

    return (
        <div>
            <Navbar expand="lg" className="bg-light fixed-top">
                <Container>
                    <Navbar.Brand><Link to={'/'}><i className="fa-solid fa-shop text-primary"></i></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link>
                                <Link to={'/wishlist'} className='text-decoration-none p-2 bg-secondary text-white border border-1'>Wishlist<Badge className='ms-1' bg="danger">{wishlistState.length}</Badge></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/Cart'} className='text-decoration-none p-2 bg-secondary text-white border border-1'>Cart<Badge className='ms-1' bg="info">{cartState.length}</Badge></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header