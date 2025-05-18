import { changeName,changeColor } from "./nameSlice2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";


const Provide=()=>{
    const [nm,setName]=useState("");
    const [color,setColor]=useState("");
    const dispatch= useDispatch();
    const name=useSelector(state=>state.myName.name)
    const clr=useSelector(state=>state.myColor.color)

    return(
        <>

        Enter Name: <input type="text" onChange={(e)=>(setName(e.target.value))} value={nm} />
        <button onClick={()=>{dispatch(changeName(nm))}}>Change name</button>

        Enter Name: <input type="text" onChange={(e)=>(setColor(e.target.value))} value={color} />
        <button onClick={()=>{dispatch(changeColor(color))}}>Change color</button>


        
        <p>{name}</p>
        <div style={{width:"200px",height:"100px",backgroundColor:clr}}></div>
        
        </>
    )
}
export default Provide;