import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function Index(){

    return(
    < >
    
    <picture className="absolute h-full  w-screen -z-20  ">
        <img className="h-fit lg:h-full w-screen"
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcSet="
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_200.jpg 200w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_434.jpg 434w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_592.jpg 592w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_698.jpg 698w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_799.jpg 799w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_909.jpg 909w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1000.jpg 1000w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1073.jpg 1073w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1156.jpg 1156w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1238.jpg 1238w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1317.jpg 1317w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1391.jpg 1391w,
        ../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1400.jpg 1400w"
        src="../images/background/rooftop-city-fashion_x0ee6e_c_scale,w_1400.jpg"
        alt=""/>
        <div className="relative -top-2 lg:-top-28 "><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100vw 100vh" fill="none">
            <rect width="100%" height="100%" fill="url(#paint0_linear_14_6)"/>
            <defs>
            <linearGradient id="paint0_linear_14_6" x1="756" y1="0" x2="756" y2="164" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CFCDCF" stopOpacity="0.5"/>
            <stop offset="1" stopColor="#D7CEB2"/>
            </linearGradient>
            </defs>
            </svg></div>
        </picture>
        <Nav />

    <main className="lg:px-28 px-4">
        <section className="lg:h-[100vh] h-[40vh] ">
           <h1 className="lg:text-13xl  lg:w-[27rem] text-[1.1rem] w-[14rem]  font-thin pt-[4.7rem] pb-5 lg:py-16 text-[#f5f5f5] ">Fashion is a statement 
            make sure you say the right thing</h1>
            <Link role="button" to="/collection/" className="p-2  lg:inline hover:bg-[#F5F5F5] hover:text-[#3C3C34] lg:p-4  no-underline bg-[#3C3C34] text-[#F5F5F5]">Shop All</Link>         
        
        </section>
        <h1 className="text-center  font-light pb-12 text-17xl text-[#3C3C34]">collections</h1>
        <section className="grid my-10 lg:gap-8  lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-col ">
        <article className="relative col-span-1 w-[80%] justify-self-center h-[80%] ">  
        <Link role="button" to="/collection/" className="w-full h-full   block py-2 no-underline font-light text-[#F5F5F5]">        

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
                <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] -bottom-2 left-0 flex w-full justify-center items-center bg-">
                    <Link role="button" to="/collection/" className=" block py-2 no-underline font-light text-[#F5F5F5]">Brows all collections</Link>         
                </div>
                </Link>
        </article>
        <article className="grid lg:col-span-2 grid-flow-col grid-cols-2 self-center lg:gap-8 w-[100%] h-[100%]">
        <article className=" justify-self-center col-span-1 relative w-[80%] h-[80%]" >
        <Link role="button" to="/collection/6509b21ae50ccd4dced24719" className=" h-[100%] w-[100%] block py-2 no-underline font-light text-[#F5F5F5]">

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
                <div className="absolute  bg-[#3C3C34] bg-opacity-60 text-[#ffff] -bottom-2 left-0 flex w-full justify-center items-center bg-">
                <Link role="button" to="/collection/6509b21ae50ccd4dced24719" className=" block py-2 no-underline font-light text-[#F5F5F5]">Accessory</Link>         
        
                </div>
                </Link>         
                </article>
        <article className=" lg:col-span-1 justify-self-center relative w-[80%] h-[80%] ">
        <Link role="button" to="/collection/6509b21ae50ccd4dced24717" className="h-full w-full block  py-2 no-underline font-light text-[#F5F5F5]">

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
                <div className="absolute bg-[#3C3C34] bg-opacity-60 text-[#ffff] -bottom-2 left-0 flex w-full justify-center items-center bg-">
                    <Link role="button" to="/collection/6509b21ae50ccd4dced24717" className=" block py-2 no-underline font-light text-[#F5F5F5]">Button up</Link>         
                </div>
                </Link>
        </article>
        </article>
        </section>
            </main>
            <Footer/>

</>)

}