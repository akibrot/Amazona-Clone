import "./Cart.scss";
import {FaTrash} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { Remove_From_Cart } from "./redux/actions/actions";
function SingleCart({cartitms,deleteHandeler}) {
  const dispatch=useDispatch()
  return (
    <div className="cartBox">
      <div className="image">
        <img src={cartitms.image} alt=""  />
      </div>
      <div className="right">
        <div className="props">
          <div className="name"><p>{cartitms.name}</p></div>
          <div className="quantity"><p>quantity {cartitms.quantity}</p></div>
          <div className="price"><p>${cartitms.price}</p></div>
        
        </div>
        <div className="delete">
          <FaTrash onClick={()=>deleteHandeler(cartitms.id,cartitms.price)}/>
        </div>
      </div>
     
    </div>
  );
}

export default SingleCart;
