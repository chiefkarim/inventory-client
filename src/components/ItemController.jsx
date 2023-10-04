import Nav from "./Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom'; 
import { useParams } from "react-router-dom";

const getData= (method,setLoading,setError,setCollections,id)=>{
  let url=''
  const navigate = useNavigate()

  if(id){
url=`https://inventory-karim.fly.dev/item/${id}/edit/api`
  }else{
url='https://inventory-karim.fly.dev/item/create/api'
  }
    useEffect(()=>{
        fetch(url
,        {headers:{Authorization:document.cookie,credentials:'include',method:method}}).then((data)=>{
           return data.json()    
        }).then((data)=>{
          if(data.status == 403){
            navigate('/log-in')
          }
            setCollections(data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
}


export default function ItemController({action}){
  const [collections,setCollections ] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {id} = useParams()
  const [formState,setFormState] = useState({state:'',url:''})
  
  getData('GET',setLoading,setError,setCollections,id)
  function handelForm(e,deleted){
  let url=''
    if(deleted === 'delete'){
      url=`https://inventory-karim.fly.dev/item/${id}/delete/api`
    }else if(id){
          url= `https://inventory-karim.fly.dev/item/${id}/edit/api`
        }else {url='https://inventory-karim.fly.dev/item/create/api'}

      setFormState({state:'Please wait while checking your information'})
      e.preventDefault()
      const formData= new FormData(e.currentTarget)
      
     fetch(url,
      {method:'POST',
      headers:{ Authorization:document.cookie,credentials:'include'},
      body:formData})
      .then((response)=>{
        if(response.ok){
          return response.json()
        }else if(response.status == 403){
          navigate('/log-in')
        }
        
        throw new Error('Something went wrong. please try again. ');
      })
      .then((data)=>{
                  if(data.url){
                    setFormState((state)=>{return{...state,url:data.url}})
                  }else{
                    setFormState((state)=>{return{...state,errors:data.errors}})
                  }})
      .catch(err=>     { 
         setFormState((state)=>{return{...state,errors:[{msg:err.message}]}})}        )
      .finally(()=>{  
        if(deleted == 'delete'){
          navigate('/')
        }      
      })
    }
    useEffect(() => {
      if (formState !==null  && formState.url) {
       navigate(formState.url);
      }
    }, [formState.url, navigate]);
    if(error) return <h1>error</h1>
    if(loading === true) return <div className=" text-center"><h1>loading</h1></div>
  
    return(<div>

<Nav/>
<main className="lg:px-28 lg:py-14 px-3 pt-[5rem]">
    <section >
      {  typeof collections == 'object' && collections.item && action == 'edit' ?
        
        <h1>{collections.item.name  }</h1>
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
        <div>
       <button type="submit"  className=" w-fit  border-none mr-1 inline py-2 px-3  font-light bg-[#3C3C34] text-[#F5F5F5]">Submit</button>
       {id ?  <button type="button" onClick={(e)=>{handelForm(e,'delete')}}  className=" w-fit  border-none mr-1 inline py-2 px-3  font-light bg-[#3C3C34] text-[#F5F5F5]">Delete</button> : ''}

       {formState != null ? typeof formState.errors == 'object' ? 
       formState.errors.map((error)=>(<p key={uuid}>{ error.msg}</p>))
          : (<h1>{formState.state}</h1>) : ''}
</div>
</form>

    </section>
</main>
<Footer/>
    </div>)
}

