import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Assign from './Assignment'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assign />
  </StrictMode>,
)
