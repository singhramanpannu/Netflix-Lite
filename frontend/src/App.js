import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import WatchList from "./pages/watchlist";
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/watchlist" element={<WatchList></WatchList>}/>
    </Routes>
    </Router>
  );
}

export default App;
