import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {v4 as uuid} from 'uuid'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const itemDetails= ()=>{
    const [item,setItem ] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://inventory-karim.fly.dev/item/${id}/api`).then((data)=>{
           return data.json()    
        }).then((data)=>{
            console.log(data)
            setItem(data)
        }).catch(err=>        setError(err)        )
        .finally(()=>setLoading(false))

    
    },[])
    return {item,error,loading}
}
export default function Item(){
    const {item,error,loading} =itemDetails()
    function changePreview(newImage){
            
        const preview= document.querySelector(`#preview`)
preview.style.opacity=0
preview.src=newImage.target.src

preview.style.opacity=1

      

    }
    if(error) return <h1>error</h1>
    if(loading) return <div className=" text-center"><h1>loading</h1></div>
    return(
      <div>
    <Nav/>
    <main className="lg:px-28 px-3 ">
        <section className="grid grid-cols-3 grid-rows-3 gap-5 my-[5rem] h-[50vh] lg:h-[60vh]">
            <section className="previewImages stretch w-full h-full lg:grid grid-cols-3 grid-rows-3 col-span-2 row-span-4 gap-5 overflow-scroll">
                <img id="a" onClick={(event)=>{changePreview(event)}} className="col-start-1  col-end-1 h-[70%] lg:h-full w-full" src={item.item.src[0].replace(/\/v\d+\//g,'/ar_2:1,c_fill,g_face/')}/>
                <img id="b" onClick={(event)=>{changePreview(event)}} className="col-start-1 col-end-1 row-start-2 h-[70%] row-end-2 lg:h-full w-full " src={item.item.src[1].replace(/\/v\d+\//g,'/ar_2:1,c_fill,g_face/')}/>
                <img id="c" onClick={(event)=>{changePreview(event)}} className="col-start-1 col-end-1 row-start-3 h-[70%] row-end-3 lg:h-full w-full" src={item.item.src[2].replace(/\/v\d+\//g,'/ar_2:1,c_fill,g_face/')}/>
                <img id="preview"  className="hidden lg:block h-full w-full col-span-2 row-span-3 transition-opacity ease-in-out duration-[3s]" src={item.item.src[0]} />
            </section>
        
<section className="flex flex-col ">
<h1 className="m-0  lg:text-13xl font-light">{ item.item.name}</h1>
<p>{item.item.price}$</p>
<p className="  break-words">
{item.item.description }
</p>
</section>
<section className="  col-start-3 row-start-4 row-end-4 mt-6 relative item.itemDetails-end ">
<a role="button" href={`${item.item._id }/edit`} className="inline-block p-3 mr-5 no-underline bg-[#3C3C34] text-[#F5F5F5]">Edit</a>        
</section>
        </section>

    <h1 className="text-center  font-light pb-12 text-17xl text-[#3C3C34]">collections</h1>
    <section className="grid px-3 justify-center my-10 gap-8 lg:max-h-[60vh] lg:grid-cols-3  lg:w-auto lg:grid-flow-row">
    <article className="relative lg:w-auto w-[70vw] h-[30vh] ">  
        <picture >
            <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
            ../images/collections/the-man-in-the-hat_b23q59_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
            ../images/collections/the-man-in-the-hat_b23q59_ar_1_1,c_fill,g_auto__c_scale,w_598.jpg 598w,
            ../images/collections/the-man-in-the-hat_b23q59_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"/>
            <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 991px) 70vw, 694px"
            srcSet="
            ../images/collections/the-man-in-the-hat_b23q59_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
            ../images/collections/the-man-in-the-hat_b23q59_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w"/>
            <img className="h-[100%] w-[100%]" 
            sizes="(max-width: 3500px) 40vw, 1400px"
            srcSet="
            ../images/collections/the-man-in-the-hat_b23q59_c_scale,w_397.jpg 397w,
            ../images/collections/the-man-in-the-hat_b23q59_c_scale,w_751.jpg 751w,
            ../images/collections/the-man-in-the-hat_b23q59_c_scale,w_1096.jpg 1096w,
            ../images/collections/the-man-in-the-hat_b23q59_c_scale,w_1272.jpg 1272w,
            ../images/collections/the-man-in-the-hat_b23q59_c_scale,w_1400.jpg 1400w"
            src="../images/collections/the-man-in-the-hat_b23q59_c_scale,w_1400.jpg"
            alt=""/>
            
            </picture>
            <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] bottom-0 left-0 flex w-full justify-center items-center bg-">
                <a role="button" href="/collection/" className=" block py-2 no-underline font-light text-[#F5F5F5]">Brows all collections</a>        
            </div>
    </article>
    <article className="  w-[70vw] h-[30vh] lg:w-auto relative" >
        <picture>
            <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
            ../images/collections/watch-held-in-hand-over-road_afgiis_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_ar_1_1,c_fill,g_auto__c_scale,w_651.jpg 651w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"/>
            <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 991px) 70vw, 694px"
            srcSet="
            ../images/collections/watch-held-in-hand-over-road_afgiis_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w"/>
            <img className="h-[100%] w-[100%]"
            sizes="(max-width: 3500px) 40vw, 1400px"
            srcSet="
            ../images/collections/watch-held-in-hand-over-road_afgiis_c_scale,w_397.jpg 397w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_c_scale,w_890.jpg 890w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_c_scale,w_1127.jpg 1127w,
            ../images/collections/watch-held-in-hand-over-road_afgiis_c_scale,w_1400.jpg 1400w"
            src="../images/collections/watch-held-in-hand-over-road_afgiis_c_scale,w_1400.jpg"
            alt=""/>
            </picture>
            <div className="absolute  bg-[#3C3C34] bg-opacity-60 text-[#ffff] bottom-0 left-0 flex w-full justify-center items-center bg-">
                <a role="button" href="/collection/64f04ee8c881d587d6d92e93" className=" block py-2 no-underline font-light text-[#F5F5F5]">Accessory</a>        
    
            </div></article>
    <article className="w-[70vw] h-[30vh] lg:w-auto  relative">
        <picture>
            <img className="w-[100%] h-[100%]"
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_200.jpg 200w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_636.jpg 636w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_683.jpg 683w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_902.jpg 902w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1050.jpg 1050w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1109.jpg 1109w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1232.jpg 1232w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1355.jpg 1355w,
            ../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1400.jpg 1400w"
            src="../images/collections/mens-fashion-close-up-shirt-tucked-in-leaning_fc4j38_c_scale,w_1400.jpg"
            alt=""/>
            </picture>
            <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] bottom-0 left-0 flex w-full justify-center items-center bg-">
                <a role="button" href="/collection/64f04ee8c881d587d6d92e91" className=" block py-2 no-underline font-light text-[#F5F5F5]">Button up</a>        
            </div>
    </article>
    </section>
            </main>
      
<Footer/>
</div>
)
}