import Home from './pages/Home/Home';
import About from './pages/About/About';
import GettingStart from './pages/GettingStart/GettingStart';
import Tools from './pages/Tools/Tools';
import Projects from './pages/Projects/Projects';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/getting-start" element={<GettingStart/>}/>
          <Route path='/tools' element={<Tools/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
