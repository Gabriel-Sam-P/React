import { useRef } from "react";




function UseRefT01() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();

  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefT01;
