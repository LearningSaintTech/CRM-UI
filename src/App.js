import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './Components/commonComponent/protectedroutes';
import Home from './Components/homeComponent/Home';
import Login from './Components/authComponent/Login';
import AdminDashboard from "./Components/dashboard/AdminDashboard";
import UserDashboard from "./Components/dashboard/UserDashboard";
import OAuth2RedirectHandler from './Components/googleOauth2/Oauth2RedirectHandler';
import Logout from './Components/authComponent/Logout';
const App = () => {
   

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/admin" element={<AdminDashboard  />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler  />} />
        </Routes>
    );
};

export default App;
