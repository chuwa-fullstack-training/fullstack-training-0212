import React, { useState } from "react";


const Hw4 = () => {
    const [text, setText] = useState("");

    const debounce = (func, delay) =>{
        let timeoutId;
      
        return function (...args) {
          const context = this;
      
          // Clear the previous timeout
          clearTimeout(timeoutId);
      
          // Set a new timeout
          timeoutId = setTimeout(() => {
            func.apply(context, args);
          }, delay);
        };
      }
  
   const  handleChange = (input) => {
      let n = parseInt(input.target.value, 10);
      if (isNaN(n)) {
        setText("");
        return;
      }
      if (n % 10 === 1 && n !== 11) {
        setText(n + "st");
      } else if (n % 10 === 2 && n !== 12) {
        setText(n + "nd");
      } else if (n % 10 === 3 && n !== 13) {
        setText(n + "rd");
      } else {
        setText(n + "th");
      }
    };
  
    return (
      <div >
        <input
          placeholder={"Enter a number here..."}
          onChange={debounce(handleChange, 300)}
          style={{ border: "1px solid black", borderRadius: "5px", margin: "10px"}}
        />

        Ans: {text}
      </div>
    );
}

export default Hw4