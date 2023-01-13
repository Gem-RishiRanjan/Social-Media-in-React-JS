import './App.css';
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
import Findfriends from './components/findfriends';

function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Mainpage />} />

      <Route path = "/mainpage" element={<Mainpage />} />
      <Route path = "/landingpage" element={<Landingpage />} />
      <Route path = "/resetpassword" element={<Resetpassword />} />
      <Route path = "/homepage/:loginid" element={<Homepage />} />
      <Route path = "/signup" element={<Signup />} />
      <Route path = "/profile/:id" element={<Profile />} />
      <Route path = "/findfriends" element = {<Findfriends />} />
    

      
    </Routes>
  </BrowserRouter>
  );
}
export default App;
