import './App.css'

// Import Modules
import {Route, Routes} from "react-router";

// Import Components
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

// Import Routes
import Store from "./Routes/Store.jsx";
import Auth from "./Routes/Auth/Auth.jsx";
import Register from "./Routes/Auth/Register.jsx";
import Cart from "./Routes/Cart.jsx";

// User Context
import UserContextProvider from "./UserContext.jsx";

function App() {

  return (
    <>
        <UserContextProvider>
            <main className="bg-[#1F1F1C] p-2">
                <Header />
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:subpage" element={<Store />} />
                </Routes>

                <Footer />
            </main>
        </UserContextProvider>
    </>
  )
}

export default App
