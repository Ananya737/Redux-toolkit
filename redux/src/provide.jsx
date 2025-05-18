import { changeName } from "./nameSlice2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";


const Provide=()=>{
    const [nm,setName]=useState("");
    const dispatch= useDispatch();
    const name=useSelector(state=>state.myName.name)

    return(
        <>

        Enter Name: <input type="text" onChange={(e)=>(setName(e.target.value))} value={nm} />
        <button onClick={()=>{dispatch(changeName(nm))}}>Change name</button>
        
        <p>{name}</p>
        
        </>
    )
}
export default Provide;