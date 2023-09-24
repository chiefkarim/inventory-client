import LogOut from "./Log-Out"
import { useEffect, useState } from "react"

const Controllers =()=>{
    return (<><a role="button" href="/item/create/" className="py-3  lg:p-6  no-underline text-[#F5F5F5]">Create item</a>        
    <a role="button" href="/collection/create/" className="py-3  lg:p-6   no-underline text-[#F5F5F5]">Create collection</a>   
    <LogOut/> </>      )
}
export default function Nav(){
    const [user,setUser ] = useState(null)
  
    useEffect(()=>{
        fetch('https://inventory-karim.fly.dev/',  {method:'POST',
    headers:{ Authorization:document.cookie,credentials:'include'},}).then((data)=>{
       return data.json()    
    }).then((data)=>{
        setUser(data)
    }).catch(err=>       {  return err
       }       )
    .finally(()=>{})
    },[])



    function toggleMobileMenu(){
        const menu=document.querySelector('.mobileMenu')
        menu.className.includes('hidden') ? menu.classList.add('flex') : ''
        menu.classList.toggle('hidden')
    }


    return(<nav className="lg:px-28 absolute lg:static lg:w-auto w-full  top-0  py-2 lg:flex lg:flex-row flex flex-col  justify-between bg-[#3C3C34]">
<a role="button" href="/" className="text-5xl  lg:p-6 py-2 px-3 font-light no-underline lg:min-w-fit text-[#F5F5F5]">E-commerce</a>        
    <div className="mobileMenu hidden  lg:text-5xl lg:flex  w-full  text-center font-thin lg:flex-row  flex-col lg:justify-between ">
        
<a role="button" href="/collection/" className="py-3 lg:p-6  no-underline text-[#F5F5F5]">Collection</a>        
   {user?.username === 'admin' ? <Controllers/> :   <a  role="button" href="/log-in" className=" lg:p-6 py-3   no-underline text-[#F5F5F5]  ">Log in</a>
 }
</div  >
        <a onClick={toggleMobileMenu} className="absolute right-[1rem]  p-2 no-underline text-[#F5F5F5]  lg:hidden flex flex-col justify-between w-[30px] h-[21px]">
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>            
        </a>
</nav>)
}