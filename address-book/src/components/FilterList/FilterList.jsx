import { useState } from "react";
import styles from "./index.module.scss";

export default function FilterList({ onFilteredList }) {
  const [filterInput, setFilterInput] = useState("");

  return (
    <div className={styles.FilterList}>
      <input
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
        type="text"
        name="filter"
        id="filter"
        placeholder="Ricerca per nome/cognome ..."
      />
      <button onClick={() => onFilteredList(filterInput.toLowerCase())}>
        Cerca
      </button>
    </div>
  );
}
