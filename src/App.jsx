import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Go from "./pages/Flashpage"
import SignUp from "./pages/signup";
import SignIn from './pages/signin';
import Profile from './pages/Profile';
import LiveStream from './pages/LiveStream';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Go />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/d" element={
          <ProtectedRoute>
            <LiveStream />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App
