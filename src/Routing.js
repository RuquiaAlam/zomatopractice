import {BrowserRouter,Route} from "react-router-dom"
import Home from "./component/Home/Home"
import Header from "./Header"
import Footer from "./Footer"
const Routing =()=>
{
    return(
<>
<BrowserRouter >
<Header/>

<Route exact path ="/" component ={Home}/>

<Footer/>

</BrowserRouter>
    </>

    )
    


}
export default Routing