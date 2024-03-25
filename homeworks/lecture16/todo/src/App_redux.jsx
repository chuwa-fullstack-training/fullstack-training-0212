import { Provider } from "react-redux";
import store from "./redux/store";

import Todo from "./pages/todos_redux";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
