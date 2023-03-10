import "./App.css";
import Hooks from "./components/Hooks";
import { useSelect } from "./context/Context";

function App() {
  const [state, dispatch ] = useSelect();
  console.log(state.value);
  return (
    <div>
      <div>
        <Hooks />
      </div>
    </div>
  );
}

export default App;
