import './App.css';
import MultiSelect from './MainPage';
import AnalyzationPage from './AnalyzationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MultiSelect />} />
            <Route path="/analyze" element={<AnalyzationPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;