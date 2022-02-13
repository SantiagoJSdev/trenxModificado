import { Provider } from "react-redux";
import { RouterApp } from "./routers/RouterApp";
import { store } from "./store/store";


export const App = () => {

  // moduloPrueba()

  console.log('holad')
  return (
    <>
      <Provider store={store}>
      <RouterApp/>
      </Provider>
    </>
  );
}

export default App;
