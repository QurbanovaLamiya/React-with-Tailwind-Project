import { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HeadLineCards />
    </Fragment>
  );
};

export default App;
