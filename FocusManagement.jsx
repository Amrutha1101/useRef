import { useRef } from "react";

export const FocusManagement = () => {
  const re = useRef(null);
  const handleCLick = () => {
    re.current.focus();
  };
  return (
    <>
      <input ref={re} type="text" />
      <button onClick={handleCLick}>Click me to set focus on text field</button>
    </>
  );
};
