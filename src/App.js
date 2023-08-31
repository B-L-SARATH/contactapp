import store from "./contactappredux/store/store";
import Contactapp from "./contactappredux/Contactapp";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Contactapp />
    </Provider>
  );
}

export default App;
