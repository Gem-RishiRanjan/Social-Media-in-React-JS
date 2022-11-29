import './App.css';
// import Landingpage from './landingpage';
import Mainpage from './mainpage';
import Landingpage from './landingpage';
import Profile from './components/profile';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Resetpassword from './components/resetpassword';
import Homepage from './components/homepage';
import Signup from './components/signup';

function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Mainpage />} />
      <Route path = "/landingpage" element={<Landingpage />} />
      <Route path = "/resetpassword" element={<Resetpassword />} />
      <Route path = "/homepage" element={<Homepage />} />
      <Route path = "/signup" element={<Signup />} />
      <Route path = "/profile" element={<Profile />} />
      
    </Routes>
  </BrowserRouter>
  );
}
export default App;
