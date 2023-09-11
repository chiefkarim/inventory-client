import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
const collectionsList= ()=>{
    const [collections,setCollection ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        fetch('https://inventory-karim.fly.dev/collection/api').then((data)=>{
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
           <picture className="absolute  -z-20">
      <source
      media="(max-width: 767px)"
      sizes="(max-width: 767px) 100vw, 767px"
      srcSet="
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_1_1,c_fill,g_auto__c_scale,w_457.jpg 457w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_1_1,c_fill,g_auto__c_scale,w_643.jpg 643w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"/>
      <source
      media="(min-width: 768px) and (max-width: 991px)"
      sizes="(max-width: 991px) 70vw, 694px"
      srcSet="
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w"/>
      <img className="w-screen h-[100vh]"
      sizes="(max-width: 3500px) 40vw, 1400px"
      srcSet="
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_397.jpg 397w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_653.jpg 653w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_856.jpg 856w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_1034.jpg 1034w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_1227.jpg 1227w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_1326.jpg 1326w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_1400.jpg 1400w"
      src="../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_c_scale,w_1400.jpg"
      alt=""/>
      
      <div className="relative -top-[100vh] "><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 1512 100vh" fill="none">
          <rect width="1512" height="100%" fill="url(#paint0_linear_14_6)"/>
          <defs>
          <linearGradient id="paint0_linear_14_6" x1="756" y1="0" x2="756" y2="100vh" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFCDCF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#D7CEB2"/>
          </linearGradient>
          </defs>
          </svg></div>
      </picture>
  
<Nav/>
        <main className="px-28">




        
            <section className="h-[85vh] ">
               <h1 className="text-29xl py-16 text-[#3B3B3B] ">build your wardrobe with the  basics
                and start mixing and matching
                show your personality</h1>
            
            </section>
            <h1 className="text-center  font-light pb-16 text-17xl text-[#3C3C34]">collections</h1>
            {collections.collections.map(item=>(<h1 key={uuid()}>{item.name}</h1>))}

              <section className="flex flex-wrap justify-center">
                {  collections.collections.map(collection=>
                
               ( <article className="relative w-[22vw] m-5" key={uuid()}>  
                  <a role="button" href={`/collection/${collection._id }/edit `} className="absolute  right-0 block py-2 px-3 no-underline font-light bg-[#3C3C34] text-[#F5F5F5]">Edit</a>        

                  <a href={`/collection/${collection._id}`}>
                        <img className="h-[100%] w-[100%] " 
                        src={collection.src} 
                        alt={collection.name}/>               
                        <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] bottom-0 left-0 flex w-full justify-center items-center ">
                            <a role="button" href={`/collection/${collection._id }`} className=" block py-2 no-underline font-light text-[#F5F5F5]">{collection.name }</a>        
                        </div>
                      </a>
                </article>)
                 )}
              </section>
                </main>
                <Footer/>
        </div>
    )
}
export default Collection