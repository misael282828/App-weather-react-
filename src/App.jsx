import AppClima from "./componets/AppClima"
import { ClimaProvider } from "./context/ClimaProvider"

// const api = {
// key: 'b1783603c43a7a74fdbc0527b91b635d',
// base: 'https://api.openweathermap.org/data/2.5/'
// fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
// }

function App() {
  

  return (
    
    <ClimaProvider>
        <header>
          <h1>Buscador de clima</h1>
        </header>
      <AppClima/>
    </ClimaProvider>
     
  )
}

export default App
