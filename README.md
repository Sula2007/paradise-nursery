# Paradise Nursery Shopping Application

A React and Redux Toolkit houseplant shopping application, created for the IBM Developing Front-End Apps with React final project.

**Author:** Sultan Moldash — SE-2405

## Features
- Landing page with an original greenhouse background illustration, company introduction and Get Started button.
- 18 unique plants, organised into three categories with six plants in each category.
- Bundled original SVG thumbnails, names, descriptions and prices.
- Shared navigation on product and cart pages: Home, Plants and Cart.
- Redux shopping cart with addItem, removeItem and updateQuantity reducers.
- Add to Cart buttons disable while the corresponding plant is in the cart.
- Dynamic cart badge displays the total number of plants, including quantities.
- Cart displays unit prices, line totals, total plant count and order total.
- Increase, decrease (remove at zero), delete and Continue Shopping controls.
- Checkout displays a Coming Soon dialog; no payment is collected.
- Responsive layouts and labelled keyboard-accessible controls.

## Run locally
```sh
npm ci
npm run dev
```

## Production build
```sh
npm run build
npm run preview
```
The `dist` directory contains the deployable application. Vite uses a relative asset base, so the build works on a GitHub Pages repository subpath. Navigation uses URL fragments and does not need server rewrites.

## GitHub Pages
The included GitHub Actions workflow builds and deploys the application. In repository Settings → Pages, choose **GitHub Actions** as the source, then run the Deploy Paradise Nursery workflow (or push to main).

## Source map
- `src/App.jsx`: landing page and navigation state
- `src/AboutUs.jsx`: company introduction
- `src/App.css`: landing background and responsive styling
- `src/CartSlice.jsx`: Redux actions, reducers and total selectors
- `src/ProductList.jsx`: 18 plants, categories and add-to-cart controls
- `src/CartItem.jsx`: shopping cart and checkout dialog
- `src/Header.jsx`: shared navigation and live cart badge
- `src/store.js`: Redux store

All botanical SVG illustrations are included in `public/`; no third-party images are needed. Fonts gracefully fall back to Georgia and Arial when offline. This is a course demonstration store.
