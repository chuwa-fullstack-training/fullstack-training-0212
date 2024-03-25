import { Provider } from "react-redux";
import store from "./app/store";

import Todo from "./pages/todos_RTK";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
