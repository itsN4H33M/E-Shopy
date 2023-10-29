import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <hr />
            <div className='d-flex flex-column justify-content-center align-items-center flex-wrap' style={{ width: '100%', height: '300px' }}>
                <div className="footer-content d-flex justify-content-evenly w-100 mb-5">
                    <div className="website" style={{ width: '30%' }}>
                        <h4>
                            <i className="fa-solid fa-shop text-primary"></i>{' '}E-Shopy
                        </h4>
                        <h6>Designed and built with all the love in the world by the E-Shopy team with the help of our contributors.</h6>
                        <h6>Code licensed E-Shopy, docs CC BY 1.0.</h6>
                        <h6>Currently v1.0.0.</h6>
                    </div>
                    <div className="links d-flex flex-column">
                        <h4>Links</h4>
                        <Link to={'/'} className='text-decoration-none'>Home</Link>
                        <Link to={'/cart'} className='text-decoration-none'>Cart</Link>
                        <Link to={'/wishlist'} className='text-decoration-none'>Wishlist</Link>
                    </div>
                    <div className="guides d-flex flex-column">
                        <h4>Guides</h4>
                        <Link to={'https://react.dev/'} className='text-decoration-none'>React</Link>
                        <Link to={'https://getbootstrap.com/'} className='text-decoration-none'>Bootstrap</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} className='text-decoration-none'>React Bootstrap</Link>
                    </div>
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <div className='d-flex align-items-center pe-3'>
                            <input class="form-control me-sm-3" type="search" placeholder="Enter your E-mail" wfd-id="id0" />
                            <button type="button" class="btn btn-outline-primary pe-4">Subscribe</button>
                        </div>
                        <div className='d-flex justify-content-evenly fs-4 mt-4'>
                            <Link to={'https://www.linkedin.com/feed/'} className='text-decoration-none'><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to={'https://twitter.com/'} className='text-decoration-none'><i class="fa-brands fa-x-twitter"></i></Link>
                            <Link to={'https://www.instagram.com/'} className='text-decoration-none'><i class="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <p>Copyright @ 2023 E-Shopy. Built with React.</p>
            </div>
        </>
    )
}

export default Footer