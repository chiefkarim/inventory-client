import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const getData= (method,body)=>{
    const [collections,setCollections ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      
        fetch('https://inventory-karim.fly.dev/item/create/api'
,        {headers:{Authorization:document.cookie,credentials:'include',method:method}},{body:body}).then((data)=>{
           return data.json()    
        }).then((data)=>{
            setCollections(data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {collections,error,loading}
}


export default function CreateItem(){
  const navigate = useNavigate()

    const {collections,error,loading} =getData('GET')
    const [formState,setFormState] = useState({state:'',url:''})
    function handelForm(e){
      setFormState({state:'Please wait while checking your information'})
      e.preventDefault()
      const formData= new FormData(e.currentTarget)
      
     fetch('http://localhost:3000/item/create/api',
      {method:'POST',
      headers:{ Authorization:document.cookie,credentials:'include'},
      body:formData})
      .then((data)=>{
                 return data.json()    
              })
      .then((data)=>{
                  if(data.url){
                    setFormState((state)=>{return{...state,url:data.url}})
                  }})
      .catch(err=>        console.log(err)        )
      .finally(()=>{        
      })
    }
    useEffect(() => {
      if (formState !==null  && formState.url) {
       navigate(formState.url);
      }
    }, [formState.url, navigate]);
    if(error) return <h1>error</h1>
    if(loading) return <div className=" text-center"><h1>loading</h1></div>
  
    return(<div>

<Nav/>
<main className="px-28 py-14 ">
    <section >
      {  typeof collections == 'object' && collections.item ?
        
        <h1>{collections.item.name }</h1>
        : ''
         } 
        <form className="grid gap-10 " id="itemDetails" action="" method="post" multiple onSubmit={(e)=>{handelForm(e)}}>
          
        <label> Name:        
            <input type="text" name="name"  max="100" />
        </label>
        <label> price:        
          <input type="number" name="price" min="3" max="100"/>
      </label>
      <label> quantity:        
        <input type="number" name="stock" min="0" />
    </label>
    <label>
        collection
    <select name="category">
      {   collections.collections.map(collection=>
(<option key={uuid()} value={collection.name}>{ collection.name} </option>)
       ) 
    }
    </select>
</label>
    <label> Description:        
<textarea name="description" id="" cols="30" rows="10"></textarea>     
</label>
    <label> photos:        
      <input className="" type="file" name="src" accept="image/*" multiple/>
  </label>
     
    { typeof collections == 'object' && collections != null && collections.errors ? 
      collections.errors.map(error=>( 
        <span key={uuid()}>

       {error.msg} 
      </span>

    )) : ''
        }
        <div>
       <button type="submit"  className=" w-fit  border-none mr-1 inline py-2 px-3  font-light bg-[#3C3C34] text-[#F5F5F5]">Submit</button>
       {formState != null ? (<h1>{formState.state}</h1>) : '' }
</div>
</form>
    </section>
</main>
<Footer/>
    </div>)
}