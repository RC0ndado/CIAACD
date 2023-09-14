import Rutas from "./pages/routes";
import data from "../src/data.json";

function App() {
  return (
    <Rutas properties={data.property} />
  );
}

export default App;
