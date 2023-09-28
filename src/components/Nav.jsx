import LogOut from "./Log-Out"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { UserLoggedIn } from "../currentUserReducer"
const Controllers =()=>{
    return (<><Link role="button" to="/item/create/" className="py-3  lg:p-6  no-underline text-[#F5F5F5]">Create item</Link>        
    <Link role="button" to="/collection/create/" className="py-3  lg:p-6   no-underline text-[#F5F5F5]">Create collection</Link>   
    <LogOut/> </>)
}
export default function Nav(){
    const {username} =useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
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


    return(<nav className="lg:px-28 absolute lg:static lg:w-auto w-full  top-0  py-2 lg:flex lg:flex-row flex flex-col  justify-between bg-[#3C3C34]">
<Link role="button" to="/" className="text-5xl  lg:p-6 py-2 px-3 font-light no-underline lg:min-w-fit text-[#F5F5F5]">E-commerce</Link>        
    <div className="mobileMenu hidden  lg:text-5xl lg:flex  w-full  text-center font-thin lg:flex-row  flex-col lg:justify-between ">
        
<Link role="button" to="/collection/" className="py-3 lg:p-6  no-underline text-[#F5F5F5]">Collection</Link>        
   {username === 'admin' ? <Controllers/> :  (<div className="py-3 lg:p-6">
   <button className="border-none bg-[#3C3C34]"> <svg width="25px" height="25px" className="Icon Icon--cart relative top-0.5 " role="presentation" viewBox="0 0 17 20" cursor="pointer"><path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="white"></path></svg></button>
     <Link  role="button" to="/log-in" className=" lg:p-6 py-3   no-underline text-[#F5F5F5]  ">Log in</Link>
     </div>)
 }
</div  >
        <Link onClick={toggleMobileMenu} className="absolute right-[1rem]  p-2 no-underline text-[#F5F5F5]  lg:hidden flex flex-col justify-between w-[30px] h-[21px]">
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>            
        </Link>
</nav>)
}