import { useState } from "react";

function App() {
  const [origin, setOrigin] = useState("0");
  const [convert, setConvert] = useState("0th");
  return (
    <div className="flex m-20 justify-center">
      <input
        className="w-56 p-2 m-5 border border-gray-500 rounded-md"
        type="text"
        value={origin}
        onChange={(e) => {
          const reg = /^[0-9]*$/;
          const str = e.target.value.toString();
          setOrigin(str);
          if (str === "") {
            setConvert("0th");
          } else if (!reg.test(str)) {
            setConvert(str);
          } else {
            const num = parseInt(str);
            if (isNaN(num)) {
              setConvert("Invalid input");
            } else {
              setConvert(
                num % 10 === 1 && num % 100 !== 11
                  ? num + "st"
                  : num % 10 === 2 && num % 100 !== 12
                    ? num + "nd"
                    : num % 10 === 3 && num % 100 !== 13
                      ? num + "rd"
                      : num + "th",
              );
            }
          }
        }}
      />
      <input
        className="w-56 p-2 m-5 border border-gray-500 rounded-md"
        type="text"
        value={convert}
        readOnly={true}
      />
    </div>
  );
}

export default App;
