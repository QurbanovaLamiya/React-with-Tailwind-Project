import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Foods from "./components/Foods";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HeadLineCards />
      <Foods />
    </Fragment>
  );
};

export default App;
