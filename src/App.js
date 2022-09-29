import logo from './logo.svg';
import './App.css';
import Home from './components/home';


import AllRoutes from './Links/AllRoutes';
import Categories_and_slider from './Links/Categories_and_slider';


function App() {
  return (
    <div className="App" style={{width:"90%",margin:"auto"}}>
     
{/* <Categories_and_slider/> */}
<AllRoutes/>
 
    </div>
  );
}

export default App;
