// Anything wrong? if wrong, fix it

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://yesno.wtf/api").then((response) => {
      setData(response.data);
    })
  }, []);
 
  return (
  <>
    <div>{data.map((d) => <p>{d.text}</p>)}</div>
  </>
  );
}