import './App.css';
import Homepage from './components/homepage';
import Landingpage from './landingpage';
import {useNavigate} from 'react-router-dom';

function Mainpage(){
    const navigate = useNavigate();

    const logg = localStorage.getItem("islogin");
    if(logg == 1){
        return(
            <div><Homepage /></div>
        );
    }else{
        
        return(
            
            <Landingpage />
        );
    }



    return(
        <></>

    );
}
export default Mainpage;