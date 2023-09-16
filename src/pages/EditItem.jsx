import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Footer from "../components/Footer"
const dataList= ()=>{
    const [data,setData ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        fetch('http://localhost:3000/item/create/api'
,        {headers:{Authorization:document.cookie}},).then((data)=>{
           return data.json()    
        }).then((data)=>{
            setData(data)
            console.log('data',data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {data,error,loading}
}


export default function EditItem(){
    const {data,error,loading} =dataList()
    if(error) return <h1>error</h1>
    if(loading) return <div className=" text-center"><h1>loading</h1></div>

    return(<div>

<Nav/>
<main className="px-28 ">
    <section >
      {  typeof data == 'object' && data.item ?
        
        <h1>{data.item.name }</h1>
        : ''
         } 
        <form className="grid gap-10 " id="itemDetails" action="" method="post" multiple>
          
        <label> Name:        
            <input type="text" name="name"  max="100" />
        </label>
        <label> price:        
          <input type="number" name="price" min="-3" max="100"/>
      </label>
      <label> quantity:        
        <input type="number" name="stock" min="0" />
    </label>
    <label>
        collection
    <select name="category">
      {   data.collections.map(function(collection){ 
<option key={uuid} value={collection.name}>{ collection.name} </option>
       }) 
    }
    </select>
</label>
    <label> Description:        
<textarea name="description" id="" cols="30" rows="10"></textarea>     
</label>
    <label> photos:        
      <input type="file" name="src" accept="image/*" multiple/>
  </label>
     
    { typeof data == 'object' && data != null && data.errors ? 
      data.errors.map(error=>( 
        <span key={uuid}>

       {error.msg} 
      </span>

    )) : ''
        }
      
  <button type="submit">Submit</button>
</form>
<form action="delete" method="post">
  <button>Delete</button>
  </form>
    </section>
</main>
<Footer/>
    </div>)
}