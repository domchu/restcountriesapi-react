import { useState } from 'react'
import './App.css'
import Countries from './Components/Countries';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <Countries/>
      </div>
      
    </>
  )
}

export default App
