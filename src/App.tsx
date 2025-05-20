import { Provider } from "react-redux";
import { setupStore } from "~/app/store";
import { getAllProducts } from "./actions";
import AppImplementation from "./containers/App";

const store = setupStore();

store.dispatch(getAllProducts());

const App = () => (
  <Provider store={store}>
    <AppImplementation />
  </Provider>
);

export default App;
