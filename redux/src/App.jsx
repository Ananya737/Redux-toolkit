import { changeColor } from "./colorSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

const App=()=>{
  const [inp,setInp]=useState("");
  const dispatch=useDispatch();

const clr=useSelector(state=>state.mycolor.color)
  return(
    <>

    <h1>Welcome</h1>
    Enter color: <input type="text"  value={inp} onChange={(e)=>{setInp(e.target.value)}} />
    <button onClick={()=>{dispatch(changeColor(inp))}}>Change color</button>

    <div style={
      {
        width:"200px",
        height:"200px",
        backgroundColor:clr
      }

    }> </div>

  
    
    
    </>
  )
}
export default App;



















