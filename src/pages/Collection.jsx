import { useEffect, useState } from "react"
import {v4 as uuid}  from 'uuid'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const collectionsList= ()=>{
    const [collections,setCollection ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        fetch('https://inventory-karim.fly.dev/collection/api').then((data)=>{
           return data.json()    
        }).then((data)=>{
            setCollection(data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {collections,error,loading}
}
export default function Collection(){
    const {collections,error,loading} =collectionsList()
    if(error) return <h1>error</h1>
    if(loading) return <div className=" text-center"><h1>loading</h1></div>
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
      <img className="w-screen lg:h-[100vh]"
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
        <main className="lg:px-28 px-3">




        
            <section className="lg:h-[85vh] ">
               <h1 className="lg:text-29xl py-16 text-[#3B3B3B] lg:text-center">build your wardrobe with the  basics
                and start mixing and matching
                show your personality</h1>
            
            </section>
            <h1 className="text-center  font-light pb-16 text-17xl text-[#3C3C34]">collections</h1>
              <section className="flex flex-wrap justify-center">
                {  collections.collections.map(collection=>
                
               ( <article className="relative lg:w-[22vw] m-5" key={uuid()}>  
                  <Link role="button" to={`/collection/${collection._id }/edit `} className="absolute  right-0 block py-2 px-3 no-underline font-light bg-[#3C3C34] text-[#F5F5F5]">Edit</Link>         

                  <Link to={`/collection/${collection._id}`}>
                        <img className="lg:h-full lg:w-full h-[40vh] w-[60vw] " 
                        src={collection.src} 
                        alt={collection.name}/>               
                        <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] bottom-0 left-0 flex w-full justify-center items-center ">
                            <Link role="button" to={`/collection/${collection._id }`} className=" block py-2 no-underline font-light text-[#F5F5F5]">{collection.name }</Link>         
                        </div>
                      </Link> 
                </article>)
                 )}
              </section>
                </main>
                <Footer/>
        </div>
    )
}
