import react, {useState, useEffect} from 'react'
import Header from './components/Header';
import Category from './components/Category';
import Filter from './components/Filter';
import Product from './components/Product';
import './App.css';
import Cart from './components/Cart';
function App() {

  let [categories, setCategories] = useState([]);
  let [currCategory, setCurrCategory] = useState('electronics');
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let [startRange, setStartRange] = useState(0);
  let [endRange, setEndRange] = useState(100000);
  let [orgProducts, setOrgProducts] = useState(products);
  let [search, setSearch] = useState('');
  let [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products/categories')
          .then(res=>res.json())
          .then(json=>{
            setCategories(json);
          })
  
    return () => {
      fetchProducts(currCategory);
    }
  }, [])

  const searchProducts = (term) => {
    setSearch(term);
  }

  const changeRange = (type, val) => {
    if(type === 'start'){
      setStartRange(val);
      let filtPrd = orgProducts;
      setProducts(filtPrd.filter(product => (Math.round(product.price) >= Math.round(startRange)) && (Math.round(product.price) <= Math.round(endRange))));
    } else {
      setEndRange(val);
      let filtPrd = orgProducts;
      setProducts(filtPrd.filter(product => (Math.round(product.price) >= Math.round(startRange)) && (Math.round(product.price) <= Math.round(endRange))));
    }
      
      
  }

  const addToCart = (product) => {
    cart.push(product);
    setCart([...cart]);
  }

  const changeCategory = (categoryName) => {
    setSearch('');
    setStartRange(0);
    setEndRange(100000);
    setCurrCategory(categoryName);
    setProducts([]);
    fetchProducts(categoryName);
  }

  const filterProducts = () => {

  }

  const fetchProducts = (category) => {
    fetch('https://fakestoreapi.com/products/category/' + category)
            .then(res=>res.json())
            .then(json=>{
              setProducts(json);
              setOrgProducts(json);
            })
  }
  

  return (
    <div style={{ overflowX: "hidden"  }} id="topOfPage">
    <Header searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } cartItems={ cart } searchProducts={ searchProducts } />
      <div className='row'>
        
        <div className='col-lg-3'>
        <Category cats={ categories } changeCategory={ changeCategory } currCategory={ currCategory } />
        <Filter changeRange={ changeRange } startRange={ startRange } endRange={ endRange } />
        <Cart cartItems={ cart } setCart={ setCart } />
        
      </div>
      <div className='col-lg-9'>
        { (products.length !== 0) ? <>
          

          <div className='row'>
          { (search.length !== 0) ? <>
            {  products.filter(prds => ((prds.title).toLowerCase()).includes((search.toLowerCase())) || ((prds.description).toLowerCase()).includes(search.toLowerCase())  || (Math.round(prds.price).toString().toLowerCase()).includes(search.toLowerCase())).map((prds, index) => (
            <>
              <Product attrs={ prds } addToCart={ addToCart } />
            </>
          )) }
          </> : <>
          {  products.map((elm, index) => (
            <>
              <Product attrs={ elm } addToCart={ addToCart } />
            </>
          )) }
          </> }
          </div>

        </> : <>
          <div className='alert alert-danger m-2'>Please wait fetching { currCategory }</div>
        </> }
      </div>
        </div>
    </div>
  );
}

export default App;
