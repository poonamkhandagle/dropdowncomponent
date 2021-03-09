import React from "react";
import Dropdown from "./components/Dropdown";
 const App = () => {
   const options = [
     {
       label:"The Color Red",
       value:"Red"
     },
     {
       label:"The Color Green",
       value:"Green"
     },
     {
       label:"A Shade Of Blue",
       value:"Blue"
     }
   ]
   return(
     <div><Dropdown options={options} /></div>
   )
 }
 export default App;
