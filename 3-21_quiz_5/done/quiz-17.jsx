// What is wrong with using async/await in a useEffect hook in reference to the below code snippet?

import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://yesno.wtf/api");
    const json = await response.json();
    setData(json);

  }, []);

  return <div>{data.answer}</div>;
}

export default App;