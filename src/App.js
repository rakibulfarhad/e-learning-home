import logo from './logo.svg';
import './App.css';
import Home from './componants/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PopularCourse from './componants/PupolarCourse/PopularCourse';
import ProfessionalCourse from './componants/ProfessionalCourse/ProfessionalCourse';
import Footer from './componants/Footer/Footer';
import MenuBar from './componants/MenuBar/MenuBar';
import About from './componants/About/About';
import NotFound from './componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          
          <Route exact path="/popular">
            <PopularCourse/>
          </Route>
          <Route exact path="/professional">
            <ProfessionalCourse/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>


        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
