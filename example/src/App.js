import './styles.css'
import Map from './components/Map'
import Info from './components/Info'
import { useState } from 'react'

export default function App() {

  const [features, setFeatures] = useState([])

  return (
    <div className='App'>
      <Map features={(e) => setFeatures(e)} />
      <Info features={features} />
    </div>
  )
}
