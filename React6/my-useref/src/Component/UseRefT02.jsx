import { useRef } from "react";

function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Clicked ${countRef.current} times`);
  };

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;