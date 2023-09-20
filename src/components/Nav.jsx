export default function Nav(){
    function toggleMobileMenu(){
        const menu=document.querySelector('.mobileMenu')
        menu.className.includes('hidden') ? menu.classList.add('flex') : ''
        menu.classList.toggle('hidden')

    }
    return(<nav className="sm:px-28 absolute sm:static sm:w-auto w-full  top-0  py-2 sm:flex sm:flex-row flex flex-col  justify-between bg-[#3C3C34]">
<a role="button" href="/" className="text-5xl  sm:p-6 py-2 px-3 font-light no-underline sm:min-w-fit text-[#F5F5F5]">E-commerce</a>        
    <div className="mobileMenu hidden  sm:text-5xl sm:flex  w-full  text-center font-thin sm:flex-row  flex-col sm:justify-between ">
<a role="button" href="/" className="  sm:p-6 py-3   no-underline text-[#F5F5F5]">Home</a>        
<a role="button" href="/collection/" className="py-3 sm:p-6  no-underline text-[#F5F5F5]">Collection</a>        
<a role="button" href="/item/create/" className="py-3  sm:p-6  no-underline text-[#F5F5F5]">Create item</a>        
<a role="button" href="/collection/create/" className="py-3  sm:p-6   no-underline text-[#F5F5F5]">Create collection</a>        
    <a  role="button" href="/log-in" className=" sm:p-6 py-3   no-underline text-[#F5F5F5]  ">Log in</a>
</div  >
        <a onClick={toggleMobileMenu} className="absolute right-[1rem]  p-2 no-underline text-[#F5F5F5]  sm:hidden flex flex-col justify-between w-[30px] h-[21px]">
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>
            <span className=" h-[3px] w-full bg-white rounded"  ></span>            
        </a>
</nav>)
}