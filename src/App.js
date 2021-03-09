import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
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
 const App = () => {
   const [selected,setSelected] = useState(options[0]);
   return(
     <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options} />
      </div>
   )
 }
 export default App;
