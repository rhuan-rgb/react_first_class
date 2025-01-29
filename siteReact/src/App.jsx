import Component_Create from "./ButtonCreate";
import Component_Delete from "./ButtonDelete";

function App() {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <Component_Create />
      <Component_Delete />
    </div>
  );
}

export default App;
