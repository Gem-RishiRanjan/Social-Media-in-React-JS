import './App.css';
import Mainpage from './mainpage';
import Landingpage from './landingpage';
import Profile from './components/profile';
import Error from './components/error';
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

      <Route exact path = "/mainpage" element={<Mainpage />} />
      <Route exact path = "/landingpage" element={<Landingpage />} />
      <Route exact path = "/resetpassword" element={<Resetpassword />} />
      <Route exact path = "/homepage/:loginid" element={<Homepage />} />
      <Route exact path = "/signup" element={<Signup />} />
      <Route exact path = "/profile/:id" element={<Profile />} />
      <Route exact path = "/findfriends" element = {<Findfriends />} />
    
      <Route path="*" element = {<Error />} />
      
    </Routes>
  </BrowserRouter>
  );
}
export default App;
