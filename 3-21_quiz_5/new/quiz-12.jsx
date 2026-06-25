/* What is the issue in the below code regarding useMemo hook: */

import React, { useMemo } from "react";

// props = {
//   numbers: [1, 2, 3, 4, 5],
//   name: "count"
// }


function App({ numbers, name }) {
  const doubledNumbers = useMemo(() => numbers.map((n) => n * 2));
 
  return (
    <div>
      {name}
      {doubledNumbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}
 
export default App;