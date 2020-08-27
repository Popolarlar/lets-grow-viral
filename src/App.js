import React from "react";
import Header from "./containers/Header";
import AdList from "./containers/AdList";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <AdList/>
      <Footer/>
    </div>
  );
}

export default App;
