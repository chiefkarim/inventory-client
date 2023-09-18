import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useParams } from "react-router-dom"

const getData= (method,setLoading,setError,setCollections)=>{
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/collection/${id}/api`
,        {headers:{Authorization:document.cookie,credentials:'include',method:method}}).then((data)=>{
           return data.json()    
        }).then((data)=>{
            setCollections(data)
        }).catch(err=>        { console.log(err)
            setError(err) }       )
        .finally(()=>setLoading(false))

    
    },[])
}
export default function EditCollection(){
  const [collections,setCollections ] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  getData('GET',setLoading,setError,setCollections)
  const navigate = useNavigate()
  const {id}=useParams()
  const [formState,setFormState] = useState({state:'',url:''})
    function handelForm(e){
      setFormState({state:'Please wait while checking your information'})
      e.preventDefault()
      const formData= new FormData(e.currentTarget)
      
     fetch(`http://localhost:3000/collection/${id}/edit/api`,
      {method:'POST',
      headers:{ Authorization:document.cookie,credentials:'include'},
      body:formData})
      .then((data)=>{
                 return data.json()    
              })
      .then((data)=>{
                  if(data.url){
                    setFormState((state)=>{return{...state,url:data.url}})
                  }else{
                    console.log(data)
                    setFormState((state)=>{return{...state,errors:data.errors}})
                  }})
      .catch(err=>     {  console.log('err',err)
         setFormState((state)=>{return{...state,errors:err}})}        )
      .finally(()=>{        
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
<main className="px-28 py-14 ">
    <section >
      {  typeof collections == 'object' && collections?.item ?
        
        <h1>{collections.item.name }</h1>
        : ''
         } 
        <form className="grid gap-10 " id="itemDetails" action="" method="post" multiple onSubmit={(e)=>{handelForm(e)}}>
          
        <label> Name:        
            <input type="text" name="name"  max="100" />
        </label>
      
    

    <label> Description:        
<textarea name="description" id="" cols="30" rows="10"></textarea>     
</label>
    <label> photos:        
      <input className="" type="file" name="src" accept="image/*" />
  </label>
        <div>
       <button type="submit"  className=" w-fit  border-none mr-1 inline py-2 px-3  font-light bg-[#3C3C34] text-[#F5F5F5]">Submit</button>
       {formState != null ? typeof formState?.errors == 'object' ? 
       formState.errors.map((error)=>(<p key={uuid}>{ error.msg}</p>))
          : (<h1>{formState.state}</h1>) : ''}
</div>
</form>
    </section>
</main>
<Footer/>
    </div>)
}