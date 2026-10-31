import { useState } from 'react'
import './App.css'
//import Button from './Button.jsx'
//import Button from './Button'
import Button from './components/Button/Button.jsx'
import Display from './components/Display/Display.jsx'



function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
        setCount(count + 1)
  }

  // useEffect (() => {
  //   console.log('count', count);
  //   if (count > 11) {
  //     setCount(0)
  //   }
  // }, [count])







  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick} >
        ボタン
      </Button>
      <Display count={count} />

    </>
  )
}




export default App
