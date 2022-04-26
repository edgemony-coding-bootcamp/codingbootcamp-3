import { useState, useEffect } from "react";
import "./style.css";

function List({ title }) {
  const [listResult, setListResult] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setListResult(data));
  }, [check]);

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setCheck(!check)}>Click</button>

      <ul>
        {listResult &&
          listResult.map((item) => (
            <div className="item-wrapper" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.category}</h4>
              <p>{item.price}</p>
            </div>
          ))}
      </ul>
    </>
  );
}

export default List;
