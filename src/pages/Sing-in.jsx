import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"


export default function SingIn(){
    const [data,setData ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    function authData(){
    
        
            fetch(`http://localhost:3000/log-in/api`,{method:'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: 'admin',password:"tech community" })}).then((data)=>{
               return data.json()    
            }).then((data)=>{
                setData(data)
                console.log('data',data)
                if(typeof data == 'object' && data.accessToken ){
                     document.cookie=`Bearer ${data.accessToken}`
                }
            }).catch(err=>        setError(err)        )
            .finally(()=>{setLoading(false)})
    
        
    
    }
    return(<div  className="m-0 min-h-screen flex flex-col  justify-between tracking-widest bg-[#D7CEB2] font-thin font-helvetica-neue ">

<Nav/>
<main className="px-28 my-10 ">
    <section >
      
        <form className="grid gap-10 " action="" method="post" >
          <label>
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
      
  <button type="button" onClick={authData} className="w-fit">Log in</button>
</form>

    </section>
</main>
<Footer/>
</div>)
}