import { useEffect, useRef, useState } from "react";

export const Persistent = () => {
  const prevName = useRef("");
  const [name, setName] = useState("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        My name is {name} previously it was {prevName.current}
      </p>
    </>
  );
};
