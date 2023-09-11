import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
const collectionsList= ()=>{
    const [collections,setCollection ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        fetch('https://inventory-karim.fly.dev/collection/64f04ee8c881d587d6d92e94/api').then((data)=>{
           return data.json()    
        }).then((data)=>{
            setCollection(data)
            console.log('data',data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {collections,error,loading}
}
function Collection(){
    const {collections,error,loading} =collectionsList()
    if(error) return <h1>error</h1>
    if(loading) return <h1>loading</h1>
    return(
        <div>
           {collections.items.map(item=>(<h1 key={uuid()}>{item.name}</h1>))}
        </div>
    )
}
export default Collection