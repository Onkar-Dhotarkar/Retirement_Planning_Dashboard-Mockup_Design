import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Retired from './components/Retired';
import Strategy from './components/Strategy';
import Strategy_2 from './components/Strategy_2';

function App() {

  return (
    < >
      <div className="main md:flex  ">
        
        <NavBar />
        <Profile />
        <Retired />
        <Strategy_2 />                  {/* // created seperate deu to limited-time  */}
        <Strategy />                    {/* //dekstop view  */}
 
      </div>
    </>
  );
}

export default App;
