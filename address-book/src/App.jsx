import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddContact from "./components/AddContact";
import ContactsList from "./components/ContactsList";
import FilterList from "./components/FilterList";
import styles from "./App.module.scss";

function App() {
  // const store = useSelector((state) => state);
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const [listData, setListData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  // const [valueIncrement, setValueIncrement] = useState(0);

  useEffect(() => {
    setFilteredList(listData);
  }, [listData]);

  const deleteContact = (actualPhone) => {
    const filteredListData = listData.filter(
      (contact) => contact.phone !== actualPhone
    );
    setListData(filteredListData);
  };

  const onFilteredList = (value) => {
    setFilteredList(
      listData.filter(
        (contact) => contact.name.toLowerCase().includes(value)
        // ||
        // contact.surname.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className={styles.App}>
      <AddContact />
      <ContactsList deleteContact={deleteContact} />
      <FilterList onFilteredList={onFilteredList} />
      <br />
      <br />
      <br />
      {/* <input
        type="number"
        value={valueIncrement}
        onChange={(e) => setValueIncrement(e.target.value)}
      /> */}
      <h1>{value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "INCREMENT10", payload: 10 })}>
        +10
      </button>
      {/* <button
        onClick={() =>
          dispatch({ type: "INCREMENTXN", payload: valueIncrement })
        }
      >
        + {valueIncrement}
      </button> */}
    </div>
  );
}

export default App;
