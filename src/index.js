import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import eruda from "eruda";
import './index.css';
import App from "./App.js"
import {Provider} from "react-redux"
import store from "./Reducer.js"

eruda.init();

 
var z =
document.querySelector('#root')


var y = ReactDOM.createRoot(z)
y.render(
   <Provider store={store}>
   <App/>
  </Provider> 
  )
  
 




