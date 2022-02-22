import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from'./components/login'
import ToolBar from './components/tolbar'
import Chamados from './components/Chamados'
import Perfil from './components/Perfil'

function App() {
  return (
    <BrowserRouter>
    <div style={{display:"flex",flexDirection:"row"}}>
    <ToolBar />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/perfil" element={<Perfil/>}/>
    <Route path="/chamados" element={<Chamados />} />
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
