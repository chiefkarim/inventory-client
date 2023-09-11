export default function Nav(){
    return(<nav className="px-28  py-0 flex justify-between bg-[#3C3C34]">

    <div className="text-5xl flex  ">
<a role="button" href="/" className="  py-6  no-underline text-[#F5F5F5]">Home</a>        
<a role="button" href="/collection/" className=" px-6 py-6  no-underline text-[#F5F5F5]">collection</a>        
<a role="button" href="/item/create/" className=" px-6 py-6  no-underline text-[#F5F5F5]">create item</a>        
<a role="button" href="/collection/create/" className=" px-6 py-6  no-underline text-[#F5F5F5]">create collection</a>        
</div  >
<div className="py-6">
    <a  role="button" href="/sign-up" className="text-5xl px-6    no-underline text-[#F5F5F5]  ">Sign up</a>
    <a  role="button" href="/log-in" className="text-5xl     no-underline text-[#F5F5F5]  ">Log in</a>    
     
</div>
</nav>)
}