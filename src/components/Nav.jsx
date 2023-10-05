import LogOut from "./Log-Out"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { UserLoggedIn } from "../redux/currentUserReducer"
import Cart from "./Cart"

const Controllers =()=>{
    return (<><Link role="button" to="/item/create/" className="py-3  lg:p-4  no-underline text-[#F5F5F5]">Create item</Link>        
    <Link role="button" to="/collection/create/" className="py-3  lg:p-4   no-underline text-[#F5F5F5]">Create collection</Link>   
    <LogOut/> </>)
}
export default function Nav(){
    const {username} =useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
    const cart=useSelector(state=>state.cart) 
     if(username === null){  
        fetch('https://inventory-karim.fly.dev/',  {method:'POST',
        headers:{ Authorization:document.cookie,credentials:'include'},}).then((data)=>{
           return data.json()    
        }).then((data)=>{
            if(data.username){
                dispatch(UserLoggedIn(data.username))
            }else{
                dispatch(UserLoggedIn('guest'))
            }
        }).catch(err=>       {  return err
           }       )
        .finally(()=>{
            
        })}
    
    



    function toggleMobileMenu(){
        const menu=document.querySelector('.mobileMenu')
        menu.className.includes('hidden') ? menu.classList.add('flex') : ''
        menu.classList.toggle('hidden')
    }

    function toggleCart(){
       const overlay=document.querySelector('.overlay')
       const shoppingCart=document.querySelector('.shoppingCart')
       if(overlay.className.includes('hidden') && shoppingCart.className.includes('hidden')){
        overlay.classList.add('block');  
        shoppingCart.classList.add('fixed')
        overlay.classList.add('opacity-[.5]') 
       }
       shoppingCart.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
        overlay.classList.toggle('opacity-0')

        overlay.addEventListener("transitionend", () => {
            
 } )

    }
    return(<nav className="lg:px-28 absolute lg:static lg:w-auto w-full  top-0 py-2  lg:flex lg:flex-row flex flex-col  justify-between  bg-[#3C3C34]">
<Link role="button" to="/" className="text-5xl  lg:p-4  py-2 p-4 font-thin no-underline lg:min-w-fit text-[#F5F5F5]">Home</Link>        
    <div className="mobileMenu hidden  lg:text-5xl lg:flex  w-full  text-center font-thin lg:flex-row  flex-col lg:justify-between ">
        
<Link role="button" to="/collection/" className="py-2 lg:py-4  no-underline text-[#F5F5F5]">Collection</Link>        
   {username === 'admin' ?   (<><Controllers/> <div className="py-2 ">
   <button className="border-none bg-[#3C3C34]    w-full lg:w-auto"   onClick={toggleCart}> 
   
   <svg width="25px" height="25px"  className="Icon Icon--cart relative top-0.5 " role="presentation" viewBox="0 0 17 20" cursor="pointer"><path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="white"></path>
   
   </svg>
   <span className="relative  -top-9 left-[51%] lg:left-4 right-0 bg-red-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
        {cart.items.length}
      </span>
   </button>
     </div></>):  (<div className="py-3 lg:p-4">
     <Link  role="button" to="/log-in" className=" lg:p-4 py-3   no-underline text-[#F5F5F5]  ">Log in</Link>
   <button className="border-none bg-[#3C3C34]  lg:mt-0 mt-5   w-full lg:w-auto"   onClick={toggleCart}> 
   
   <svg width="25px" height="25px"  className="Icon Icon--cart relative top-0.5 " role="presentation" viewBox="0 0 17 20" cursor="pointer"><path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="white"></path>
   
   </svg>
   <span className="relative  -top-9 left-[51%] lg:left-4 right-0 bg-red-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
        {cart.items.length}
      </span>
   </button>
     </div>)
 }
</div  >
        <a onClick={toggleMobileMenu} className="border-none bg-transparent  absolute right-[1rem]  p-2 no-underline text-[#F5F5F5]  lg:hidden flex flex-col justify-between w-[30px] h-[21px]">
       
            <span className="absolute -top-1 right-[1%] lg:left-4  bg-red-700  text-white rounded-full flex items-center justify-center"  > {cart.items.length != 0 ? cart.items.length : ''}</span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>   
                     
        </a>
        <div  onClick={toggleCart} className="overlay hidden   cursor-pointer opacity-0 fixed  top-0 left-0 bottom-0 transition-opacity duration-[.3s] ease-in-out right-0 bg-[rgba(0,0,0,.7)] z-10  "></div>
<Cart toggleCart={toggleCart} className=" "/>
</nav>)
}