import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  // console.log(import.meta.env.VITE_API_KEY);

  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [noResultado, setNoResultado] = useState("");

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarApi = async (datos) => {
    setCargando(true);
    setNoResultado(false)
    try {
      const { ciudad, pais } = datos;

      const appid = import.meta.env.VITE_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appid}`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];
      //sacamos la latitud y la longitud de data

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`;

      const { data: clima } = await axios(urlClima);
      setResultado(clima);
      setCargando(false);

    } catch (error) {
      setNoResultado("No resultados encontrado ");
    }finally{
      setCargando(false);

    }
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarApi,
        resultado,
        cargando,
        noResultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;



      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`
      // http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}
