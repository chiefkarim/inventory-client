
import { useDispatch } from "react-redux";
import { UserLoggedOut } from "../redux/currentUserReducer";

export default function LogOut(){
    const dispatch = useDispatch()
    function Logout(){
    const pastDate = new Date();
    
    pastDate.setTime(pastDate.getTime() - 1);
document.cookie='Authenticate=; expires='+pastDate.toUTCString()+'; path=/;'
dispatch(UserLoggedOut())
}
    return( <a href='/' onClick={Logout} className=" lg:p-4 py-3   no-underline text-[#F5F5F5]  ">Log out</a>
    )
}