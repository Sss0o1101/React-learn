import './App.css'
//import Button from './Button.jsx'
import Button from './Button'


function App() {

  const handleClick = () => {
    console.log('Button clicked');

  }


  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick} >
        <span>クリック</span>
      </Button>
    </>
  )
}

export default App
