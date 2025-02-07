import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import AdminLogin from './pages/AdminPages/AdminLogin';
import AdminDash from './pages/AdminPages/AdminDash';
import ItemDetails from './pages/ItemDetails';
import CheckoutPage from "./pages/CheckoutPage";
import AddAdmin from "./pages/AdminPages/AddAdmin";
import AddItem from "./pages/AdminPages/AddItem";

const PrivateRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "admin" ? children : <Navigate to="/" />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={ <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>}/>
        <Route path='/mens' element={<Men/>}/>
        <Route path='/womens' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>         
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDash/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
     <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

