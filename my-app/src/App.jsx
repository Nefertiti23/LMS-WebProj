import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/person4/settings_page/Profile';

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
        userStatus: "Silver"
        } 
      }
        />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;