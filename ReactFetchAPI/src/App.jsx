import { useEffect,useState } from "react";
import axios from 'axios';




function App() {
  const [product, setProduct] = useState([])

  const api = "https://fakestoreapi.com/products"

  // async function fetchData1(){
  //   try {
  //     const res = await fetch(api)
  //     console.log(res);
  //     const response = await res.json()
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function fetchData2(){
    try {
      const res = await axios.get(api)
      // console.log(res);
      const response = res.data
      console.log(response);

      // set the update value
      setProduct(response)
      
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    fetchData2()
  },[])


  return (
   <>
    {
      product.length > 0 ? (
      product.map((ele,ind)=>{
        return(
          <div key={ind}>
             <h1>{ele.price}</h1>
             <p>Rating: {ele.rating.rate} / 5</p> {/* Product rating */}
             <p>Reviews: {ele.rating.count}</p> {/* Review count */}
          </div>
        )
      })
      ):(
        <p>hello empty</p>
      )
    }

   </>
  )
}

export default App
