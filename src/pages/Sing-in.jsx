import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { UserLoggedIn } from "../redux/currentUserReducer"

export default function SingIn(){
    const [data,setData ] = useState(null)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function authData(e){

      setData({errors:[{msg:'please wait while checking your information'}]})
      e.preventDefault()
            fetch('https://inventory-karim.fly.dev/log-in/api',  {method:'POST',
            body:new FormData(e.currentTarget)}).then((response)=>{
              if (response.ok) return response.json()
             throw new Error('Something went wrong. please try again')
            }).then((data)=>{
               if(typeof data == 'object' && data.accessToken ){
                     document.cookie=`Authenticate=Bearer ${data.accessToken}; path=/;`
                     dispatch(UserLoggedIn(data.username))
                      navigate('/')
                }
                      setData({errors:data.errors})

            }).catch(err=>       { 
              setData({errors:[{msg:err.message}]}) }       )
            .finally(()=>{
              setError(null)})
    
        
    
    }
    return(<div  className="m-0 min-h-screen flex flex-col  justify-between tracking-widest bg-[#D7CEB2] font-thin font-helvetica-neue ">

<Nav/>
<main className="lg:px-28 px-3 lg:my-10 mt-[10rem]  ">
    <section className="  w-full flex justify-center align-bottom">
      
        <form id='formdataaa' className=" grid-center font-normal grid gap-10 " action="" method="post"  onSubmit={(e)=>{authData(e)}}>
        <label>
            username:
            <input type="text" name="username"/>
          </label>          
          <label>
            Password:
            <input type="password" name="password"/>
          </label>

      
  <button type="submit"  className="w-fit p-2    hover:bg-[#F5F5F5] hover:text-[#3C3C34] lg:p-3  no-underline bg-[#3C3C34] text-[#F5F5F5]">Log in</button>
    { typeof data == 'object' && data != null && data.errors ? 
      data.errors.map(error=>( 
        <span key={uuid}>

       {error.msg} 
      </span>

    )) : ''
        }
</form>

    </section>
</main>
<Footer/>
</div>)
}
