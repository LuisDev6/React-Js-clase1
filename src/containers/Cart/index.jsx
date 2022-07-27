import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext'
import './style.css'

const Cart = () => {

  const { cart } = useContext(Shop);
  const { removeItem } = useContext(Shop);
  const { setCart } = useContext(Shop);
  const {totalPrice, setTotalPrice} = useContext(Shop);
  const navigate = useNavigate();
  let precioTotal = 0;

  

  return (
  
    <div className='div-cart'>
      <h3>Carrito de compras</h3>
      <>
        {cart.length === 0 ?
          (
            <>
              <p>No hay productos en el carrito</p>
              <button className='btn-cart' onClick={() => navigate('/')}>Seguir Comprando</button>
            </>
          )
          :
          (
            <table className='table-head'>
              <thead>
                <tr>
                  <th>Articulo</th>
                  <th>Foto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>SubTotal</th>
                  <th>Borrar Articulo</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((producto) => {
                  let precioTotalProducto = producto.price * producto.quantity;
                  precioTotal += precioTotalProducto;
                  setTotalPrice(precioTotal);

                  return (
                    <tr key={producto.id} >
                      <td>{producto.title}</td>
                      <td className='centrar'><img src={producto.image} width='50px' alt={producto.tittle} /></td>
                      <td className='centrar'>{producto.quantity}</td>
                      <td className='centrar'>${producto.price}</td>
                      <td className='centrar'>${precioTotalProducto}</td>
                      <td className='centrar'><button className='btn-cart' onClick={() => removeItem(producto.id)}>Eliminar</button></td>
                    </tr>
                          )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className='precio-total'>Precio Total:</td>
                  <td className='centrar precio-total'>${totalPrice}</td>
                </tr>
              </tfoot>
            </table>


          )}
      </>
      <button className='btn-cart' onClick={() => setCart([])}>Limpiar Carrito</button> <button className='btn-cart'>Finalizar Compra</button>
    </div>

  )

}
export default Cart