import { useState } from 'react'

import './App.css'

function App() {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>console.log(json))}

export default App
