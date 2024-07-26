import React from "react";
import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import AppStore from './src/store/appStore'
import AppRouter from "./appRouter";

const App = () => {
  return (
    <Provider store={AppStore}>
       <AppRouter/>
    </Provider>
  );
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
