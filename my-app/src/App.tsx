import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Basic from './a_basic';
import Hooks from './b_hooks';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/basic' element={<Basic />}/>
        <Route path='/hooks' element={<Hooks />}/>
      </Routes>
    </div>
  );
}


export default App;
