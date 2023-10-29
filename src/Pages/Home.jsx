import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/Slices/wishlistSlice';
import { addToCart } from '../redux/Slices/cartSlice'


function Home() {
  const products = useFetch("https://dummyjson.com/products")
  console.log(products);

  const wishlistAddDispatcher = useDispatch()
  const dispatch = useDispatch()


  return (
    <div style={{ marginTop: '80px' }}>
      <Row>
        {
          products?.length > 0 ? products.map((product, index) => (
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
                    <Button onClick={() => wishlistAddDispatcher(addToWishlist(product))} variant="danger">Wishlist</Button>
                    <Button onClick={()=>dispatch(addToCart(product))} variant="info">Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p>Nothing to display</p>
        }
      </Row>
    </div>
  )
}

export default Home