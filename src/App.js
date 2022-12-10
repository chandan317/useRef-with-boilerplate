import "./App.css";
import Input from "./Boilerplate/Input";
import React,{useRef} from "react";
// 1st step import useRef 

function App() {

   // 2nd step  : declare variable and useRef hook
  const inputRef = useRef(null);
 
//5th step : .current.value in the function and .current.focus()
  function handleClearInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }
  return (<>

    <Input/>
    <form>
      <input type="text" ref={inputRef} />
      {/* 3rd step : use the ref attribute in the above input element */}

      <button type="button" onClick={handleClearInput}>
        clear Input
      </button>
      {/* 4th step : using onClick event handler*/}
    </form>
    </>
  );
}


export default App;
