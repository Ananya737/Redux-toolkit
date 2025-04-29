import { useSelector,useDispatch } from "react-redux";
import { changeName } from "./nameSlice";


const App=()=>{
  const username=useSelector(state=>state.myname.user);
  const dispatch= useDispatch();
  return(
    <>

    <h1>Welcome {username}</h1>
    <button onClick={()=>dispatch(changeName())}>Click</button>

  
    
    
    </>
  )
}
export default App;