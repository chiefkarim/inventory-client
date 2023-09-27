import LogOut from "./Log-Out"
import { useEffect, useState } from "react"
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
    console.log('redux',username)
    const dispatch = useDispatch()
     if(username === null){  
        console.log('store initiated')
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
   {username === 'admin' ? <Controllers/> :   <Link  role="button" to="/log-in" className=" lg:p-6 py-3   no-underline text-[#F5F5F5]  ">Log in</Link>
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