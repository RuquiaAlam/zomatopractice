import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
