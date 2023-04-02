import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-to-l from-gray-500 to-black-500 min-h-screen text-center">
        <div className='text-4xl underline p-5 text-gray-900 italic'> Course Verse</div>
    </div>
  )
}

export default App
