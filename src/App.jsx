import { useState } from 'react';




function App() {
//const[count, setCount] = useState(0)
const[show ,setShow]=useState(true)
const handleClick =()=>{
  //setCount(count+1)
  setShow((prev)=>!prev)
}

  return (
    <>
<h1 className="text-red-600"> react</h1>
//<h2>{count}</h2>
<button className='bg-blue-200'  onClick={handleClick}>Click</button>
{show &&<h2>Hello react</h2>}
    </>
  )
}

export default App
