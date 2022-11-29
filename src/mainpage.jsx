import './App.css';
import Homepage from './components/homepage';
import Landingpage from './landingpage';
import {useNavigate} from 'react-router-dom';

function Mainpage(){
    const navigate = useNavigate();
    const logg = localStorage.getItem("islogin")==='true';
    console.log(logg)
    return(
        
        <div>
            {
            !logg
            ? <Landingpage />

            : <Homepage />
            }
        </div>
    );
}
export default Mainpage;