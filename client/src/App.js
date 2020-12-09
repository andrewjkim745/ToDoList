import React from "react";
import ThemeContextProvider from './components/contexts/ThemeContext'
import  Container from './components/container'
import './App.css'
function App() {

  return (
<ThemeContextProvider>
  <Container/>
</ThemeContextProvider>
  );
}

export default App;