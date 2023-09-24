import { useNavigate } from 'react-router-dom'; 

export default function LogOut(){
function Logout(){
    const pastDate = new Date();
    pastDate.setTime(pastDate.getTime() - 1);
document.cookie='Authenticate=; expires='+pastDate.toUTCString()+'; path=/;'

}
    return( <a href='/' role="button" onClick={Logout} className=" lg:p-6 py-3   no-underline text-[#F5F5F5]  ">Log out</a>
    )
}