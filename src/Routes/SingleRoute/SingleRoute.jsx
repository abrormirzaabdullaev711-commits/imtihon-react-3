import { products } from "../../mock"
import { useParams } from "react-router-dom"
import Header2 from "../Header2/Header2"
import './SingleRoute.css'
function SingleRoute() {
  const { id } = useParams()

  const item = products.find(item => item.id == id)

  return (
    <div>
        <Header2/>
        <div className="single-container">
        <div className="image"><img src={item.image} alt="rasm" /></div>
     
     <div className="right">
      <h1>{item.name}</h1>
      
      <h2 style={{color:"green",marginTop:"30px"}}>Rs {item.price}</h2>
      <div className="details">
    <select>
    <option>color</option>
    <option>black</option>
    <option>white</option>
    <option>red</option>
    <option>blue</option>
    <option>purple</option>
    </select>
    <select style={{marginLeft: "50px"}}>
      <option>14 inch</option>
      <option>16 inch</option>
      <option>10 inch</option>
      <option>12 inch</option>
      <option>18 inch</option>
    </select>
</div>
<button className="btn">Add</button>
    
   
    </div>
      </div>

      <div className="single-wrapper">
     <div className="description">
      <h2>Descrpiption</h2>
      <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users. <br /> <br /> Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
</p>  </div>
    <div className="features">
      <h1>Features</h1>
      <ul className="single-wrapper-2">
        <li>Free 1 Year Warranty</li>
        <li>Free Shipping & Fasted Delivery</li>
        <li>100% Money-back guarantee</li>
        <li>24/7 Customer support</li>
        <li>Secure payment method</li>
      </ul>
    </div>
</div>
    </div>
  )
}

export default SingleRoute