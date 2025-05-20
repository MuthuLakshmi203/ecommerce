import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import axios from 'axios'
import { Toaster } from 'react-hot-toast';

// Base URL
axios.defaults.baseURL = "http://127.0.0.1:4000";

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <Toaster position="bottom-right"
                   reverseOrder={false} />
      </BrowserRouter>
  </StrictMode>,
)
