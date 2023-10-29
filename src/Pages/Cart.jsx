import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/Slices/cartSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const getCartTotal = () => {
    if (cartArray?.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }
  }

  // Checkout
  const handleCart = () => {
    emptyCart()
    alert("Successfully placed order")
    navigate('/')
  }

  useEffect(() => {
    getCartTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartArray])

  return (
    <div style={{ marginTop: '80px' }} className='ms-3'>
      {
        cartArray?.length > 0 ?
          <div className='row'>
            <div className='col-7'>
              <table className='table table-info'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img height={'100px'} width={'100px'} src={item.thumbnail} alt="" /></td>
                        <td>${item.price}</td>
                        <td><button onClick={() => dispatch(removeFromCart(item.id))} className='btn btn-danger'>Remove</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
            <div className="col-1"></div>
            <div className="col-3 border border-2">
              <h1 className='text-center text-primary py-1'>Cart Summary</h1>
              <h4>Total products : <span>{cartArray?.length}</span></h4>
              <h4 className='mt-2'>Total :<span className='text-danger fw-bolder'>${total}</span></h4>
              <div className='d-grid'>
                <button onClick={handleCart} className='btn btn-success mt-5 m'>Check Out</button>
              </div>
            </div>
          </div>
          : <p className='text-center'>Nothing to Display</p>
      }
    </div>
  )
}

export default Cart