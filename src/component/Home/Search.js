import React, { Component } from 'react';
import "./Search.css";
const lurl ="https://zomrestapi.onrender.com/location"
const rurl="https://zomrestapi.onrender.com/quicksearch"
export class Search extends Component {

constructor(){
  super();
  this.state = {


    location:"",
     restaurants:""
  };
}
renderCity=(data)=>
{

  if(data)
  {

    return data.map((item)=>
    {
      return(
        <option key={item._id} value={item.state_id}>{item.state}</option>
      )
    })
    
  }

}

// renderRestaurant=()=>
// {
//   return(

//   )

// }

  render() {
    return (
      <div id="search">
      <div id="logo">
          <span>e!</span>
      </div>
      <div id="text-style">
          <p>Find the best restaurants, cafés, and bars...</p>
      </div>
      <div id="dropdown">
          <select id="select-option">
              <option>----SELECT CITY----</option>
        {this.renderCity(this.state.location)}
          </select>
          <select id="select-style">
              <option>----SELECT RESTAURANTS----</option>
             
          </select>
      </div>
  </div>
    )
  }

//api calling on page load
componentDidMount()
{

  fetch(lurl,{method:"GET"})
  .then((res)=>res.json())
  .then((data)=>
  {
    this.setState({location:data})
  })
}
}
export default Search