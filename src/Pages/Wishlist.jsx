import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/Slices/wishlistSlice'
import { addToCart } from '../redux/Slices/cartSlice'


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const wishlistRemoveDispatcher = useDispatch()
  const dispatch = useDispatch()

  const handleWishlistCart = (product) => {
    dispatch(addToCart(product))
    wishlistRemoveDispatcher(removeFromWishlist(product.id))
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <Row>
        {
          wishlistArray?.length > 0 ? wishlistArray.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Card className='bg-light text-primary-emphasis shadow m-auto mb-4' style={{ width: '18rem', height: '30rem' }}>
                <Card.Img style={{ height: '250px' }} variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <p>{product.description.slice(0, 60)}</p>
                    <h5>${product.price}</h5>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={() => wishlistRemoveDispatcher(removeFromWishlist(product.id))} variant="danger">Remove</Button>
                    <Button onClick={() => handleWishlistCart(product)} variant="info">Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <div className='text-center'>
            <p>Nothing to display</p>
            <Link to={'/'}>Back To Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist