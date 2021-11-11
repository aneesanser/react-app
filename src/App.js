import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DisplayName from "./Component/DisplayName";
import ProfileInfo from "./Component/ProfileInfo";


function App() {

  return (
    <div className="App">
      <Router>
        
     <Routes>
       <Route>
          <Route exact path="/"  element={ <DisplayName />}/>
          <Route exact path="/profile/:id"  element={ <ProfileInfo/>}/>
            
        </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
