import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartQuantity, selectCartTotal, removeItem, updateQuantity } from './CartSlice.jsx';
import Header from './Header.jsx';
export default function CartItem() {
  const dispatch=useDispatch();
  const items=useSelector(selectCartItems);
  const totalQuantity=useSelector(selectCartQuantity);
  const totalCost=useSelector(selectCartTotal);
  const checkoutDialog=useRef(null);
  return <><Header page="cart"/><main className="cart-page"><p className="eyebrow">YOUR GROWING COLLECTION</p><h1>Shopping Cart</h1><p className="cart-subtitle" aria-live="polite">Total plants: <strong>{totalQuantity}</strong></p>
    {items.length===0?<section className="empty-cart"><span aria-hidden="true">❧</span><h2>Your garden starts here.</h2><p>Your cart is empty. Explore our collection and find your first plant.</p><a className="primary-button" href="#plants">Continue Shopping →</a></section>:<div className="cart-layout"><div className="cart-items">{items.map(item=><article className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-details"><h2>{item.name}</h2><p>Unit price: ${item.price.toFixed(2)}</p><div className="quantity-control"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}>−</button><span aria-label={`${item.name} quantity`} aria-live="polite">{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}>+</button></div></div><div className="item-total"><strong>${(item.price*item.quantity).toFixed(2)}</strong><small>Item total</small><button type="button" className="delete-button" aria-label={`Delete ${item.name}`} onClick={()=>dispatch(removeItem(item.id))}>Delete</button></div></article>)}</div><aside className="order-summary"><h2>Your order</h2><div><span>Total plants</span><strong>{totalQuantity}</strong></div><div className="total-row"><span>Total cost</span><strong aria-live="polite">${totalCost.toFixed(2)}</strong></div><button className="primary-button" type="button" onClick={()=>checkoutDialog.current.showModal()}>Checkout →</button><a className="continue-link" href="#plants">← Continue Shopping</a><p>Review your plants and adjust quantities before checkout.</p></aside></div>}
    <dialog ref={checkoutDialog} aria-labelledby="checkout-title"><span aria-hidden="true">❧</span><h2 id="checkout-title">Coming Soon</h2><p>Checkout is coming soon. Thank you for exploring Paradise Nursery!</p><button className="primary-button" type="button" onClick={()=>checkoutDialog.current.close()}>Keep exploring</button></dialog>
  </main><footer>Paradise Nursery · A little nature, closer to you.</footer></>;
}
