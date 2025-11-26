import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home/home.tsx'
import About from './about/about.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <About />
   
  </StrictMode>,
)
