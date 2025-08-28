import React from 'react'
import NavbarSection from './components/NavbarSection'


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CategorySection from './components/CategorySection';
import SliderSection from './components/SliderSection';
const App = () => {
  return (
    <div>
      <NavbarSection />
      <CategorySection />
      <SliderSection />
      
    </div>
  )
}

export default App
