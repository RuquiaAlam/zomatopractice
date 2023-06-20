import React, { Component } from 'react';
import "./QuickSearch.css";
import QuickDisplay from './QuickDisplay';

class QuickSearch extends Component {
  render() {
    return (
      <div>
      <div id ="quickSearch">

      <span id ="quickHeading">QuickSearch</span>
      <span id ="quickSubheading">Discover Restaurants by type</span>
   
<QuickDisplay/>

</div>
</div>
      
    
        

    );
  }
}

export default QuickSearch;