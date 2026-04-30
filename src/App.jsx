import './App.css'
//import Button from './Button.jsx'
//import Button from './Button'
import Button from './components/Button/Button.jsx'


function App() {
  const [count, setCount] = useState(0)





  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} />
    </>
  )
}

export default App
