import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Bottom_img from './components/bottom_img';
import Collction from "./components/Collction"
import Super_deal from './components/Super_deal';
import Categories_and_slider from "./components/Categories_and_slider"
import Options_and_slider from './components/Options_and_silder';
import Navbar from './components/Navbar';
Navbar

function App() {
  return (
    <div className="App">
      <Navbar/>
<Categories_and_slider/>
<Options_and_slider/>
<Bottom_img/>
<Collction/>
<Super_deal/>
 <Home/>
 
    </div>
  );
}

export default App;
