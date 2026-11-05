import { useEffect, useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
function getPage() { const hash=window.location.hash; if(hash==='#cart')return 'cart'; if(hash==='#plants'||hash.startsWith('#category-'))return 'plants'; return 'home'; }
export default function App() {
  const [page,setPage]=useState(getPage);
  useEffect(()=>{const navigate=()=>{const next=getPage();setPage(next);if(!window.location.hash.startsWith('#category-')) window.scrollTo(0,0);};window.addEventListener('hashchange',navigate);return()=>window.removeEventListener('hashchange',navigate);},[]);
  if(page==='plants')return <ProductList/>;
  if(page==='cart')return <CartItem/>;
  return <main className="landing"><div className="landing-overlay"/><div className="landing-content"><a className="landing-brand" href="#home"><span aria-hidden="true">❧</span> Paradise Nursery</a><div className="landing-columns"><section className="landing-hero"><p className="eyebrow">GROW A LITTLE HAPPINESS</p><h1>Bring nature<br/><em>home.</em></h1><p>Beautiful plants. Everyday joy.<br/>Your indoor paradise begins here.</p><a className="primary-button get-started" href="#plants">Get Started <span aria-hidden="true">↗</span></a></section><AboutUs/></div><p className="landing-footer">ROOTED IN NATURE. MADE FOR YOUR HOME.</p></div></main>;
}
