import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './routes'
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar"


  function App(props) {

  
  function showPage(routes) {
    var result = "";
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        )
      })
      return <Switch>{result}</Switch>
    }
  }

  return (
     <Router>
       <Header/>
       <div className="App">
         <div className="container mt-100 mb-100">
           <SideBar/>
          {showPage(routes)}
         </div>
       </div>
     </Router>
  );
}



export default App;
