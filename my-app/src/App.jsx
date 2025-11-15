import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountInfo from './components/person4/accountinfo/AccountInfo';
import Profile from './components/person4/profile/Profile';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile 
        user = {
        {name: "Jacuel", 
        dateOfJoin: "10-09-23", 
        imageURL: "vite.svg", 
        streakDays: 3, 
        timeSpent: 13, 
        userStatus: "Silver",
        email: "jacuelresmone@wata.com",
        password: "plinquet243"
        } 
      }
        />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;