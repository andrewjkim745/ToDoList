import React from "react";
import ThemeContextProvider from './components/contexts/ThemeContext'
import  Container from './components/container'
import './App.css'
import { AuthProvider } from './components/contexts/AuthContext'
function App() {

  return (
// {/* <ThemeContextProvider> */}
<AuthProvider>
  <Container/>
</AuthProvider>
// </ThemeContextProvider>
  );
}

export default App;