import Nav from "./Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom'; 
import { useParams } from "react-router-dom"

const getData= (method,id)=>{
  const [collections,setCollections ] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  let url=''
  if(id){
url=`https://inventory-karim.fly.dev/collection/${id}/edit/api`
  }else{
    //change this to show collection name
url='https://inventory-karim.fly.dev/collection/create/api'
  }
    useEffect(()=>{
        fetch(url
,        {headers:{Authorization:document.cookie,credentials:'include',method:method}}).then((data)=>{
           return data.json()    
        }).then((data)=>{
          console.log(data)
          if(data.status == 403){
            navigate('/log-in')
          }
            setCollections(data)
          }).catch(err=>        {console.log(err)
            
          setError(err)}        )
        .finally(()=>setLoading(false))

    
    },[])
    return{error,loading,collections}
}


export default function CollectionControls({action}){
  const {id} = useParams()
  const {error,loading,collections} =  getData('GET',id || null)
  const navigate = useNavigate()
  const [formState,setFormState] = useState({state:'',url:''})
  

    function handelForm(e,deleted){
      setFormState({state:'Please wait while checking your information'})
      e.preventDefault()
      const formData= new FormData(e.currentTarget)
      let url=''
      if(deleted === 'delete'){
        url=`https://inventory-karim.fly.dev/collection/${id}/delete/api`
      }else if(action == 'edit'){
          url= `https://inventory-karim.fly.dev/collection/${id}/edit/api`
        }else if(action == 'create') {url='https://inventory-karim.fly.dev/collection/create/api'}
     fetch(url,
      {method:'POST',
      headers:{ Authorization:document.cookie,credentials:'include'},
      body:formData})
      .then((data)=>{
        if(data.status == 403){
          navigate('/log-in')
        }
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
     
         setFormState((state)=>{return{...state,errors:[err]}})}        )
      .finally(()=>{  
        if(deleted == 'delete'){
          navigate('/collection')
        }          
      })
    }
    useEffect(() => {
      if (formState !==null  && formState.url) {
       navigate(formState.url);
      }
    }, [formState.url, navigate]);
    if(error) return <h1>errors,{}</h1>
    if(loading === true) return <div className=" text-center"><h1>loading</h1></div>
  
    return(<div>

<Nav/>
<main className="lg:px-28 lg:py-14 px-3 pt-[5rem] ">
    <section >
      {  typeof collections == 'object' && collections.item ?
        
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
       {formState != null ? typeof formState.errors == 'object' ? 
       formState.errors.map((error)=>(<p key={uuid}>{ error.msg}</p>))
          : (<h1>{formState.state}</h1>) : ''}
</div>
</form>
<form className="relative left-20 -top-[3.2rem]" onSubmit={(e)=>{handelForm(e,'delete')}}>
<button type="submit"  className=" w-fit  border-none mr-1 inline py-2 px-3  font-light bg-[#3C3C34] text-[#F5F5F5]">Delete</button>

</form>
    </section>
</main>
<Footer/>
    </div>)
}