import * as React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import VueProject from "./pages/VueProject"
import AngularProject from "./pages/AngularProject"
import CSharpProject from "./pages/CSharpProject"
import ReactProject from "./pages/ReactProject";
import ProjectP3 from "./pages/ProjectP3"
import "react-awesome-slider/dist/styles.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "./components/Container.style";
import { StyledFooter } from "./components/Footer.style";
import StyledNavBar from "./components/navbar/Navbar.style";
import { GlobalStyles } from "./components/GlobalStyles.style";

function App() {
  return (
    <Container main>
      <GlobalStyles />
      <StyledNavBar />
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/projects"><Projects /></Route>
      <Route exact path="/vueproject"><VueProject /></Route>
      <Route exact path="/reactproject"><ReactProject /></Route>
      <Route exact path="/csharpproject"><CSharpProject /></Route>
      <Route exact path="/angularproject"><AngularProject /></Route>
      <Route exact path="/whatsonpresale"><ProjectP3 /></Route>
      </Switch>

      <StyledFooter footerLabel="Created by Adrian Genosa &copy;2022 &#8594; adrian.genosa@gmail.com" />
    </Container>
  );
}
export default App;
