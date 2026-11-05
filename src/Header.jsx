import { useSelector } from 'react-redux';
import { selectCartQuantity } from './CartSlice.jsx';
export function CartIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 4h2l2.4 11h10.8L21 7H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>; }
export default function Header({ page }) {
  const quantity = useSelector(selectCartQuantity);
  return <header className="site-header"><a href="#home" className="brand"><span className="brand-mark" aria-hidden="true">❧</span><span>Paradise Nursery<small>BRING NATURE HOME</small></span></a><nav aria-label="Main navigation"><a href="#home">Home</a><a href="#plants" aria-current={page==='plants'?'page':undefined}>Plants</a><a href="#cart" className="cart-link" aria-label={`Cart, ${quantity} items`} aria-current={page==='cart'?'page':undefined}><CartIcon/><span>Cart</span><span className="cart-count" aria-live="polite">{quantity}</span></a></nav></header>;
}
