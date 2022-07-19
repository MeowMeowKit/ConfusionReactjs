import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponents";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import TestFetchComponet from "./useFetch/TestFetchComponet";
const store = ConfigureStore();
class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <BrowserRouter>
               <div className="App">
                  <Main />
                  {/* <TestFetchComponet /> */}
               </div>
            </BrowserRouter>
         </Provider>
      );
   }
}

export default App;
