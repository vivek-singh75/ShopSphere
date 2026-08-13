import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";


console.log("BASE:", import.meta.env.BASE_URL)
console.log("PATH:", window.location.pathname)

createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename="/ShopSphere">
     <App />
  </BrowserRouter>
)
