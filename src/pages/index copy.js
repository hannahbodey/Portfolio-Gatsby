import React from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

export default createRoot(document.getElementById('root')).render(<App />)