import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";


export default function SingIn(){
    const [data,setData ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    function authData(){
    
            fetch(`https://inventory-karim.fly.dev/log-in/api`,{method:'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: 'admin',password:"tech community" })}).then((data)=>{
               return data.json()    
            }).then((data)=>{
                setData(data)
                if(typeof data == 'object' && data.accessToken ){
                     document.cookie=`Bearer ${data.accessToken}`
                     
                      navigate('/')
                    
                }
            }).catch(err=>       {  setError(err) }       )
            .finally(()=>{})
    
        
    
    }
    return(<div  className="m-0 min-h-screen flex flex-col  justify-between tracking-widest bg-[#D7CEB2] font-thin font-helvetica-neue ">

<Nav/>
<main className="sm:px-28 px-3 sm:my-10 mt-[10rem]  ">
    <section className="  w-full flex justify-center align-bottom">
      
        <form className=" grid-center font-normal grid gap-10 " action="" method="post" >
          <label >
            Username:
            <input type="text" name="username"/>
          </label>
          <label>
            Password:
            <input type="password" name="password"/>
          </label>

    { typeof data == 'object' && data != null && data.errors ? 
      data.errors.map(error=>( 
        <span key={uuid}>

       {error.msg} 
      </span>

    )) : ''
        }
      
  <button type="button" onClick={authData} className="w-fit p-2    hover:bg-[#F5F5F5] hover:text-[#3C3C34] sm:p-3  no-underline bg-[#3C3C34] text-[#F5F5F5]">Log in</button>
</form>

    </section>
</main>
<Footer/>
</div>)
}
