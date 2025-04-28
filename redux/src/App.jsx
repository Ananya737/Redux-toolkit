import { increment,decrement } from "./CounterSlice";
import { useSelector,useDispatch } from "react-redux";


const App=()=>{
  const mycnt=useSelector(state=>state.mycounter.count);
  const dispatch= useDispatch();
  return(
    <>
    <h1>Counter App!</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <h2>{mycnt}</h2>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    
    
    </>
  )
}
export default App;