import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import ThemeContextProvider from './'

function App() {

  return (
<ThemeContextProvider>
  <Routes/>
</ThemeContextProvider>
  );
}

export default App;