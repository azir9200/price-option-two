
import './App.css'
import Feature from './Components/Feature/Feature'
import NavBar from './Components/NavBar/NavBar'
import PriceOption from './Components/PriceOption/PriceOption'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {


  return (
    <>

      <NavBar></NavBar>

      <h1 className="text-3xl bg-green-500 mt-12 " >Vite + React</h1>

      <PriceOptions></PriceOptions>
      <PriceOption></PriceOption>
      <Feature></Feature>

    </>
  )
}

export default App
