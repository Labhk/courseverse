import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-green-300 min-h-screen text-center">
        <div className='text-4xl underline p-5'> Course Verse</div>
    </div>
  )
}

export default App
