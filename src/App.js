import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/resume-builder" element={<ResumeBuilder />} />
          </Routes>
      </Router>
  );
}

export default App;
