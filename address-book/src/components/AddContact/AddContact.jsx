import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

export default function AddContact() {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_CONTACT",
      payload: {
        name: inputName,
        surname: inputSurname,
        phone: inputPhone,
      },
    });
  };

  return (
    <div className={styles.AddContact}>
      <form onSubmit={onFormSubmit}>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          placeholder="Nome ..."
          id="name"
          name="name"
          required
        />
        <input
          value={inputSurname}
          onChange={(e) => setInputSurname(e.target.value)}
          type="text"
          placeholder="Cognome ..."
          id="surname"
          name="surname"
          required
        />
        <input
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
          type="text"
          placeholder="Numero ..."
          id="phone"
          name="phone"
          required
        />
        <input type="submit" value="Aggiungi" />
      </form>
    </div>
  );
}
