import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import Header from './Header.jsx';

// Each category contains six unique plants. All thumbnails are bundled original SVG illustrations.
export const plantCategories = [
  { name: 'Leafy Favourites', description: 'Statement leaves for your everyday spaces.', plants: [
    {id:'monstera',name:'Monstera Deliciosa',price:28,description:'Bold, split leaves with a tropical feel.'},
    {id:'snake',name:'Snake Plant',price:20,description:'Sculptural upright leaves. An easy-care favourite.'},
    {id:'pothos',name:'Golden Pothos',price:16,description:'Trailing green leaves with golden accents.'},
    {id:'peace',name:'Peace Lily',price:24,description:'Glossy foliage and elegant white blooms.'},
    {id:'rubber',name:'Rubber Plant',price:30,description:'Rich green leaves for a striking corner.'},
    {id:'fern',name:'Boston Fern',price:22,description:'Soft, arching fronds for a lush green look.'},
  ]},
  { name: 'Fragrant & Fresh', description: 'A little scent, a little kitchen inspiration.', plants: [
    {id:'lavender',name:'Lavender',price:18,description:'Purple flower spikes and a familiar floral scent.'},
    {id:'rosemary',name:'Rosemary',price:14,description:'Needle-like leaves with a woody aroma.'},
    {id:'mint',name:'Spearmint',price:12,description:'Freshly scented foliage for a bright windowsill.'},
    {id:'basil',name:'Sweet Basil',price:12,description:'Tender green leaves and a sweet herbal scent.'},
    {id:'jasmine',name:'Jasmine',price:26,description:'Delicate white flowers and a floral fragrance.'},
    {id:'thyme',name:'Lemon Thyme',price:14,description:'Tiny leaves with a gentle citrus aroma.'},
  ]},
  { name: 'Small & Resilient', description: 'Compact plants with plenty of character.', plants: [
    {id:'aloe',name:'Aloe Vera',price:18,description:'A rosette of thick, pointed green leaves.'},
    {id:'jade',name:'Jade Plant',price:20,description:'Rounded succulent leaves on sturdy stems.'},
    {id:'echeveria',name:'Echeveria',price:15,description:'A neat rosette with soft, blue-green tones.'},
    {id:'haworthia',name:'Zebra Haworthia',price:14,description:'Striped, pointed leaves in a small rosette.'},
    {id:'cactus',name:'Golden Barrel Cactus',price:22,description:'A round cactus with golden spines.'},
    {id:'zz',name:'ZZ Plant',price:25,description:'Shiny leaves and an architectural shape.'},
  ]},
];
plantCategories.forEach(category => category.plants.forEach(plant => { plant.image = `./plants/${plant.id}.svg`; }));
export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return <><Header page="plants"/><main className="catalog"><div className="catalog-intro"><p className="eyebrow">YOUR NEXT GREEN COMPANION</p><h1>A little more life<br/>in every room.</h1><p>Discover your favourites. Start your own small paradise.</p></div>
    <nav className="category-links" aria-label="Plant categories">{plantCategories.map((category,index)=><a key={category.name} href={`#category-${index}`}>{category.name}</a>)}</nav>
    {plantCategories.map((category,index)=><section className="plant-category" id={`category-${index}`} key={category.name}><div className="category-heading"><h2>{category.name}</h2><p>{category.description}</p></div><div className="product-grid">{category.plants.map(plant=>{
      const added = cartItems.some(item=>item.id===plant.id);
      return <article className="product-card" key={plant.id}><div className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy"/></div><div className="product-content"><div className="product-title"><h3>{plant.name}</h3><span className="price">${plant.price.toFixed(2)}</span></div><p>{plant.description}</p><button type="button" className="add-button" onClick={()=>dispatch(addItem(plant))} disabled={added} aria-label={added?`${plant.name} added to cart`:`Add ${plant.name} to cart`}>{added?'Added to Cart ✓':'Add to Cart +'}</button></div></article>;
    })}</div></section>)}
  </main><footer>Paradise Nursery · A little nature, closer to you.</footer></>;
}
