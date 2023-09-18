
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOption from './Components/PriceOption/PriceOption'
import PriceOptions from './Components/PriceOptions/PriceOptions'
//import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-3xl bg-green-500 mt-12 " >Vite + React</h1>

      <PriceOptions></PriceOptions>
      <PriceOption></PriceOption>

    </>
  )
}

export default App
