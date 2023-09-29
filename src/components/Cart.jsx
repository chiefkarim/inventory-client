import { useSelector } from "react-redux/es/hooks/useSelector"
import {v4 as uuid} from 'uuid'
import { useDispatch } from "react-redux";
import { itemQuantityDecreased } from "../redux/cartReducer";  
import { itemQuantityIncreased } from "../redux/cartReducer";
import { itemRemoved } from "../redux/cartReducer";
import { clearCart } from "../redux/cartReducer";

export default function Cart({toggleCart}){
    const cart=useSelector(state=>state.cart) 
    const dispatch = useDispatch()

      function removeFromCart(id) {
        if (
          cart.items.filter((item) => {
            if (item.id === id) return item.id;
          }).length > 0
        ) {
            
          dispatch(itemRemoved({ id: id }));
        }
      }
      function increaseQuantity(id) {

        if (
          cart.items.filter((product) => {
            if (product.id === id && product.stock > product.quantity + 1)
              return product.id;
          }).length > 0
        ) {
            const item=cart.items.filter((product) => {
                if (product.id === id) return product
              })[0]
              console.log(item)
              console.log(id)
          dispatch(itemQuantityIncreased({ id: id, stock: item.stock }));
        }
      }
      
      function decreaseQuantity(id) {
        
        if (
          cart.items.filter((item) => {
            if (item.id === id && item.quantity > 1) return item;
          }).length > 0
        ) {
            
          dispatch(itemQuantityDecreased({ id: id }));
        }
      }
      function checkout(){
        dispatch(clearCart())
      }
    return(<div className="shoppingCart hidden w-[60vw] lg:w-[30vw] top-0 right-0 px-[3rem] h-[100vh] z-20 bg-slate-50 translate-x-0 ">
        <section className="flex justify-between">
         <h1>Cart</h1>
         <button onClick={toggleCart} className="border-none bg-transparent hover:cursor-pointer">
            <svg 
              className="w-[15px] h-[15px]"
              role="presentation"
              viewBox="0 0 16 14"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="black"
                fill="none"
                
                fillRule="evenodd"
              ></path>
            </svg>
            </button>
        </section>
        <section className=" overflow-scroll  ">
        {cart.items.map(item=>(<div key={uuid} className="cartItem flex p-2">
            <img className="w-[40%] " src={item.src.replace(/\/v\d+\//g,'/ar_2:1,c_fill/')}/>
<section className="px-1">
<h2 className="m-0 p-0">{item.name}</h2>
<h4 className="m-0 ">{item.price * item.quantity}$</h4>
<button className="inline-block hover:cursor-pointer p-1 m-5 no-underline bg-[#3C3C34] text-[#F5F5F5] border-none" onClick={()=>increaseQuantity(item.id)}>+</button>
<p className="inline-block text-5xl">{item.quantity}</p>
<button className="inline-block hover:cursor-pointer p-1 m-5 no-underline bg-[#3C3C34] text-[#F5F5F5] border-none" onClick={()=>decreaseQuantity(item.id)}>-</button>
<a className="hover:cursor-pointer block   underline font-normal  border-none" onClick={()=>removeFromCart(item.id)}>Remove item</a>
</section>
</div>
        ))}
        </section>
        <section>
            <h1>Total: {cart.total}</h1>
        <button onClick={checkout} className="inline-block hover:cursor-pointer p-3 mr-5 no-underline bg-[#3C3C34] text-[#F5F5F5] border-none" >Check out</button>        
         </section>
    </div>)

}