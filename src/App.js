import "./App.css";
import Circle from "./Components/Circle/Circle";
import { useState, useEffect, useRef } from "react";
import Writing from "./Components/Writing";

function App() {
  let count = useRef(null);
  let leftCount = useRef(0);
  let opacity = useRef(0);
  const [matrix, setMatrix] = useState(
    new Array(45).fill({ left: 100, top: 100, opacity: 0.01 })
  );

  useEffect(() => {
    const updateMatrixArray = () => {
      let emptyArray = matrix.map((item) => {
        if (count.current === 10) {
          count.current = count.current - 9;
          leftCount.current = leftCount.current - 5;
          opacity.current -= 0.15;
        }
        count.current += 1;
        leftCount.current += 1;
        opacity.current += 0.03;
        console.log(opacity.current);
        return {
          left: leftCount.current * 40,
          top: count.current * 40,
          opacity: opacity.current,
        };
      });
      return emptyArray;
    };
    if (count.current === null) count.current = 1;
    setMatrix(updateMatrixArray());
  }, []);

  let renderItems = [];

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    renderItems.push(<Circle key={i} matrix={matrix[i]} />);
  }

  return (
    <>
      <Writing />
      <div className="container">{renderItems}</div>
    </>
  );
}

export default App;
