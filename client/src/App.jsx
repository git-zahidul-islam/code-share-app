import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Code from './pages/Code';
// import ShareCode from './pages/ShareCode';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/code/:id" element={<Code/>} />
          {/* <Route path="/code/:id" element={<ShareCode/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
