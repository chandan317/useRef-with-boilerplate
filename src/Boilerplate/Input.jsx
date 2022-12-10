import React from "react";
// 1st step import useRef 

function Input() {

      // 2nd step  : declare variable and useRef hook

      //5th step : .current.value in the function and .current.focus()

  return (
    <form>
      <input type="text" />
      {/* 3rd step : use the ref attribute in the above input element */}

      <button type="button">clear Input</button>
            {/* 4th step : using onClick event handler*/}
    </form>
  );
}
export default Input;
