import { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
};

export default App;
