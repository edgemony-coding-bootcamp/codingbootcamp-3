import Button from "./components/Button";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button value="Procedi" />
      <Button value="Annulla" />
      <List title="Lista prodotti" />
    </div>
  );
}

export default App;
