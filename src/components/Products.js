import React, {useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


const Products = () => {
const [loading, setLoading] = useState(false); 
const [data, setData] = useState ([]);
const [search, setSearch] = useState ('')

const responsive = {
    superLargeDesktop: {
      // Responsive design for products
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

useEffect (() => {
    setLoading(true);
    axios({
        method:'get',
        url: 'https://fakestoreapi.com/products'
    }).then(res=> {
        console.log(res.data)
        setData(res.data)

    })
    .catch(e=> console.log(e))
    .finally(() => setLoading(false));

},[]);


  return (
    <>

    {/* Product Slider  */}

<Carousel className='slider' responsive={responsive}>
{data.map((product) => (
            <div key={product.id} className='m-carousel'>
            <div><img src={product.image} alt="#" /></div>
            <h6>{product.title}</h6>
            </div>
        ))}
  </Carousel>

  <div className='search'>Search for the product you are interested in
 
  <div>
    <input className='itemsearch' type="text" placeholder='Search Item...' onChange={(e) => setSearch(e.target.value)}></input>
    <button type='submit' onClick={(e) => setSearch(e.target.value) }>Search</button>
    </div>
</div>

    <div className='products-container'>
        {loading && (
        <div>
            {""}
        <h1>Loading...</h1>
        </div>
        )}

        {data.filter((product) => {
          return search.toLowerCase() === '' ? product : product.title.
          toLowerCase().includes(search);
        }).map((product) => (

          
         // Product Card
            <div key={product.id} className='card'>
            <div><img src={product.image} alt="#" /></div>
            <div className='card-description'>
                <h6>{product.title}</h6>
                <h6>{`Price: ${product.price}`}</h6>
                <h6>{`Category: ${product.category}`}</h6>
              
            </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Products
