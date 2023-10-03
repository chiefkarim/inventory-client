import { useEffect,useState } from "react";
import {v4 as uuid} from 'uuid'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const itemsList= ()=>{
    const [items,setItems ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://inventory-karim.fly.dev/collection/${id}/api`).then((data)=>{
           return data.json()    
        }).then((data)=>{
            setItems(data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {items,error,loading}
}
function CollectionItems(){
    const {items,error,loading} =itemsList()
    if(error){ 
        console.log(error)
        return <h1>error</h1>}
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
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w" />
      <source
      media="(min-width: 768px) and (max-width: 991px)"
      sizes="(max-width: 991px) 70vw, 694px"
      srcSet="
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
      ../images/background/clark-street-mercantile-qnKhZJPKFD8-unsplash_d7dfcv_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w" />
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
      
      <div className="relative -top-[100vh] "><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 100vw 100vh" fill="none">
          <rect width="100%" height="100%" fill="url(#paint0_linear_14_6)"/>
          <defs>
          <linearGradient id="paint0_linear_14_6" x1="756" y1="0" x2="756" y2="100vh" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFCDCF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#D7CEB2"/>
          </linearGradient>
          </defs>
          </svg></div>
      </picture>
  
<Nav/>
        <main className="lg:px-28">




        
            <section className="lg:h-[85vh] ">
               <h1 className="lg:text-29xl py-16 text-[#3B3B3B] lg:text-center ">build your wardrobe with the  basics
                and start mixing and matching
                show your personality</h1>
            
            </section>
            <h1 className="text-center  font-light pb-16 text-17xl text-[#3C3C34]">{items.title}</h1>
            <section className="flex flex-wrap justify-center ">
                
            {items.items.map((item)=>
(            <div key={uuid()} className="ProductCard w-60  m-5 h-72 p-5 bg-[#3C3C34] flex-col justify-start items-start inline-flex">
              <div    className="FixedRatioImage  bg-center bg-cover  self-stretch h-[72%] flex-col justify-start items-start flex  w-full object-cover" style={{backgroundImage:`url(${item.src[1]} )` ,backgroundSize:`cover`,backgroundPosition: `center center`}}>
              
              </div>
              <div className="ProductCardContent self-stretch h-20 py-3 flex-col justify-start items-start gap-3 flex">
                <div className="Frame48095622 self-stretch h-8 flex-col justify-start items-start gap-2 flex">
                  <p className="BrandCategory w-36 p-0 m-0 text-zinc-100 text-xs font-light uppercase leading-3 tracking-wider"></p>
                  <p className="ProductName p-0 m-0 self-stretch text-stone-50 text-2xl font-bold">{item.name}</p>
                </div>
                <div className="ProductPrice justify-start items-start gap-2.5 inline-flex">
                  <p className="Price p-0 m-0 text-stone-50 font-light leading-snug">{item.price}$</p>
                </div>
                <div className="flex self-stretch flex-col"> 
                           <Link role="button" to={`/item/${item._id }`} className=" self-end p-1.5 font-light text-[#3C3C34] no-underline bg-[#F5F5F5]">Shop now</Link>        
                </div>
              </div>
            </div>)
            
            ) }
          </section>
                </main>  
<Footer/>
</div>
  )
}

export default CollectionItems