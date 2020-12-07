import React from "react";
import ThemeContextProvider from './components/contexts/ThemeContext'
import { Routes } from './components/routes/index'
import './App.css'
function App() {

  return (
<ThemeContextProvider>
  <Routes/>
</ThemeContextProvider>
  );
}

export default App;