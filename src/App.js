import logo from './logo.svg';
import './App.css';
// import Header from './componants/Header';
import Navbar from './componants/Navbar';
import Login from './componants/Login';


function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Navbar/>
        <Login/>
        
    </div>
  );
}

export default App;
