import { useState } from 'react'
import './App.css'

function App() {
    const [address, setAddress] = useState({
        firstname: '',
        lastname: '',
        street: '',
        zipcode: '',
        city: '',
        country: '',

    })
  return (
    <>
        <h1>Our First Test</h1>
    </>
  )
}

export default App
