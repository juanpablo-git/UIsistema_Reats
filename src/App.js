import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Login from'./components/login'
import ToolBar from './components/tolbar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
    <div style={{display:"flex",flexDirection:"row"}}>
    <ToolBar />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
