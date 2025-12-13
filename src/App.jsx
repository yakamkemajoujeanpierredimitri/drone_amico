import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Go from "./pages/Flashpage"
import SignUp from "./pages/signup";
import SignIn from './pages/signin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Go />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
