import { useState, useEffect } from "react";

const Message = ({ msg, onChange }) => {
  const [dataFetched, setDataFetched] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDataFetched(["apple", "kiwi", "ananas"]);
    }, 1000);
  }, []);

  return (
    <>
      <h1>{msg}</h1>
      <button onClick={() => onChange(dataFetched[0])}>Send to parent</button>
    </>
  );
};

export default Message;
